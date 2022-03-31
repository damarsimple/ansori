import { gql } from "@apollo/client";
import { Button } from "@mui/material";
import AdminWrapper from "../../../components/AdminWrapper";
import MUITable from "../../../components/MUITable";
import Link from "next/link";
import { Roles, User as UserType } from "../../../types";

export default function User() {
  return (
    <AdminWrapper>
      <MUITable<UserType>
        fields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "email",
            label: "Email",
          },
          {
            name: "showOnHomepage",
            label: "Tunjukkan di homepage",
          },
          {
            name: "roles",
            label: "Role",
          },
        ]}
        name={"User"}
        keys={"findManyUser"}
        countKeys={"findManyUserCount"}
        countQuery={gql`
          query FindManyUserCount {
            findManyUserCount
          }
        `}
        action={["edit", "delete"]}
        deleteQuery={gql`
          mutation DeleteManyUser($where: UserWhereInput) {
            deleteManyUser(where: $where) {
              count
            }
          }
        `}
        createFields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "email",
            label: "Email",
          },

          {
            name: "roles",
            label: "Role",
            type: "select",
            selects: Object.keys(Roles),
          },
        ]}
        editFields={[
          {
            name: "name",
            label: "Name",
          },
          {
            name: "email",
            label: "Email",
          },

          {
            name: "roles",
            label: "Role",
            type: "select",
            //@ts-ignore
            selects: Object.keys(Roles).map((e) => `${Roles[e]}`),
          },
        ]}
        createQuery={gql`
          mutation CreateOneUser($data: UserCreateInput!) {
            createOneUser(data: $data) {
              id
              name
            }
          }
        `}
        editQuery={gql`
          mutation UpdateOneUser(
            $data: UserUpdateInput!
            $where: UserWhereUniqueInput!
          ) {
            updateOneUser(data: $data, where: $where) {
              id
              name
            }
          }
        `}
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
              roles
              email
              showOnHomepage
            }
          }
        `}
      />
    </AdminWrapper>
  );
}
