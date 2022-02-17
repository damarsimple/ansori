import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/system";
import {
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  ListItemAvatar,
  InputBase,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TagIcon from "@mui/icons-material/Tag";
// Import Swiper styles
import "swiper/css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Home: NextPage = () => {
  return (
    <>
      <Paper sx={{ py: 1.5, display: "flex", gap: 2, px: 1 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Image
            src="/android-icon-144x144.png"
            alt="Abang Putih Al-Ansori"
            width={40}
            height={40}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack
            spacing={4}
            direction="row"
            sx={{ height: 40, alignItems: "center" }}
          >
            {[
              "Abang Putih Al-Ansori",
              "Sedekah",
              "Zakat",
              "Yatim Piatu",
              "Donasi",
              "Tentang Kami",
              "Login",
              "Register",
            ].map((e) => (
              <Box
                key={e}
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  ":hover": {
                    backgroundColor: "red",
                    color: "white",
                    cursor: "pointer",
                  },
                }}
              >
                {e}
              </Box>
            ))}
          </Stack>
        </Box>
      </Paper>
      <Box
        sx={{
          color: "white",
          backgroundColor: "red",
        }}
      >
        <Marquee gradient={false} pauseOnHover>
          {[
            "Hamba allah telah berdonasi sebesar Rp. 100.000.000,00",
            "Damar Albaribin telah berdonasi sebesar Rp. 100.000.000,00",
            "Sutrisno telah berdonasi sebesar Rp. 100.000.000,00",
            "Anak Saleh telah berdonasi sebesar Rp. 100.000.000,00",
          ].map((e) => (
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
      <Container sx={{ py: 4 }}>
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
                    height: 400,
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
                    <Stack direction="row" spacing={1}>
                      <Chip label="Donasi" color="secondary" />
                      <Chip label="Zakat" color="secondary" />
                    </Stack>
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
              <Typography variant="h6" component={"h1"} sx={{ my: 2, mx: 2 }}>
                BERITA TERKINI
              </Typography>
              <Divider />
              <Box>
                {[...Array(10)].map((_, i) => (
                  <Grid
                    key={i}
                    container
                    spacing={1}
                    sx={{ height: 150, my: 1 }}
                  >
                    <Grid item xs={3}>
                      <Avatar
                        variant="square"
                        src="https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg"
                        alt="ansori"
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="h6" component={"h1"}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugit, fuga!
                      </Typography>
                      <Typography variant="body2" component={"h1"}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Natus, iure.
                      </Typography>
                      <Typography variant="body2" component={"h1"}>
                        ZAKAT | 10 jam yang lalu
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
                <Divider />
              </Box>
            </Paper>

            <Paper>
              <Typography variant="h6" component={"h1"} sx={{ my: 2, mx: 2 }}>
                BERITA BISNIS
              </Typography>
              <Divider />
              <Box>
                <Grid container spacing={1}>
                  {[...Array(3)].map((_, i) => (
                    <Grid item key={i} xs={4}>
                      <Box
                        sx={{ my: 1, display: "flex", flexDirection: "column" }}
                      >
                        <Avatar
                          variant="square"
                          src="https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg"
                          alt="ansori"
                          sx={{
                            width: "100%",
                            height: 150,
                          }}
                        />
                        <Typography variant="h6" component={"h1"}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                        </Typography>

                        <Typography variant="body2" component={"h1"}>
                          ZAKAT | 10 jam yang lalu
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Divider />
              </Box>
            </Paper>
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
            <Paper>
              <Typography variant="h6" component={"h1"} sx={{ my: 2, mx: 2 }}>
                TAG POPULER
              </Typography>
              <Divider />

              <List>
                {[...Array(5)].map((_, i) => (
                  <ListItem disablePadding key={i}>
                    <ListItemButton>
                      <ListItemIcon>
                        <TagIcon />
                      </ListItemIcon>
                      <ListItemText primary="Zakat By Jokowi" />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper>
              <Typography variant="h6" component={"h1"} sx={{ my: 2, mx: 2 }}>
                GALERI ANSORI
              </Typography>
              <Divider />
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <Box
                    sx={{
                      height: 240,
                      width: "100%",
                      position: "relative",
                      background: "url('",
                    }}
                  >
                    <Image
                      src="https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg"
                      alt="ansori"
                      layout="fill"
                    />
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Paper>
            <Paper>
              <Typography variant="h6" component={"h1"} sx={{ my: 2, mx: 2 }}>
                DONASI TERBARU
              </Typography>
              <Divider />
              {[...Array(10)].map((_, i) => (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar>H</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Hamba Allah" secondary="Rp 10.000" />
                </ListItem>
              ))}
            </Paper>
            <Paper>
              <Typography variant="h6" component={"h1"} sx={{ my: 2, mx: 2 }}>
                BERITA TOP
              </Typography>
              <Divider />
              <Box>
                {[...Array(10)].map((_, i) => (
                  <Grid
                    key={i}
                    container
                    spacing={1}
                    sx={{ height: 70, my: 1 }}
                  >
                    <Grid item xs={3}>
                      <Avatar
                        variant="square"
                        src="https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg"
                        alt="ansori"
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="body2" component={"h1"}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugit, fuga!
                      </Typography>
                      <Typography variant="body2" component={"h1"}>
                        ZAKAT | 10 jam yang lalu
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
                <Divider />
              </Box>
            </Paper>
            <Paper>
              <Typography variant="h6" component={"h1"} sx={{ my: 2, mx: 2 }}>
                ANGGOTA KAMI
              </Typography>
              <Divider />
              <Box>
                {[...Array(10)].map((_, i) => (
                  <ListItem key={i}>
                    <ListItemAvatar>
                      <Avatar>A</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="ANSORI ABBAS" secondary="KETUA" />
                  </ListItem>
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
