import { gql } from "@apollo/client";
import { Box, Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { useRouter } from "next/router";
import { News as NewsType } from "../../../types";

export default function News() {
  const { push } = useRouter();
  return (
    <AdminWrapper>
      <Link href="/admin/news/create">
        <a>
          <Button fullWidth variant="contained">
            Buat Berita
          </Button>
        </a>
      </Link>
      <MUITable<NewsType>
        fields={[
          {
            name: "title",
            label: "Name",
          },
        ]}
        name={"News"}
        keys={"findManyNews"}
        countKeys={"findManyNewsCount"}
        countQuery={gql`
          query FindManyNewsCount {
            findManyNewsCount
          }
        `}
        action={["edit", "delete"]}
        onEdit={(row) => push(`/admin/news/` + row.id)}
        // deleteQuery={gql``}
        query={gql`
          query (
            $take: Int
            $skip: Int
            $orderBy: [NewsOrderByWithRelationInput]
            $where: NewsWhereInput
          ) {
            findManyNews(
              take: $take
              skip: $skip
              orderBy: $orderBy
              where: $where
            ) {
              id
              title
              slug
              createdAt
              updatedAt
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
