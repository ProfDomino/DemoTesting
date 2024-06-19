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
/*export default function ProfilePage(): JSX.Element {
  const { profile, profileLoading } = useContext(UserProfileContext);

  if (profileLoading) {
    return <Typography level="body-md">Loading...</Typography>;
  } else {
    return (
      <Box>
        <Typography level="h1">Profile + GET DEMO</Typography>
        <Typography level="h3">
          Preferred Name: {profile.displayName}
        </Typography>
        <Typography level="h3">Pronouns: {profile.pronouns}</Typography>
        <Typography level="h3">
          Full Name: {profile.firstName} {profile.lastName}
        </Typography>
        <Typography level="h3">email: {profile.email} </Typography>
        <Typography level="h3">Ethnicity: </Typography>
        <Typography level="h3">Committee:</Typography>
        <Typography level="h3">Role:</Typography>
        <Typography level="h3">Title:</Typography>
        <Typography level="h3">School/Library</Typography>
        <Typography level="h3">Buddy Name</Typography>
        <Typography level="h3">Term Start Date</Typography>
        <Typography level="h3">Term End Date</Typography>

        <Grid container>
          <Grid xs={6} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
            <Button
              component="a"
              href="login"
              size="md"
              sx={{
                mt: 5,
                mb: 5,
                backgroundColor: "#f05a22",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#c997d2",
                },
              }}
            >
              <Typography level="h2">Edit</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}*/
