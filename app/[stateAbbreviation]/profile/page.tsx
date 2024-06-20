"use client";

import {
  Box,
  Button,
  Typography,
  Grid,
  CssBaseline,
  Container,
} from "@mui/joy";
import React, { useContext } from "react";
import { UserProfileContext } from "app/_contexts/user-profile";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "next/navigation";
import { addListener } from "process";
export default function ProfilePage(): JSX.Element {
  const { profile, profileLoading } = useContext(UserProfileContext);

  if (profileLoading) {
    return <Typography level="body-md">Loading...</Typography>;
  } else {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Box>
            <Grid container rowSpacing={3} columnSpacing={10}>
              <Grid xs={6} sm={6} md={12} lg={12} style={{ textAlign: "left" }}>
                <Typography level="h3">{profile.displayName}</Typography>
                <Typography level="body-sm">preferred name</Typography>
              </Grid>
              <Grid xs={6} sm={6} md={12} lg={12} style={{ textAlign: "left" }}>
                <Typography level="h3">{profile.pronouns}</Typography>
                <Typography level="body-sm">pronouns</Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={3}
                lg={3}
                style={{ textAlign: "center" }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 150,
                    width: 150,
                    mb: 3,
                    mt: 1,
                  }}
                  alt="user-profile-picture"
                  src={profile.picture}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Full Name:</strong> {profile.firstName}{" "}
                  {profile.lastName}
                </Typography>
                <div id="first_name_div"></div>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Ethnicity:</strong> {profile.ethnicity}{" "}
                  {profile.lastName}
                </Typography>
                <div id="first_name_div"></div>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Committee:</strong> {profile.committee}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Role:</strong> {profile.role}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Title:</strong> {profile.title}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>School/Library:</strong> {profile.schoolLibrary}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Buddy Name:</strong> {profile.buddyName}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Term Start Date:</strong> {profile.termStartDate}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Typography level="title-md">
                  <strong>Term End Date:</strong> {profile.termEndDate}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ textAlign: "left" }}
              >
                <Button
                  href="../signup"
                  size="sm"
                  sx={{
                    mt: 3,
                    mb: 5,
                    backgroundColor: "#08B9AA",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#A9E1DA",
                    },
                  }}
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}


