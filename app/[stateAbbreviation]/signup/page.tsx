"use client";

import {
  Box,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Checkbox,
  Link,
  Grid,
  Stack,
  Container,
  Option,
  Select,
} from "@mui/joy";
//import * as React from "react";
import React, { useContext, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "next/navigation";
import { UserProfileContext } from "app/_contexts/user-profile";

export default function SignupPage(): JSX.Element {
  const { profile, updateProfile } = useContext(UserProfileContext);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const handleSaveClick = () => {
    updateProfile(updatedProfile);
  };

  return (
    <Box>
      <Grid container marginTop={2} spacing={8} alignItems="center">
        <Typography level="h2" sx={{ mb: 2, color: "#353130" }}>
          Complete Profile Sign Up
        </Typography>

        <Grid xs={6} sm={6} md={12} lg={12} style={{ textAlign: "left" }}>
          <Typography level="h4">
            Preferred Name:
            <input
              type="text"
              name="displayName"
              value={updatedProfile.displayName}
              onChange={handleInputChange}
            />
          </Typography>
        </Grid>

        <Grid xs={6} sm={6} md={12} lg={12} style={{ textAlign: "left" }}>
          <Typography level="h4">
            Pronouns:
            <input
              type="text"
              name="pronouns"
              value={updatedProfile.pronouns}
              onChange={handleInputChange}
            />
          </Typography>
        </Grid>

        <Grid xs={6} sm={6} md={12} lg={12} style={{ textAlign: "left" }}>
          <Typography level="h4">
            Ethnicity:
            <input
              type="text"
              name="ethnicity"
              value={updatedProfile.ethnicity}
              onChange={handleInputChange}
            />
          </Typography>
        </Grid>

        <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: "left" }}>
            <Button
              component="a"
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
              onClick={handleSaveClick}
            >
              <Typography level="h4">Save</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
