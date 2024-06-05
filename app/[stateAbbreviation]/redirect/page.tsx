"use client";

import { Box, Stack, Typography } from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import { useParams, useRouter, redirect } from "next/navigation";
import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";
import LoginFormGoogle from "@/components/site/login-form-google";

export default function RedirectPage(): JSX.Element {
  const router = useRouter();
  const { stateAbbreviation = "" } = useParams();
  const { email, isLoggedIn } = useContext(MongoAtlasAppContext);
  const [redirectCalled, setRedirectCalled] = useState(false);

  useEffect(() => {
    if (email && isLoggedIn && !redirectCalled) {
      setRedirectCalled(true);
      redirect(`/${stateAbbreviation}/browse`);
    } else if (!email && !isLoggedIn && redirectCalled) {
      setRedirectCalled(false);
    }
  }, [email, isLoggedIn, redirectCalled, router, stateAbbreviation]);

  return (
    <Stack spacing={4}>
      <Box
        pt={6}
        sx={() => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        })}
      >
      <Typography level="h1">Unauthorized User</Typography>
      <Typography level="body-md">
        Please see an administrator to grant you access to this site, or sign in with an authorized Google Account.
      </Typography>
      <Typography level="body-md">
        We will need to add custom logic to automatically route people to this
        page if they attempt to sign up with an unauthorized Google SSO.
      </Typography>
      <LoginFormGoogle />
      </Box>
    </Stack>
  );
}
