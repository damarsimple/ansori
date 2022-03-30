import { gql } from "@apollo/client";
import { Box, Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Category() {
  return (
    <AdminWrapper>
      <Link href="/admin/categories/create">
        <a>
          <Button fullWidth variant="contained">
            Buat Kategori
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
        keys={"findManyCategory"}
        countKeys={"findManyCategoryCount"}
        countQuery={gql`
          query FindManyCategoryCount {
            findManyCategoryCount
          }
        `}
        action={["edit", "delete"]}
        query={gql`
          query (
            $take: Int
            $skip: Int
            $orderBy: [CategoryOrderByWithRelationInput]
            $where: CategoryWhereInput
          ) {
            findManyCategory(
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
