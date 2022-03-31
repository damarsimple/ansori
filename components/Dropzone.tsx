/* eslint-disable @next/next/no-img-element */
import { Paper, Typography, Divider, Box, Button } from "@mui/material";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const DropZone = ({
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
