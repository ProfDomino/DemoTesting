"use client";

import { Box, Typography } from "@mui/joy";

export default function RedirectPage(): JSX.Element {
  return (
    <Box>
      <Typography level="h1">Unauthorized User</Typography>
      <Typography level="body-md">
        Please contact an administrator to requst access to this application.
      </Typography>
      <Typography level="body-md">
        We will need to add custom logic to automatically route people to this
        page if they are not authorized.
      </Typography>
    </Box>
  );
}
