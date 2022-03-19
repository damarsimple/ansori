import React, { useState } from 'react'
import {
  FormGroup,
  Box,
  Checkbox,
  Container,
  Paper,
  Tab,
  Tabs,
  TextField,
  FormControlLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material'
import Divider from '@mui/material/Divider'
import MUITable from '../../components/MUITable'
import { gql } from '@apollo/client'
import Button from '@mui/material/Button'

export default function Slug() {
  const [tabs, setTabs] = useState(0)

  return (
    <Container>
      <Paper sx={{ mt: 2 }}>
        <Tabs value={tabs} onChange={(_, v) => setTabs(v)}>
          <Tab label="Formulir Donasi" />
          <Tab label="Data Donatur" />
        </Tabs>
        <Divider />
        {tabs == 0 && (
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, alignContent: 'center' }}>
              <TextField
                label="Nama Donatur"
                variant="standard"
                fullWidth
                required
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Tampilkan Nama ?"
                />
              </FormGroup>
            </Box>
            <TextField
              label="Email Donatur"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              label="NO HP/WA Donatur"
              variant="standard"
              fullWidth
              required
            />

            <TextField
              label="Jumlah Rp"
              variant="standard"
              fullWidth
              required
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Bank Tujuan
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={0}
                  onChange={() => {}}
                  label="Bank Tujuan"
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Rekening
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={0}
                  onChange={() => {}}
                  label="Rekening"
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
              label="Pesan Donasi"
              variant="standard"
              fullWidth
              required
              multiline
              minRows={3}
              maxRows={4}
            />

            <Button>KIRIM DONASI</Button>
          </Box>
        )}
        {tabs == 1 && (
          <MUITable<{ id: number; name: string }>
            headcells={[
              {
                name: 'name',
                label: 'Name',
              },
            ]}
            name={'DATA DONATUR'}
            keys={'findManyComic'}
            countKeys={'findManyComicCount'}
            countQuery={gql`
              query FindManyComicCount {
                findManyComicCount
              }
            `}
            // action={['edit', 'delete']}
            // deleteQuery={gql``}
            query={gql`
              query(
                $take: Int
                $skip: Int
                $orderBy: [ComicOrderByWithRelationInput]
                $where: ComicWhereInput
              ) {
                findManyComic(
                  take: $take
                  skip: $skip
                  orderBy: $orderBy
                  where: $where
                ) {
                  id
                  name
                  slug
                  thumb
                  type
                  thumbWide
                  altName
                  released
                  isHentai
                  rating
                  views
                  viewsHourly
                  viewsDaily
                  viewsWeek
                  description
                  status
                  age
                  concept
                  lastChapterUpdateAt
                  createdAt
                  updatedAt
                }
              }
            `}
          />
        )}
      </Paper>
    </Container>
  )
}
