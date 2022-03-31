/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { Container, Tooltip } from "@mui/material";
import { ImageGallery } from "../types";
import { gql, useQuery } from "@apollo/client";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  const { data: { findManyImageGallery } = {} } = useQuery<{
    findManyImageGallery: ImageGallery[];
  }>(
    gql`
      query FindManyImageGallery($take: Int) {
        findManyImageGallery(take: $take) {
          id
          name
          image
        }
      }
    `
  );

  return (
    <Container sx={{ pt: 2 }}>
      <Box sx={{ width: "100%", minHeight: 829 }}>
        {findManyImageGallery && (
          <Masonry columns={3} spacing={2}>
            {findManyImageGallery.map((item) => (
              <div key={item.id}>
                <Tooltip title={item.description ?? ""}>
                  <img
                    src={item.image ?? ""}
                    srcSet={item.image ?? ""}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                    }}
                  />
                </Tooltip>
                <Label>{item.name}</Label>
              </div>
            ))}
          </Masonry>
        )}
      </Box>
    </Container>
  );
}
