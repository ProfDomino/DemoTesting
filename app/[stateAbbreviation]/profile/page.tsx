"use client";

import { Box, Typography, Button, CssBaseline, Grid, Container } from "@mui/joy";
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from "next/navigation";

export default function SignupPage(): JSX.Element {
  const { stateAbbreviation = "me" } = useParams();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <Box>
          <Grid container rowSpacing={3} columnSpacing={12}>
            <Grid xs={6} sm={6} md={6} lg={6} style={{ textAlign: 'left' }}>
              <Typography level="h2">Alex</Typography>
              <Typography level="body-md">preferred name</Typography>
            </Grid>
            <Grid xs={6} sm={6} md={6} lg={6} style={{ textAlign: 'left' }}>
              <Typography level="h2">she/her</Typography>
              <Typography level="body-md">pronouns</Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'center' }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: 100,
                  maxHeight: { xs: 200, md: 200 },
                  maxWidth: { xs: 200, md: 200 },
                }}
                alt=""
                src=""
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>Full Name:</strong></Typography>
              <div id = "first_name_div"></div>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>Committee:</strong></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>Role:</strong></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>Title:</strong></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>School/Library:</strong></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>Buddy Name:</strong></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>Term Start Date:</strong></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
              <Typography level="title-md"><strong>Term End Date:</strong></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'left' }}>
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
                }}>
                Edit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container >
  )
}