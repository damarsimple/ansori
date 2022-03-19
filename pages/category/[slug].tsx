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
      <Paper>
        <Typography variant="h6" component={'h1'} sx={{ m: 2 }}>
          BERITA SEDEKAH
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          {[...Array(10)].map((_, i) => (
            <Grid item xs={12} key={i}>
              <PostCard type="default" />
            </Grid>
          ))}
          <Divider />
        </Grid>
      </Paper>
    </Container>
  )
}
