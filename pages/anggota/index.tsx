import React from "react";
import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import PostCard from "../../components/PostCard";
import { useQuery, gql } from "@apollo/client";
import { Member } from "../../types";

export default function Slug() {
  const { data: { findManyMember } = {} } = useQuery<{
    findManyMember: Member[];
  }>(
    gql`
      query FindManyMember($take: Int) {
        findManyMember(take: $take) {
          id
          name
          role
          image
        }
      }
    `
  );

  return (
    <Container>
      <Paper sx={{ p: 2, mt: 2 }}>
        <Grid container spacing={1}>
          {findManyMember?.map((e) => (
            <Grid key={e.id} item xs={3}>
              <Link href={"/anggota/" + e.id}>
                <a>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {e.image && (
                        <Image
                          src={e.image}
                          alt={"Photo of " + e.name}
                          height={400}
                          width={300}
                        />
                      )}
                    </Box>

                    <Typography
                      variant="h6"
                      component={"h1"}
                      textAlign="center"
                    >
                      {e.name}
                    </Typography>
                  </Box>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
