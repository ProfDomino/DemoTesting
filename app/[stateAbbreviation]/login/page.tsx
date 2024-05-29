"use client";

import { Box, Stack } from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import { useParams, useRouter, redirect } from "next/navigation";
import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";
import LoginFormGoogle from "@/components/site/login-form-google";

export default function LoginPage(): JSX.Element {
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
        <LoginFormGoogle />
      </Box>
    </Stack>
  );
}
