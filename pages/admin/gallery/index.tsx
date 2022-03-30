import { gql } from "@apollo/client";
import { Box, Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ImageGallery() {
  return (
    <AdminWrapper>
      <Link href="/admin/gallery/create">
        <a>
          <Button fullWidth variant="contained">
            Buat Gambar Galeri Baru
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
        keys={"findManyImageGallery"}
        countKeys={"findManyImageGalleryCount"}
        countQuery={gql`
          query FindManyImageGalleryCount {
            findManyImageGalleryCount
          }
        `}
        action={["edit", "delete"]}
        query={gql`
          query (
            $take: Int
            $skip: Int
            $orderBy: [ImageGalleryOrderByWithRelationInput]
            $where: ImageGalleryWhereInput
          ) {
            findManyImageGallery(
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
