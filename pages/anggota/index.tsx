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
        <Grid container spacing={1}>
          {[...Array(10)].map((_, i) => (
            <Grid key={i} item xs={3}>
              <Link href="/anggota/id">
                <a>
                  <Box>
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

                    <Typography
                      variant="h6"
                      component={'h1'}
                      textAlign="center"
                    >
                      ANSORI ABBAS
                    </Typography>
                  </Box>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}
