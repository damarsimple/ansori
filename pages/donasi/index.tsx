import React, { useState, useEffect } from "react";
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
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import MUITable from "../../components/MUITable";
import { gql, useQuery } from "@apollo/client";
import Button from "@mui/material/Button";
import {
  Donation,
  DonationAccount,
  DonationType,
  MetalPrice,
} from "../../types";
import { useForm } from "react-hook-form";

import { shuffle } from "lodash";
import { money } from "../../utils";

const genericName = ["Hamba Allah", "Anak Saleh", "Donatur Bersedekah"];

export default function Slug() {
  const [tabs, setTabs] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<{
    name: string;
    email: string;
    phone: string;
    hideName: boolean;
    type: string;
    bankAccount: string;
    message: string;
    amount: number;
  }>({
    defaultValues: { name: "", hideName: false, type: "" },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const watchType = watch("type");

  const [selectedBank, setSelectedBank] = useState("");

  const { data: { findManyDonationAccount } = {} } = useQuery<{
    findManyDonationAccount: DonationAccount[];
  }>(gql`
    query FindManyDonationAccount {
      findManyDonationAccount {
        id
        name
        accountNumber
        bankName
        logoUrl
      }
    }
  `);

  return (
    <Container>
      <Paper sx={{ mt: 2 }}>
        <Tabs value={tabs} onChange={(_, v) => setTabs(v)}>
          <Tab label="Formulir Donasi" />
          <Tab label="Data Donatur" />
        </Tabs>
        <Divider />
        {tabs == 0 && (
          <Box
            sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }}
            component="form"
            onSubmit={onSubmit}
          >
            <Box sx={{ display: "flex", gap: 2, alignContent: "center" }}>
              <TextField
                label="Nama Donatur"
                variant="standard"
                fullWidth
                helperText={errors.name?.message}
                {...register("name", { required: true })}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox {...register("hideName")} />}
                  label="Tampilkan Nama ?"
                />
              </FormGroup>
            </Box>
            <TextField
              label="Email Donatur"
              variant="standard"
              fullWidth
              type="email"
              helperText={errors.email?.message}
              {...register("email", { required: true })}
            />
            <TextField
              label="NO HP/WA Donatur"
              variant="standard"
              fullWidth
              helperText={errors.phone?.message ?? "Nomor HP/WA tidak valid"}
              {...register("phone", {
                required: true,
                pattern:
                  /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
              })}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipe Donasi</InputLabel>
              <Select
                label="Tipe Donasi"
                variant="standard"
                {...register("type", { required: true })}
              >
                {Object.keys(DonationType).map((e) => (
                  <MenuItem key={e} value={e}>
                    {e.replace("_", " ")}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {watchType.includes("Zakat") && (
              <CalculatorZakat
                type={
                  watchType?.toLowerCase() ==
                  DonationType.Zakat_mal?.toLocaleLowerCase()
                    ? DonationType.Zakat_mal
                    : DonationType.Zakat_fitrah
                }
              />
            )}

            <TextField
              label="Jumlah Donasi"
              variant="standard"
              fullWidth
              required
              type="number"
              helperText={errors.amount?.message}
              {...register("amount", { required: true, min: 1 })}
            />

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
                  label="Bank Tujuan"
                  fullWidth
                  onChange={(e) => {
                    setSelectedBank(`${e.target.value}`);
                  }}
                >
                  <MenuItem value="">
                    <em>Pilih Bank</em>
                  </MenuItem>
                  {[
                    ...new Set(findManyDonationAccount?.map((e) => e.bankName)),
                  ]?.map((e) => (
                    <MenuItem key={e} value={e}>
                      <em>{e}</em>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Rekening {selectedBank}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Rekening"
                  fullWidth
                  // helperText={errors.bankAccount?.message}
                  {...register("bankAccount", { required: true })}
                >
                  {!selectedBank ? (
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  ) : (
                    findManyDonationAccount
                      ?.filter((e) => e.bankName === selectedBank)
                      ?.map((e) => (
                        <MenuItem value={e.name} key={e.id}>
                          {e.name}
                        </MenuItem>
                      ))
                  )}
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
              helperText={errors.message?.message}
              {...register("message", { required: false })}
            />
            <Button type="submit">KIRIM DONASI</Button>
          </Box>
        )}
        {tabs == 1 && (
          <MUITable<Donation>
            disableSelection
            fields={[
              {
                name: "name",
                label: "Nama Donatur",
                formatter: "function",
                formatterFunction: (e) =>
                  e.hideName ? shuffle(genericName)[0] : e.name,
              },
              {
                name: "amount",
                label: "Jumlah Donasi",
                formatter: "currency",
              },
              {
                name: "type",
                label: "Tipe Donasi",
                formatter: "function",
                formatterFunction: (e) => e.type.replace("_", " "),
              },
              {
                name: "cityName",
                label: "Kota",
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
                  type
                  hideName
                  cityName
                }
              }
            `}
          />
        )}
      </Paper>
    </Container>
  );
}

const CalculatorZakat = ({
  type,
}: {
  type: DonationType.Zakat_fitrah | DonationType.Zakat_mal;
}) => {
  const [bonus, setBonus] = useState(0);
  const [perMonth, setPerMonth] = useState(0);
  const [familyMember, setFamilyMember] = useState(0);

  const {
    data: { getEmasPrice, getBerasPrice } = {},
    loading,
    error,
  } = useQuery<{
    getEmasPrice: MetalPrice;
    getBerasPrice: MetalPrice;
  }>(gql`
    query GetEmasBeras {
      getEmasPrice {
        name
        price
      }
      getBerasPrice {
        name
        price
      }
    }
  `);

  const [estimated, setEstimated] = useState(0);

  const goldPrice = getEmasPrice?.price ?? 0;
  const berasPrice = getBerasPrice?.price ?? 0;

  const threeshold =
    type == DonationType.Zakat_fitrah
      ? Number.POSITIVE_INFINITY
      : goldPrice * 85;

  useEffect(() => {
    const calcFitrah = () => {
      if (type == DonationType.Zakat_fitrah) {
        setEstimated(familyMember * berasPrice * 3.5);

        return;
      }

      const perYear = perMonth * 12;
      const total = perYear + bonus;

      if (total > threeshold) {
        setEstimated(total * 0.025);
      } else {
        setEstimated(0);
      }
    };
    calcFitrah();
  }, [perMonth, bonus, threeshold, type, familyMember, berasPrice]);

  return (
    <Box flexDirection={"column"} display="flex" gap={3}>
      {error && (
        <Typography>
          Gagal mengambil data emas dan beras {error.message}
        </Typography>
      )}

      {type == DonationType.Zakat_mal ? (
        <Box display="flex" gap={3}>
          <TextField
            label="Penghasilan Perbulan"
            variant="standard"
            fullWidth
            type="number"
            value={perMonth}
            disabled={loading}
            onChange={(event) => {
              setPerMonth(parseInt(event.target.value));
            }}
          />
          <TextField
            label="Bonus atau Tunjangan Hari Raya"
            variant="standard"
            fullWidth
            type="number"
            disabled={loading}
            value={bonus}
            onChange={(event) => {
              setBonus(parseInt(event.target.value));
            }}
          />
        </Box>
      ) : (
        <Box display="flex" gap={3}>
          <TextField
            label="Banyak Anggota Keluarga"
            variant="standard"
            fullWidth
            type="number"
            disabled={loading}
            value={familyMember}
            onChange={(event) => {
              setFamilyMember(parseInt(event.target.value));
            }}
          />
        </Box>
      )}

      {type == DonationType.Zakat_mal && (
        <>
          <Typography variant="subtitle2" component={"p"}>
            harga emas saat ini {money.format(goldPrice)}/gram. wajib nisab{" "}
            {money.format(threeshold)}
          </Typography>
          <Typography variant="subtitle2" component={"p"}>
            Penghasilan anda pertahun {money.format(perMonth * 12)}
          </Typography>
        </>
      )}

      {type == DonationType.Zakat_fitrah && (
        <>
          <Typography variant="subtitle2" component={"p"}>
            harga beras saat ini {money.format(berasPrice)}/gram.
          </Typography>
        </>
      )}
      <Typography variant="subtitle1" component={"p"}>
        {estimated !== 0
          ? `Perkiraan Zakat yang anda harus bayar ${money.format(estimated)}`
          : "Anda tidak harus membayar zakat"}
      </Typography>
    </Box>
  );
};
