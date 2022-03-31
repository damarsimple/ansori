import { gql } from "@apollo/client";
import dynamic from "next/dynamic";
import React, { Component } from "react";
import { client } from "../modules/client";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type MyProps = {
  handleChange: (e: string) => void;
};
type MyState = {
  content: string;
  files: File[];
};
export default class Editor extends Component<MyProps, MyState> {
  private quill: any;
  private reactQuillRef: any;

  constructor(props: MyProps | Readonly<MyProps>) {
    super(props);
    this.state = { content: "", files: [] };

    this.handleChange = this.handleChange.bind(this);

    this.quill = null; // Quill instance
    this.reactQuillRef = null; // ReactQuill component
  }

  componentDidMount() {
    this.attachQuillRefs();
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== "function") return;
    this.quill = this.reactQuillRef.getEditor();
  };
  handleChange(content: string) {
    this.setState({ content });

    this.props.handleChange(content);
  }

  imageHandler() {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (!input.files) return;
      const file = input.files[0];
      const formData = new FormData();
      const range = this.quill.getSelection(true);

      const { data } = await client.mutate({
        mutation: gql`
          mutation UploadFile($file: Upload) {
            uploadFile(file: $file)
          }
        `,
        variables: { file },
      });

      this.quill.insertEmbed(
        range.index,
        "image",
        `${window.location.origin}/images/loaders/placeholder.gif`
      );
      this.quill.setSelection(range.index + 1);
      this.quill.deleteText(range.index, 1);
      this.quill.insertEmbed(
        range.index,
        "image",
        `${process.env.NEXT_PUBLIC_ASSET_ENDPOINT}${data?.uploadFile}`
      );
    };
  }

  render() {
    return (
      <div>
        <ReactQuill
          //@ts-ignore
          ref={(el) => {
            this.reactQuillRef = el;
          }}
          modules={{
            toolbar: {
              container: [
                [
                  { header: "1" },
                  { header: "2" },
                  { header: [3, 4, 5, 6] },
                  { font: [] },
                ],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "video"],
                ["link", "image", "video"],
                ["clean"],
                ["code-block"],
              ],
              handlers: {
                image: this.imageHandler,
              },
            },
          }}
          theme="snow"
          //@ts-ignore
          value={this.state.content}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
