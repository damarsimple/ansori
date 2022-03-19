import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { Box } from '@mui/system'
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
} from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import TagIcon from '@mui/icons-material/Tag'
// Import Swiper styles
import 'swiper/css'
import PostCard from '../components/PostCard'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          color: 'white',
          backgroundColor: 'red',
        }}
      >
        <Marquee gradient={false} pauseOnHover>
          {[
            'Hamba allah telah berdonasi sebesar Rp. 100.000.000,00',
            'Damar Albaribin telah berdonasi sebesar Rp. 100.000.000,00',
            'Sutrisno telah berdonasi sebesar Rp. 100.000.000,00',
            'Anak Saleh telah berdonasi sebesar Rp. 100.000.000,00',
          ].map((e) => (
            <Box
              key={e}
              sx={{ display: 'flex', gap: 1, alignItems: 'center', ml: 2 }}
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
          overflowX: 'auto',
          display: 'flex',
          p: 0.5,
          m: 0.5,
          gap: 1,
        }}
      >
        {[...Array(10)].map((e, i) => (
          <Link href="/category/zakat" key={i}>
            <a>
              <Chip label="ZAKAT" />
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
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <Box
                  sx={{
                    height: {
                      xs: 240,
                      sx: 400,
                    },
                    width: '100%',
                    position: 'relative',
                    background:
                      "linear-gradient(to bottom,rgba(0,0,0,0),#575757), url('https://img.beritasatu.com/cache/beritasatu/910x580-2/1644679052.jpg') ",
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      m: 4,
                      color: 'white',
                    }}
                  >
                    <Typography variant="h6" component={'h1'}>
                      Sri Mulyani Berdonasi sebesar Rp 100.000.000
                    </Typography>

                    <Typography variant="body2" component={'p'}>
                      Damar Albaribin - 2 jam yang lalu
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>

            <Paper>
              <Link href="/sort/latest">
                <a>
                  <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
                    BERITA TERKINI
                  </Typography>
                </a>
              </Link>
              <Divider />
              <Box>
                {[...Array(10)].map((_, i) => (
                  <PostCard type="default" key={i} />
                ))}
                <Divider />
              </Box>
            </Paper>

            <Paper>
              <Link href="/category/zakat">
                <a>
                  <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
                    BERITA ZAKAT
                  </Typography>
                </a>
              </Link>
              <Divider />
              <Box
                sx={{
                  overflowX: 'auto',
                  display: 'flex',
                  p: 2,
                  gap: 1,
                }}
              >
                {[...Array(4)].map((e, i) => (
                  <PostCard type="carousel" key={i} />
                ))}

                <Divider />
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
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
                  <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
                    GALERI ANSORI
                  </Typography>
                  <Divider />
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                  >
                    {[...Array(10)].map((_, i) => (
                      <SwiperSlide key={i}>
                        <Box
                          sx={{
                            height: 240,
                            width: '100%',
                            position: 'relative',
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
                    ))}
                  </Swiper>
                </Paper>
              </a>
            </Link>
            <Paper>
              <Link href="/donasi">
                <a>
                  <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
                    TOP DONASI
                  </Typography>
                </a>
              </Link>
              <Divider />
              {[...Array(10)].map((_, i) => (
                <Link href="/donasi/id" key={i}>
                  <a>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>H</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Hamba Allah"
                        secondary="Rp 10.000"
                      />
                    </ListItem>
                  </a>
                </Link>
              ))}
            </Paper>
            <Paper>
              <Link href="/sort/top">
                <a>
                  <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
                    BERITA TOP
                  </Typography>
                </a>
              </Link>
              <Divider />
              <Box>
                {[...Array(10)].map((_, i) => (
                  <PostCard type="default" key={i} />
                ))}
                <Divider />
              </Box>
            </Paper>
            <Paper>
              <Link href="/anggota">
                <a>
                  <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
                    ANGGOTA KAMI
                  </Typography>
                </a>
              </Link>
              <Divider />
              <Box>
                {[...Array(10)].map((_, i) => (
                  <Link href="/anggota/id" key={i}>
                    <a>
                      <ListItem button>
                        <ListItemAvatar>
                          <Avatar>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="ANSORI ABBAS"
                          secondary="KETUA"
                        />
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
  )
}

export default Home
