/* eslint-disable @next/next/no-img-element */
import { Add } from "@mui/icons-material";
import {
  Grid,
  Divider,
  Box,
  Paper,
  Typography,
  TextField,
  Chip,
  Autocomplete,
  Button,
} from "@mui/material";
import dynamic from "next/dynamic";
import React, { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";

import AdminWrapper from "../../../components/AdminWrapper";
import useConfirmModal from "../../../hooks/useConfirmModal";
import Editor from "../../../components/Editor";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Category, News, NewsCreateInput } from "../../../types";
import { useRouter } from "next/router";
import slugify from "slugify";
import { DropZone } from "../../../components/Dropzone";

export default function Id() {
  const { push } = useRouter();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [potrait, setPotrait] = useState<File | null>(null);
  const [wide, setWide] = useState<File | null>(null);
  const [categories, setCategories] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  const { call } = useConfirmModal();

  const [validationError, setValidationError] = useState<
    Record<string, string>
  >({});

  const resetValidationError = (key: string) => {
    setValidationError({
      ...validationError,
      [key]: "",
    });
  };

  const [createNews] = useMutation<{ createOneNews: News }>(gql`
    mutation CreateOneNews($data: NewsCreateInput!) {
      createOneNews(data: $data) {
        id
      }
    }
  `);

  const [uploadFile] = useMutation<{ uploadFile: String }>(gql`
    mutation UploadFile($file: Upload) {
      uploadFile(file: $file)
    }
  `);

  const { data: { findManyCategory } = {} } = useQuery<{
    findManyCategory: Category[];
  }>(gql`
    query GetCategory {
      findManyCategory {
        id
        name
      }
    }
  `);
  const handleSubmit = async () => {
    const err: Record<string, string> = {};

    if (!title) {
      err.title = "Harus diisi";
    }

    if (!content) {
      err.content = "Harus diisi";
    }

    if (!description) {
      err.description = "Harus diisi";
    }

    if (!potrait) {
      err.potrait = "Anda harus mengupload gambar";
    }

    if (!wide) {
      err.wide = "Anda harus mengupload gambar";
    }

    if (categories.length == 0) {
      err.categories =
        "Anda harus memilih setidaknya 1 kategori untuk mempublish berita";
    }

    for (const key in err) {
      if (err[key]) {
        setValidationError(err);
        console.log(err);
        return;
      }
    }

    const { data: potraitData } = await uploadFile({
      variables: { file: potrait },
    });
    const { data: wideData } = await uploadFile({
      variables: { file: wide },
    });

    if (!potraitData || !wideData) {
      alert("Gagal mengupload gambar !");
      return;
    }

    const data: NewsCreateInput = {
      title,
      content,
      description,
      potrait: `${process.env.NEXT_PUBLIC_ASSET_ENDPOINT}${potraitData.uploadFile}`,
      wide: `${process.env.NEXT_PUBLIC_ASSET_ENDPOINT}${wideData.uploadFile}`,
      categories: {
        connect: categories.map((category) => ({ id: category.id })),
      },
      slug: slugify(title),
      shareCountMap: JSON.stringify({
        facebook: 0,
        twitter: 0,
        whatsapp: 0,
        email: 0,
      }),
    };

    createNews({
      variables: { data },
    })
      .then((e) => {
        alert("Berita berhasil dibuat");
        push("/admin/news");
      })
      .catch((e) => {
        alert("Berita gagal dibuat");
        //  push("/admin/news");
      });
  };

  return (
    <AdminWrapper>
      <Grid container gap={1}>
        <Grid item xs={9} sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <TextField
              label="Judul Berita"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
                resetValidationError("title");
              }}
              error={!!validationError.title}
              helperText={validationError.title}
            />
            <TextField
              label="Deskripsi Berita"
              name="description"
              onChange={(e) => {
                setDescription(e.target.value);
                resetValidationError("description");
              }}
              error={!!validationError.description}
              helperText={validationError.description}
            />
            <DropZone
              title="WIDE THUMBNAIL (750x350)"
              onFile={(e) => {
                setWide(e);
                resetValidationError("wide");
              }}
              height={350}
              errorMessage={validationError.wide}
            />
            <Editor handleChange={setContent} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <DropZone
            title="POTRAIT THUMBNAIL (370x250)"
            onFile={(e) => {
              setPotrait(e);
              resetValidationError("potrait");
            }}
            height={250}
            errorMessage={validationError.potrait}
          />

          <Paper>
            <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
              TAMBAH KATEGORI BERITA
            </Typography>
            <Divider />
            <Box sx={{ p: 2 }}>
              {findManyCategory?.map((e) => (
                <Chip
                  key={e.id}
                  label={e.name}
                  onDelete={() => {
                    resetValidationError("categories");
                    setCategories([...categories, { name: e.name, id: e.id }]);
                  }}
                  sx={{ m: 0.5 }}
                  deleteIcon={<Add />}
                />
              ))}
            </Box>
          </Paper>
          <Paper>
            <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
              KATEGORI BERITA ({categories.length})
            </Typography>
            <Divider />
            <Box sx={{ p: 2 }}>
              {validationError.categories && (
                <Typography color="error" variant="body1" component="p">
                  {validationError.categories}
                </Typography>
              )}
              {categories.map((e) => (
                <Chip
                  key={e.id}
                  label={e.name}
                  onDelete={() => {
                    setCategories(categories.filter((e) => e.id !== e.id));
                  }}
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
          </Paper>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => {
              call({
                content: "Anda yakin mempublish berita ?",
                title: "Konfirmasi",
                next: handleSubmit,
              });
            }}
          >
            PUBLISH BERITA
          </Button>
          <Button color="warning" variant="contained" fullWidth sx={{ mt: 1 }}>
            DRAFT BERITA
          </Button>
        </Grid>
      </Grid>
    </AdminWrapper>
  );
}
