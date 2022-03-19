import React from 'react'
import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { grey } from '@mui/material/colors'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import PostCard from '../../components/PostCard'
export default function Slug() {
  const { href } = process.browser && window ? window.location : { href: '' }

  return (
    <Container>
      <Box
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="h5" component="h1" fontWeight={'bold'}>
          Zakat Dari Al - Ansori dari kami untuk anda{' '}
        </Typography>

        <Typography variant="body1">Sabtu, 19 Oktober 2020 | 12.55</Typography>
        <Typography variant="body1">
          Oleh: <strong>Admin</strong>
        </Typography>

        <Box
          sx={{
            backgroundColor: grey[100],
            width: '100%',
            height: 400,
            position: 'relative',
          }}
        >
          <Image
            src="https://picsum.photos/id/10/200/300"
            alt=""
            layout="fill"
          />
          <Typography variant="caption" component="p" sx={{ m: 1 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            quibusdam?
          </Typography>
        </Box>

        <Typography paragraph>
          {' '}
          <strong>Oslo, Beritasatu.com -</strong>{' '}
          <a href="https://www.beritasatu.com/tag/pesawat-militer-as">
            Pesawat militer AS
          </a>{' '}
          dengan empat orang di dalamnya jatuh di{' '}
          <a href="https://www.beritasatu.com/tag/norwegia">Norwegia</a> utara
          saat{' '}
          <a href="https://www.beritasatu.com/tag/latihan-militer">
            latihan militer
          </a>{' '}
          <a href="https://www.beritasatu.com/tag/nato">NATO</a>, kata polisi
          setempat dan Pusat Koordinasi Penyelamatan Gabungan (JRCC) negara itu,
          Jumat (18/3/2022).
        </Typography>

        {[...Array(10)].map((_, i) => (
          <Typography paragraph key={i}>
            Pesawat MV-22B Osprey milik Korps Marinir AS itu sedang mengambil
            bagian dalam latihan militer NATO yang disebut Cold Response ketika
            dilaporkan hilang pada Sabtu (19/3/2022) dini hari WIB , kata JRCC.
            Helikopter penyelamat dan pesawat Orion militer Norwegia yang
            mencari di daerah itu melihat puing-puing dari udara setelah
            menerima sinyal darurat.
          </Typography>
        ))}
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
            <Chip key={i} label="ZAKAT" />
          ))}

          <Divider />
        </Box>
        <Typography component="h6" variant="h6" textAlign={'center'}>
          BAGIKAN
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {[
            {
              image: '/facebook.png',
              url: 'https://www.facebook.com/sharer/sharer.php?u=' + href,
            },
            {
              image: '/twitter.png',
              url: 'https://twitter.com/intent/tweet?url=' + href,
            },
            {
              image: '/whatsapp.png',
              url: 'https://wa.me/?text=' + href,
            },
            {
              image: '/email.png',
              url: `mailto:?subject={"TITLE"}&body=Check berita ini ${href}`,
            },
          ].map((e) => (
            <Link href={e.url} key={e.image}>
              <a>
                <Image src={e.image} height={50} width={50} alt={e.url} />
              </a>
            </Link>
          ))}
        </Box>
      </Box>

      <Paper>
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
      </Paper>
    </Container>
  )
}
