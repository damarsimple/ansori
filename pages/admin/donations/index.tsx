import { gql } from "@apollo/client";
import { Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { Donation as DonationType } from "../../../types";

export default function Donation() {
  return (
    <AdminWrapper>
      <MUITable<DonationType>
        fields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "cityName",
            label: "Nama Kota",
          },
          {
            name: "type",
            label: "Tipe Donasi",
          },

          {
            name: "amount",
            label: "Jumlah Donasi",
          },

          {
            name: "account.name",
            label: "Nama Akun",
          },
          {
            name: "account.bankName",
            label: "Nama Bank",
          },
          {
            name: "message",
            label: "Pesan",
          },
        ]}
        name={"Donasi"}
        keys={"findManyDonation"}
        countKeys={"findManyDonationCount"}
        countQuery={gql`
          query FindManyDonationCount {
            findManyDonationCount
          }
        `}
        deleteQuery={gql`
          mutation DeleteManyDonation($where: DonationWhereInput) {
            deleteManyDonation(where: $where) {
              count
            }
          }
        `}
        action={["create", "edit", "delete"]}
        createFields={[
          {
            name: "name",
            label: "Name",
          },
        ]}
        editFields={[
          {
            name: "name",
            label: "Name",
          },
        ]}
        createQuery={gql`
          mutation CreateOneDonation($data: DonationCreateInput!) {
            createOneDonation(data: $data) {
              id
              name
            }
          }
        `}
        editQuery={gql`
          mutation UpdateOneDonation(
            $data: DonationUpdateInput!
            $where: DonationWhereUniqueInput!
          ) {
            updateOneDonation(data: $data, where: $where) {
              id
              name
            }
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
              hideName
              amount
              message
              cityName
              type
              account {
                id
                name
                bankName
              }
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
