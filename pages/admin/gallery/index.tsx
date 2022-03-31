/* eslint-disable @next/next/no-img-element */
import { gql } from "@apollo/client";
import { Box, Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImageGallery as ImageGalleryType } from "../../../types";

export default function ImageGallery() {
  return (
    <AdminWrapper>
      <MUITable<ImageGalleryType>
        fields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "image",
            label: "URL Gambar",
          },
        ]}
        createFields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "image",
            label: "Gambar",
            type: "file",
          },
          {
            name: "description",
            label: "Description",
          },
        ]}
        editFields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "image",
            label: "Gambar",
            type: "file",
          },
          {
            name: "description",
            label: "Description",
          },
        ]}
        TooltipChildren={(e) => (
          <img width="100%" src={e.image ?? ""} alt={e.description ?? ""} />
        )}
        createQuery={gql`
          mutation CreateOneImageGallery($data: ImageGalleryCreateInput!) {
            createOneImageGallery(data: $data) {
              id
              name
            }
          }
        `}
        editQuery={gql`
          mutation UpdateOneImageGallery(
            $data: ImageGalleryUpdateInput!
            $where: ImageGalleryWhereUniqueInput!
          ) {
            updateOneImageGallery(data: $data, where: $where) {
              id
              name
            }
          }
        `}
        name={"Galeri"}
        keys={"findManyImageGallery"}
        countKeys={"findManyImageGalleryCount"}
        countQuery={gql`
          query FindManyImageGalleryCount {
            findManyImageGalleryCount
          }
        `}
        deleteQuery={gql`
          mutation DeleteManyImageGallery($where: ImageGalleryWhereInput) {
            deleteManyImageGallery(where: $where) {
              count
            }
          }
        `}
        action={["create", "edit", "delete"]}
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
              image
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
