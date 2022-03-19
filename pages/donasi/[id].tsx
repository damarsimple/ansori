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
      <Paper sx={{ p: 2, m: 3 }}>
        <Typography variant="h3" component={'h1'}>
          Detail Donasi
        </Typography>
        <Divider sx={{ mb: 4 }} />
        {[
          {
            name: 'Donatur',
            value: 'Hamba Allah',
          },
          {
            name: 'Kab/Kota',
            value: 'Berau',
          },
          {
            name: 'Jumlah',
            value: '750.000',
          },
          {
            name: 'Pesan',
            value:
              'Semoga tetap amanah dalam mendidik generasi muslim yang intelektual berakhlaqul karimah',
          },
          {
            name: 'Tanggal Konfirmasi',
            value: '18/03/2022 17:30:08',
          },
        ].map((e) => (
          <Box key={e.name} sx={{ mb: 2 }}>
            <Typography variant="h6" fontWeight="semibold" component={'h6'}>
              {e.name}
            </Typography>
            <Typography variant="body1" component={'h1'}>
              {e.value}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Container>
  )
}
