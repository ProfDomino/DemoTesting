"use client";

import { Box, Button, Typography, Grid } from "@mui/joy";

export default function ProfilePage(): JSX.Element {
  return (

    <Box>

      <Typography level="h1">Profile</Typography>{" "}
      <Typography level="body-md">Insert form to view and edit your profile</Typography>
      <Typography level="h3">preferred name</Typography>
      <Typography level="h3">pronouns</Typography>
      <Typography level="h3">Full Name</Typography>
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
            <Typography level="h2">Save</Typography>
          </Button>
        </Grid>
      </Grid>

    </Box>

  );
}
