import { gql } from "@apollo/client";
import { Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { DonationAccount as DonationAccountType } from "../../../types";

export default function DonationAccount() {
  return (
    <AdminWrapper>
      <MUITable<DonationAccountType>
        fields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "accountName",
            label: "Nama Akun",
          },
          {
            name: "accountNumber",
            label: "Nomor Akun",
          },
          {
            name: "bankName",
            label: "Nama Bank",
          },
        ]}
        name={"Akun Donasi"}
        keys={"findManyDonationAccount"}
        countKeys={"findManyDonationAccountCount"}
        countQuery={gql`
          query FindManyDonationAccountCount {
            findManyDonationAccountCount
          }
        `}
        action={["create", "edit", "delete"]}
        createFields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "accountName",
            label: "Nama Akun",
          },
          {
            name: "accountNumber",
            label: "Nomor Akun",
            type: "number",
          },
          {
            name: "bankName",
            label: "Nama Bank",
          },
          {
            name: "logoUrl",
            label: "Logo Bank",
            type: "file",
          },
        ]}
        editFields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "accountName",
            label: "Nama Akun",
          },
          {
            name: "accountNumber",
            label: "Nomor Akun",
            type: "number",
          },
          {
            name: "bankName",
            label: "Nama Bank",
          },
          {
            name: "logoUrl",
            label: "Logo Bank",
            type: "file",
          },
        ]}
        createQuery={gql`
          mutation CreateOneDonationAccount(
            $data: DonationAccountCreateInput!
          ) {
            createOneDonationAccount(data: $data) {
              id
              name
            }
          }
        `}
        editQuery={gql`
          mutation UpdateOneDonationAccount(
            $data: DonationAccountUpdateInput!
            $where: DonationAccountWhereUniqueInput!
          ) {
            updateOneDonationAccount(data: $data, where: $where) {
              id
              name
            }
          }
        `}
        deleteQuery={gql`
          mutation DeleteManyDonationAccount(
            $where: DonationAccountWhereInput
          ) {
            deleteManyDonationAccount(where: $where) {
              count
            }
          }
        `}
        query={gql`
          query (
            $take: Int
            $skip: Int
            $orderBy: [DonationAccountOrderByWithRelationInput]
            $where: DonationAccountWhereInput
          ) {
            findManyDonationAccount(
              take: $take
              skip: $skip
              orderBy: $orderBy
              where: $where
            ) {
              id
              name
              accountName
              accountNumber
              bankName
              logoUrl
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
