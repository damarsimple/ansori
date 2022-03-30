import { gql } from "@apollo/client";
import { Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";

export default function DonationAccount() {
  return (
    <AdminWrapper>
      <Link href="/admin/accountdonations/create">
        <a>
          <Button fullWidth variant="contained">
            Buat Akun Donasi
          </Button>
        </a>
      </Link>
      <MUITable<{ id: number; name: string }>
        headcells={[
          {
            name: "name",
            label: "Name",
          },
        ]}
        name={"News"}
        keys={"findManyDonationAccount"}
        countKeys={"findManyDonationAccountCount"}
        countQuery={gql`
          query FindManyDonationAccountCount {
            findManyDonationAccountCount
          }
        `}
        action={["edit", "delete"]}
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
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
