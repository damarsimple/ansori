import { Box, Avatar, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { News } from "../types";
import moment from "moment";

interface PostProp extends News {
  type: "default" | "carousel";
}

export default function PostCard({ type = "default", ...rest }: PostProp) {
  const cat = rest.categories && rest.categories[0];

  switch (type) {
    case "carousel":
      return (
        <Box sx={{ my: 1, display: "flex", flexDirection: "column" }}>
          <Link href={"/post/" + rest.slug}>
            <a>
              {rest.wide && (
                <Avatar
                  variant="square"
                  src={rest.wide}
                  alt={rest.title}
                  sx={{
                    width: 240,
                    height: 150,
                  }}
                />
              )}
            </a>
          </Link>

          <Link href={"/post/" + rest.slug}>
            <a>
              <Typography variant="h6" component={"h1"}>
                {rest.title}
              </Typography>
            </a>
          </Link>

          <Link href={"/category/" + cat?.slug}>
            <a>
              <Typography variant="body2" component={"h1"}>
                {cat?.name} | {moment(rest.createdAt).fromNow()}
              </Typography>
            </a>
          </Link>
        </Box>
      );
      break;

    default:
      return (
        <Box display="flex" gap={3} mb={2}>
          <Link href={"/post/" + rest.slug}>
            <a>
              {rest.potrait && (
                <Avatar
                  variant="square"
                  src={rest.potrait}
                  alt={rest.title}
                  sx={{
                    width: 110,
                    height: 110,
                  }}
                />
              )}
            </a>
          </Link>
          <Box>
            <Link href={"/post/" + rest.slug}>
              <a>
                <Typography
                  variant={"h6"}
                  component={"h1"}
                  sx={{
                    fontWeigth: "bold",
                    height: 90,
                  }}
                >
                  {rest.title}
                </Typography>
              </a>
            </Link>

            <Link href={"/category/" + cat?.slug}>
              <a>
                <Typography variant="caption" component={"h1"}>
                  {cat?.name} | {moment(rest.createdAt).fromNow()}
                </Typography>
              </a>
            </Link>
          </Box>
        </Box>
      );
      break;
  }
}
