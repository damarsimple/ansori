import React from 'react'
import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { grey } from '@mui/material/colors'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import PostCard from '../../components/PostCard'

export default function Slug() {
  return (
    <Container>
      <Paper sx={{ p: 2, mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src="https://picsum.photos/id/1/200/300"
            alt="Photo of "
            height={400}
            width={300}
          />
        </Box>

        <Typography variant="h6" component={'h1'} textAlign="center">
          ANSORI ABBAS
        </Typography>

        <Typography variant="body1" component={'p'} textAlign="center">
          Ketua
        </Typography>

        <Typography variant="body1" component={'p'} textAlign="center">
          Ketua semenjak tahun 2014. Memiliki pengalaman selama lebih dari 10
          tahun sebagai anggota kelompok BNP Paribas.
        </Typography>
      </Paper>
    </Container>
  )
}
