import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/system";
import {
  Chip,
  Grid,
  Paper,
  Typography,
  Container,
  Divider,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import PostCard from "../components/PostCard";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { Category, Donation, ImageGallery, Member, News } from "../types";
import { useTheme } from '@mui/material/styles';

const formatter = (x: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    x
  );

const Home: NextPage = () => {
  const {
    data: { findManyNews } = {},
    loading,
    error,
  } = useQuery<{ findManyNews: News[] }>(
    gql`
      query FindLatestPosts($take: Int, $categoriesTake2: Int) {
        findManyNews(take: $take) {
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
    `,
    {
      variables: {
        take: 10,
        categoriesTake2: 1,
      },
    }
  );

  const {
    data: { findManyNews: findManyNewsTop } = {},
    // loading,
    // error,
  } = useQuery<{ findManyNews: News[] }>(
    gql`
      query FindLatestPosts(
        $take: Int
        $categoriesTake2: Int
        $orderBy: [NewsOrderByWithRelationInput]
      ) {
        findManyNews(take: $take, orderBy: $orderBy) {
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
    `,
    {
      variables: {
        take: 10,
        categoriesTake2: 1,
        orderBy: [
          {
            views: "desc",
          },
        ],
      },
    }
  );

  const {
    data: { findManyCategory } = {},
    // loading,
    // error,
  } = useQuery<{ findManyCategory: Category[] }>(
    gql`
      query FindManyCategory(
        $take: Int
        $newsTake2: Int
        $categoriesTake2: Int
      ) {
        findManyCategory(take: $take) {
          id
          slug
          name
          news(take: $newsTake2) {
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
        take: 5,
        newsTake2: 5,
        categoriesTake2: 1,
      },
    }
  );

  const { data: { findManyDonation: findManyDonationLatest } = {} } = useQuery<{
    findManyDonation: Donation[];
  }>(
    gql`
      query FindManyDonationLatest(
        $where: DonationWhereInput
        $orderBy: [DonationOrderByWithRelationInput]
        $take: Int!
      ) {
        findManyDonation(where: $where, orderBy: $orderBy, take: $take) {
          id
          name
          message
          amount
        }
      }
    `,
    {
      variables: {
        take: 10,
        where: {
          status: {
            equals: "APPROVED",
          },
        },
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      },
    }
  );

  const { data: { findManyDonation: findManyDonationTop } = {} } = useQuery<{
    findManyDonation: Donation[];
  }>(
    gql`
      query FindManyDonationTop(
        $where: DonationWhereInput
        $orderBy: [DonationOrderByWithRelationInput]
        $take: Int!
      ) {
        findManyDonation(where: $where, orderBy: $orderBy, take: $take) {
          id
          name
          message
          amount
        }
      }
    `,
    {
      variables: {
        take: 10,
        where: {
          status: {
            equals: "APPROVED",
          },
        },
        orderBy: [
          {
            amount: "desc",
          },
        ],
      },
    }
  );

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
    `,
    {
      variables: { take: 10 },
    }
  );

  const { data: { findManyCategory: findManyCategoryAll } = {} } = useQuery<{
    findManyCategory: Category[];
  }>(
    gql`
      query FindManyCategoryAll {
        findManyCategory {
          id
          name
          slug
        }
      }
    `
  );

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
    `,
    {
      variables: { take: 10 },
    }
  );

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          color: theme.palette.primary.main
        }}
      >
        <Marquee gradient={false} pauseOnHover>
          {findManyDonationLatest
            ?.map(
              (e) =>
                `${e.name} berdonasi sebesar ${formatter(e.amount)} ${
                  e.message
                }`
            )
            .map((e) => (
              <Box
                key={e}
                sx={{ display: "flex", gap: 1, alignItems: "center", ml: 2 }}
              >
                <Box>
                  <Typography variant="body1">{e}</Typography>
                </Box>
                <Box>
                  <VolunteerActivismIcon />
                </Box>
              </Box>
            ))}
        </Marquee>
      </Box>
      <Box
        sx={{
          overflowX: "auto",
          display: "flex",
          p: 0.5,
          m: 0.5,
          gap: 1,
        }}
      >
        {findManyCategoryAll?.map((e) => (
          <Link href={"/category/" + e.id} key={e.id}>
            <a>
              <Chip label={e.name} />
            </a>
          </Link>
        ))}

        <Divider />
      </Box>
      <Container sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Box
                  sx={{
                    height: {
                      xs: 240,
                      sx: 400,
                    },
                    width: "100%",
                    position: "relative",
                    background:
                      "linear-gradient(to bottom,rgba(0,0,0,0),#575757), url('https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg') ",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      m: 4,
                      color: "white",
                    }}
                  >
                    <Typography variant="h6" component={"h1"}>
                      Sri Mulyani Berdonasi sebesar Rp 100.000.000
                    </Typography>

                    <Typography variant="body2" component={"p"}>
                      Damar Albaribin - 2 jam yang lalu
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>

            <Paper>
              <Link href="/sort/latest">
                <a>
                  <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                    BERITA TERKINI
                  </Typography>
                </a>
              </Link>
              <Divider />
              <Box>
                {findManyNews?.map((e) => (
                  <PostCard type="default" {...e} key={e.id} />
                ))}
                <Divider />
              </Box>
            </Paper>

            {findManyCategory?.map((e, i) =>
              i % 2 == 0 ? (
                <Paper>
                  <Link href={"/category/" + e.slug}>
                    <a>
                      <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                        BERITA {e.name}
                      </Typography>
                    </a>
                  </Link>
                  <Divider />
                  <Box
                    sx={{
                      overflowX: "auto",
                      display: "flex",
                      p: 2,
                      gap: 1,
                    }}
                  >
                    {e.news?.map((x) => (
                      <PostCard type="carousel" {...x} key={x.id} />
                    ))}

                    <Divider />
                  </Box>
                </Paper>
              ) : (
                <Paper>
                  <Link href={"/category" + e.slug}>
                    <a>
                      <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                        BERITA {e.name}
                      </Typography>
                    </a>
                  </Link>
                  <Divider />
                  <Box>
                    {e.news?.map((x) => (
                      <PostCard type="default" {...x} key={x.id} />
                    ))}
                    <Divider />
                  </Box>
                </Paper>
              )
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* <Paper>

              <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                TAG POPULER
              </Typography>
              <Divider />

              <List>
                {[...Array(5)].map((_, i) => (
                  <Link href="/tags/popular" key={i}>
                    <a >
                      <ListItem disablePadding >
                        <ListItemButton>
                          <ListItemIcon>
                            <TagIcon />
                          </ListItemIcon>
                          <ListItemText primary="Zakat By Jokowi" />
                        </ListItemButton>
                      </ListItem>
                    </a></Link>
                ))}
              </List>
            </Paper> */}
            <Link href="/galeri">
              <a>
                <Paper>
                  <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                    GALERI ANSORI
                  </Typography>
                  <Divider />
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    autoplay
                  >
                    {findManyImageGallery?.map((e) => (
                      <SwiperSlide key={e.id}>
                        <Box
                          sx={{
                            height: 240,
                            width: "100%",
                            position: "relative",
                            background: "url('",
                          }}
                        >
                          <Image
                            src={e.image ?? ""}
                            alt={e.name}
                            layout="fill"
                          />
                        </Box>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Paper>
              </a>
            </Link>
            <Paper>
              <Link href="/donasi">
                <a>
                  <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                    DONASI TERBESAR
                  </Typography>
                </a>
              </Link>
              <Divider />
              {findManyDonationTop?.map((e) => (
                <Link href={"/donasi/" + e.id} key={e.id}>
                  <a>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>{e.name[0]}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={e.name}
                        secondary={formatter(e.amount)}
                      />
                    </ListItem>
                  </a>
                </Link>
              ))}
            </Paper>
            <Paper>
              <Link href="/sort/top">
                <a>
                  <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                    BERITA TOP
                  </Typography>
                </a>
              </Link>
              <Divider />
              <Box>
                {findManyNewsTop?.map((e) => (
                  <PostCard type="default" {...e} key={e.id} />
                ))}
                <Divider />
              </Box>
            </Paper>
            <Paper>
              <Link href="/anggota">
                <a>
                  <Typography variant="h6" component={"h1"} sx={{ m: 2 }}>
                    ANGGOTA KAMI
                  </Typography>
                </a>
              </Link>
              <Divider />
              <Box>
                {findManyMember?.map((e) => (
                  <Link href={"/anggota/" + e.id} key={e.id}>
                    <a>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>{e.name[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={e.name} secondary={e.role} />
                      </ListItem>
                    </a>
                  </Link>
                ))}
                <Divider />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
