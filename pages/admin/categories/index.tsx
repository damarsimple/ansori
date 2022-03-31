import { gql } from "@apollo/client";
import { Box, Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { useRouter } from "next/router";
import { Category as CategoryType } from "../../../types";
import slugify from "slugify";

export default function Category() {
  return (
    <AdminWrapper>
      <MUITable<CategoryType>
        fields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "slug",
            label: "Slug",
          },
        ]}
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
        mutationModifier={{
          create: (e) => ({ ...e, slug: slugify(e.name).toLowerCase() }),
          edit: (e) => {
            console.log(e);
            return { ...e, slug: slugify(e.name).toLowerCase() };
          },
        }}
        name={"Category"}
        keys={"findManyCategory"}
        countKeys={"findManyCategoryCount"}
        countQuery={gql`
          query FindManyCategoryCount {
            findManyCategoryCount
          }
        `}
        action={["create", "edit", "delete"]}
        createQuery={gql`
          mutation CreateOneCategory($data: CategoryCreateInput!) {
            createOneCategory(data: $data) {
              id
              name
            }
          }
        `}
        editQuery={gql`
          mutation UpdateOneCategory(
            $data: CategoryUpdateInput!
            $where: CategoryWhereUniqueInput!
          ) {
            updateOneCategory(data: $data, where: $where) {
              id
              name
            }
          }
        `}
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
              slug
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
