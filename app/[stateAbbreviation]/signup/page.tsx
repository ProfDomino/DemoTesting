"use client";

import { Box, Typography } from "@mui/joy";

export default function SignupPage(): JSX.Element {
  return (
    <Box>
      <Typography level="h1">Signup</Typography>
      <Typography level="body-md">
        This is where we will add the wizard flow for people to complete their
        initial profiles
      </Typography>
      <Typography level="body-md">
        We will need to add custom logic to automatically route people to this
        page if they have not completed signup.
      </Typography>
    </Box>
  );
}
