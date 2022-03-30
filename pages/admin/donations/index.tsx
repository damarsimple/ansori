import { gql } from "@apollo/client";
import { Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";

export default function Donation() {
  return (
    <AdminWrapper>
      <Link href="/admin/donations/create">
        <a>
          <Button fullWidth variant="contained">
            Buat Donasi
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
        keys={"findManyDonation"}
        countKeys={"findManyDonationCount"}
        countQuery={gql`
          query FindManyDonationCount {
            findManyDonationCount
          }
        `}
        action={["edit", "delete"]}
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
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
