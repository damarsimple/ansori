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

export default function Id() {
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
  >([{ id: 0, name: "test" }]);

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

  const handleSubmit = () => {
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
        return;
      }
    }
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
            <Editor handleChange={console.log} />
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
              <Chip
                label="Test"
                onDelete={() => {
                  resetValidationError("categories");
                }}
                sx={{ m: 0.5 }}
                deleteIcon={<Add />}
              />
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

const DropZone = ({
  title,
  onFile,
  height,
  errorMessage,
}: {
  title: string;
  height: number;
  errorMessage?: string;
  onFile: (file: File) => void;
}) => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      onFile(acceptedFiles[0]);
      setCurrentFile(acceptedFiles[0]);
    },
    [onFile]
  );
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
  });

  return (
    <Paper>
      <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
        {title}
      </Typography>
      <Divider />
      {errorMessage && (
        <Typography color="error" variant="body1" component="p">
          {errorMessage}
        </Typography>
      )}
      {currentFile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            alt={title}
            src={URL.createObjectURL(currentFile)}
            height={height}
            width={"100%"}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={() => setCurrentFile(null)}
          >
            Ubah
          </Button>
        </Box>
      ) : (
        <Box sx={{ p: 2 }} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Jatuhkan file kesini ...</p>
          ) : (
            <p>Jatuhkan atau klik untuk mengupload gambar</p>
          )}
        </Box>
      )}
    </Paper>
  );
};
