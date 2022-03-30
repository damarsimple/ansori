import { gql } from "@apollo/client";
import { Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";

export default function User() {
  return (
    <AdminWrapper>
      <Link href="/admin/members/create">
        <a>
          <Button fullWidth variant="contained">
            Buat Akun
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
        keys={"findManyUser"}
        countKeys={"findManyUserCount"}
        countQuery={gql`
          query FindManyUserCount {
            findManyUserCount
          }
        `}
        action={["edit", "delete"]}
        query={gql`
          query (
            $take: Int
            $skip: Int
            $orderBy: [UserOrderByWithRelationInput]
            $where: UserWhereInput
          ) {
            findManyUser(
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
