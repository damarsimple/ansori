import React from "react";
import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import PostCard from "../../components/PostCard";
import { useQuery, gql } from "@apollo/client";
import { Category } from "../../types";
import { useRouter } from "next/router";

export default function Slug() {
  const { query } = useRouter();
  const { slug } = query;
  const {
    data: { findUniqueCategory } = {},
    // loading,
    // error,
  } = useQuery<{ findUniqueCategory: Category }>(
    gql`
      query FindUniqueCategory(
        $where: CategoryWhereUniqueInput!
        $categoriesTake2: Int
      ) {
        findUniqueCategory(where: $where) {
          id
          slug
          name
          news {
            id
            published
            title
            createdAt
            updatedAt
            potrait
            wide
            content
            description
            slug
            categories(take: $categoriesTake2) {
              id
              name
              slug
            }
          }
        }
      }
    `,
    {
      variables: {
        where: { id: parseInt(slug as string) },
      },
    }
  );

  return (
    <Container>
      <Paper>
        <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
          BERITA {findUniqueCategory?.name?.toUpperCase()}
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          {findUniqueCategory?.news.map((e) => (
            <Grid item xs={12} key={e.id}>
              <PostCard type="default" {...e} key={e.id} />
            </Grid>
          ))}
          <Divider />
        </Grid>
      </Paper>
    </Container>
  );
}
