"use client";

import Box from "@mui/joy/Box";
import { IconContext } from "react-icons";
import {
  Avatar,
  Button,
  Dropdown,
  IconButton,
  ListDivider,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/joy";
import NextLink from "next/link";
import { useContext, type ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineHowToVote } from "react-icons/md";
import { IoLibraryOutline, IoSearchSharp } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { useParams } from "next/navigation";
import { GiSpellBook, GiTeacher } from "react-icons/gi";
import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";
import { UserProfileContext } from "@/contexts/user-profile";

interface NavbarButtonProps {
  link: string;
  text: string;
  icon?: ReactNode | null;
  showMobileText?: boolean;
}

function NavbarButton(props: NavbarButtonProps): JSX.Element {
  const { link = "", icon = null, text = "", showMobileText = false } = props;

  return showMobileText ? (
    <Button
      color="primary"
      component={NextLink}
      href={link}
      prefetch={false}
      startDecorator={icon}
      sx={{ height: 44 }}
      variant="soft"
    >
      <Typography level="body-lg">{text}</Typography>
    </Button>
  ) : (
    <>
      <IconButton
        color="primary"
        component={NextLink}
        href={link}
        prefetch={false}
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
          height: 44,
        })}
        variant="soft"
      >
        {icon}
      </IconButton>
      <Button
        color="primary"
        component={NextLink}
        href={link}
        prefetch={false}
        startDecorator={icon}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
          height: 44,
        })}
        variant="soft"
      >
        <Typography level="body-lg">{text}</Typography>
      </Button>
    </>
  );
}

function NavbarLoggedInMenu(): JSX.Element | null {
  const params = useParams();
  const { stateAbbreviation = "me" } = params;
  const { userLoading, isLoggedIn, email, picture, name } =
    useContext(MongoAtlasAppContext);

  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    }
  }, []);

  if (initialRender) {
    return null;
  }

  return !userLoading && email && isLoggedIn ? (
    <Stack direction="row" alignItems="center" spacing={2}>
      <NavbarButton
        icon={<IoLibraryOutline />}
        link={`/${stateAbbreviation}/browse`}
        text="Browse"
      />
      <NavbarButton
        icon={<PiStudent />}
        link={`/${stateAbbreviation}/reflect`}
        text="Reflect"
      />
      <NavbarButton
        icon={<MdOutlineHowToVote />}
        link={`/${stateAbbreviation}/vote`}
        text="Vote"
      />
    </Stack>
  ) : null;
}

function NavbarLoggedInDropdown(): JSX.Element | null {
  const params = useParams();
  const { stateAbbreviation = "me" } = params;
  const { userLoading, isLoggedIn, email, picture, name } =
    useContext(MongoAtlasAppContext);

  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    }
  }, []);

  if (initialRender) {
    return null;
  }

  return !userLoading && email && isLoggedIn ? (
    <Dropdown>
      <MenuButton sx={{ height: 44 }} variant="plain">
        <Avatar alt={name} color="primary" src={picture} variant="soft" />
      </MenuButton>
      <Menu
        color="primary"
        placement="bottom-end"
        sx={{ zIndex: 1200, r: 10 }}
        variant="outlined"
      >
        <MenuItem disabled>{name}</MenuItem>

        <ListDivider />
        <MenuItem
          component={NextLink}
          href={`/${stateAbbreviation}/signup`}
          prefetch={false}
          sx={{ textDecoration: "none" }}
        >
          Profile signup flow
        </MenuItem>

        <MenuItem
          component={NextLink}
          href={`/${stateAbbreviation}/profile`}
          prefetch={false}
          sx={{ textDecoration: "none" }}
        >
          My profile
        </MenuItem>

        <MenuItem
          component={NextLink}
          href={`/${stateAbbreviation}/logout`}
          prefetch={false}
          sx={{ textDecoration: "none" }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Dropdown>
  ) : null;
}

export default function Navbar(): JSX.Element {
  const params = useParams();
  const { stateAbbreviation = "me" } = params;

  const { userLoading, isLoggedIn, email, picture, name } =
    useContext(MongoAtlasAppContext);

  return (
    <Box
      component="header"
      padding={1}
      sx={[
        {
          bgcolor: "background.surface",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
          width: "100%",
        },
      ]}
    >
      <IconContext.Provider
        value={{ style: { width: "28px", height: "28px", color: "#000" } }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Box
            key="navbarLeft"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "row",
              gap: 3,
              [theme.breakpoints.down("md")]: {
                gap: 1,
              },
            })}
          >
            <Box
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              })}
            >
              <NextLink href={`/${stateAbbreviation}`} prefetch={false}>
                <Image
                  alt="ReMo logo"
                  height="65"
                  src="/msba-logo.png"
                  width="80"
                />
              </NextLink>
            </Box>
            <NavbarLoggedInMenu />
          </Box>

          <Box key="navbarRight">
            <NavbarLoggedInDropdown />
          </Box>
        </Stack>
      </IconContext.Provider>
    </Box>
  );
}
