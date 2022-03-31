import React, { useEffect } from "react";
import { Box, Chip, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import PostCard from "../../components/PostCard";
import { News } from "../../types";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import { client } from "../../modules/client";
import moment from "moment";
import { Email, Facebook, Twitter, WhatsApp } from "@mui/icons-material";
export default function Slug({ findUniqueNews }: { findUniqueNews: News }) {
  const { href } = process.browser && window ? window.location : { href: "" };

  const {
    title,
    author,
    description,
    wide,
    potrait,
    content,
    createdAt,
    views,
    shareCountMap,
    id,
  } = findUniqueNews || {};

  useEffect(() => {
    if (!id) return;
    client.mutate({
      mutation: gql`
        mutation ReportView($id: Int!) {
          reportView(id: $id)
        }
      `,
      variables: { id },
    });
  }, [id]);

  const handleShareReport = (key: string) => {
    client.mutate({
      mutation: gql`
        mutation ReportShare($id: Int!, $key: String!) {
          reportShare(id: $id, key: $key)
        }
      `,
      variables: { id, key },
    });
  };

  return (
    <Container>
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="h5" component="h1" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography variant="body1">
          {moment(createdAt).format("dddd, Do MMMM YYYY | hh:mm")}
        </Typography>
        <Typography variant="body1">
          Oleh: <strong>{author?.name}</strong> | Dilihat: {views}x kali
        </Typography>
        <Box
          sx={{
            backgroundColor: grey[100],
            width: "100%",
            height: 400,
            position: "relative",
          }}
        >
          <Image src={wide ?? ""} alt={title} layout="fill" />
          <Typography variant="caption" component="p" sx={{ m: 1 }}>
            {description}
          </Typography>
        </Box>
        {/* {[...Array(10)].map((_, i) => (
          <Typography paragraph key={i}>
            Pesawat MV-22B Osprey milik Korps Marinir AS itu sedang mengambil
            bagian dalam latihan militer NATO yang disebut Cold Response ketika
            dilaporkan hilang pada Sabtu (19/3/2022) dini hari WIB , kata JRCC.
            Helikopter penyelamat dan pesawat Orion militer Norwegia yang
            mencari di daerah itu melihat puing-puing dari udara setelah
            menerima sinyal darurat.
          </Typography>
        ))} */}
        <Typography paragraph>
          {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
        </Typography>
        <Box
          sx={{
            overflowX: "auto",
            display: "flex",
            p: 0.5,
            m: 0.5,
            gap: 1,
          }}
        >
          <Divider />
        </Box>
        <Typography component="h6" variant="h6" textAlign={"center"}>
          BAGIKAN
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {[
            {
              image: <Facebook color="primary" />,
              url: "https://www.facebook.com/sharer/sharer.php?u=" + href,
              key: "facebook",
            },
            {
              image: <Twitter color="primary" />,
              url: "https://twitter.com/intent/tweet?url=" + href,
              key: "twitter",
            },
            {
              image: <WhatsApp color="primary" />,
              url: "https://wa.me/?text=" + href,
              key: "whatsapp",
            },
            {
              image: <Email color="primary" />,
              url: `mailto:?subject={"TITLE"}&body=Check berita ini ${href}`,
              key: "email",
            },
          ].map((e) => (
            <Link href={e.url} key={e.url}>
              <a onClick={() => handleShareReport(e.key)} target="_blank">
                {e.image} {shareCountMap[e.key as any] ?? 0}
              </a>
            </Link>
          ))}
        </Box>
      </Box>

      {/* <Paper>
        <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
          BERITA TERKINI
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          {[...Array(10)].map((_, i) => (
            <Grid item xs={6} key={i}>
              <PostCard type="default" />
            </Grid>
          ))}
          <Divider />
        </Grid>
      </Paper> */}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug as string;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const { data: { findUniqueNews } = {}, error: error } = await client.query<{
    findUniqueNews: News;
  }>({
    query: gql`
      query FindFirstNews($where: NewsWhereUniqueInput!) {
        findUniqueNews(where: $where) {
          id
          published
          title
          author {
            id
            name
          }
          slug
          categories {
            id
            name
            slug
          }
          createdAt
          updatedAt
          views
          potrait
          wide
          content
          shareCountMap
          description
        }
      }
    `,
    variables: {
      where: {
        slug,
      },
    },
  });

  // if (findFirstComic?.id) {
  //   client.query({
  //     query: gql`
  //       mutation ReportViewComic($reportViewId: Int!, $context: String!) {
  //         reportView(id: $reportViewId, context: $context)
  //       }
  //     `,
  //     variables: {
  //       reportViewId: findFirstComic.id,
  //       context: "comic",
  //     },
  //   });
  // }
  // if (error) {
  //   console.log(error);
  // }

  return {
    notFound: !findUniqueNews,
    props: {
      findUniqueNews,
    },
    revalidate: 60 * 60, // 1 hours
  };
};

export async function getStaticPaths() {
  const { data: { findManyNews } = {} } = await client.query<{
    findManyNews: News[];
  }>({
    query: gql`
      query FindAll {
        findManyNews {
          id
          slug
        }
      }
    `,
  });

  const paths =
    findManyNews?.map((news) => ({
      params: { slug: news.slug },
    })) ?? [];

  return { paths, fallback: "blocking" };
}
