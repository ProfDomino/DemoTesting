"use client";

import { Box, Button, Typography, Grid } from "@mui/joy";
import React, { useContext } from 'react';
import { UserProfileContext } from 'app/_contexts/user-profile';

export default function ProfilePage(): JSX.Element {
  const { profile, profileLoading } = useContext(UserProfileContext);

  if (profileLoading) {
    return <Typography level="body-md">Loading...</Typography>;
  }
  else {
  return (

    <Box>

      <Typography level="h1">Profile - GET Demo</Typography>
      <Typography level="h3">Preferred Name: {profile.displayName}</Typography>
      <Typography level="h3">Pronouns: {profile.pronouns}</Typography>
      <Typography level="h3">Full Name: {profile.firstName} {profile.lastName}</Typography>
      <Typography level="h3">email: {profile.email} </Typography>

      <Typography level="h3">Committee</Typography>
      <Typography level="h3">Role</Typography>
      <Typography level="h3">Title</Typography>
      <Typography level="h3">School/Library</Typography>
      <Typography level="h3">Buddy Name</Typography>
      <Typography level="h3">Term Start Date</Typography>
      <Typography level="h3">Term End Date</Typography>

      <Grid container>

      <Grid xs={6} sm={6} md={6} lg={6} style={{textAlign:'center'}}>
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
            }}>
            <Typography level="h2">Edit</Typography>
          </Button>
        </Grid>


      </Grid>

    </Box>

  )};
}