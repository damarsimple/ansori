import React, { useState } from "react";
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
} from "@mui/material";
import Divider from "@mui/material/Divider";
import MUITable from "../../components/MUITable";
import { gql } from "@apollo/client";
import Button from "@mui/material/Button";
import { Donation } from "../../types";
import { useForm } from "react-hook-form";


type Option = {
  label: string;
  value: string;
};

const options = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Vanilla', value: 'vanilla' },
];

export default function Slug() {
  const [tabs, setTabs] = useState(0);
  
   const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<{
     type: string;
  }>({
    defaultValues: { type: "" },
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Container>
      <Paper sx={{ mt: 2 }}>
        <Tabs value={tabs} onChange={(_, v) => setTabs(v)}>
          <Tab label="Formulir Donasi" />
          <Tab label="Data Donatur" />
        </Tabs>
        <Divider />
        {tabs == 0 && (
          <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }} component='form'>
            <Box sx={{ display: "flex", gap: 2, alignContent: "center" }}>
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

            <Select label="Tipe Donasi">
              <MenuItem>Infaq</MenuItem>
              <MenuItem>Sedekah</MenuItem>
              <MenuItem>Zakat Mal</MenuItem>
              <MenuItem>Zakat Fitrah</MenuItem>
              <MenuItem>Yatim Piatu</MenuItem>
            </Select>
            
            <Box sx={{ display: "flex", gap: 2 }}>
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
          <MUITable<Donation>
            headcells={[
              {
                name: "name",
                label: "Nama Donatur",
              },

              {
                name: "amount",
                label: "Jumlah Donasi",
              },
              {
                name: "message",
                label: "Pesan",
              },
            ]}
            name={"DATA DONATUR"}
            keys={"findManyDonation"}
            countKeys={"findManyDonationCount"}
            countQuery={gql`
              query FindManyDonationCount {
                findManyDonationCount
              }
            `}
            query={gql`
              query (
                $take: Int
                $skip: Int
                $orderBy: [DonationOrderByWithRelationInput]
                $where: DonationWhereInput
              ) {
                findManyDonation(
                  take: $take
                  skip: $skip
                  orderBy: $orderBy
                  where: $where
                ) {
                  id
                  name
                  amount
                  message
                }
              }
            `}
          />
        )}
      </Paper>
    </Container>
  );
}

const CalculatorZakatMal = () => {

  return <></>

}
