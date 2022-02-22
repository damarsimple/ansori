import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  InputBase,
  Paper,
  Stack,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import Image from "next/image";
//@ts-ignore
import useMobileDetect from "use-mobile-detect-hook";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const menus = [
  {
    name: "Abang Putih Al-Ansori",
    path: "/",
  },
  {
    name: "Sedekah",
    path: "/sedekah",
  },
  {
    name: "Zakat",
    path: "/sedekah",
  },
  {
    name: "Yatim Piatu",
    path: "/yatimpiatu",
  },
  {
    name: "Donasi",
    path: "/donasi",
  },
  {
    name: "Tentang Kami",
    path: "/about",
  },
];

export default function Navbar() {
  const detectMobile = useMobileDetect();

  const [open, setOpen] = useState(false);

  const { push } = useRouter();

  const MobileMenu = () => (
    <Paper
      sx={{
        py: 1.5,
        display: "flex",
        gap: 2,
        px: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IconButton onClick={() => setOpen(!open)}>
        {open ? <ArrowBackIcon /> : <MenuIcon />}
      </IconButton>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Image
          src="/android-icon-144x144.png"
          alt="Abang Putih Al-Ansori"
          width={40}
          height={40}
        />
        <Typography variant="h6" component="h1">
          AL-ANSORI
        </Typography>
      </Box>
      <IconButton onClick={() => setOpen(!open)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );

  if (detectMobile.isMobile()) {
    return (
      <>
        <MobileMenu />
        <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          <MobileMenu />
          <Box sx={{ width: "100vw" }} role="presentation">
            <Box sx={{ mt: 2 }}>
              <TextField size="small" sx={{ ml: 4, width: "75%" }} focused />
              <Button>Cari</Button>
            </Box>
            <List>
              {menus.map((text, index) => (
                <ListItem
                  button
                  key={text.name}
                  onClick={() => push(text.path)}
                >
                  <Typography variant="h6" component={"h1"}>
                    {text.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    );
  }

  return (
    <Paper sx={{ py: 1.5, display: "flex", gap: 2, px: 1 }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Image
          src="/android-icon-144x144.png"
          alt="Abang Putih Al-Ansori"
          width={40}
          height={40}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack
          spacing={4}
          direction="row"
          sx={{ height: 40, alignItems: "center" }}
        >
          {menus.map((e) => (
            <Link href={e.path} key={e.name}>
              <a>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                    ":hover": {
                      backgroundColor: "red",
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  {e.name}
                </Box>
              </a>
            </Link>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
}
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/router";
