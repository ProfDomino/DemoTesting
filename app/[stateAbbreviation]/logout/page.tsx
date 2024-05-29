"use client";

import { Typography } from "@mui/joy";
import { redirect, useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";

export default function LogoutPage(): JSX.Element {
  const { logOut } = useContext(MongoAtlasAppContext);

  const { stateAbbreviation = "" } = useParams();
  const [redirectCalled, setRedirectCalled] = useState<boolean>(false);
  const [redirecting, setRedirecting] = useState<boolean>(false);

  useEffect(() => {
    const logoutClick = async (): Promise<void> => {
      try {
        if (logOut && !redirectCalled) {
          await logOut();
          setRedirectCalled(true);
        }
      } catch (err) {
        // eslint-disable-next-line no-console -- need to display error
        console.error(err);
      }
    };
    void logoutClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- call on page load
  }, []);

  useEffect(() => {
    if (redirectCalled && !redirecting) {
      setRedirecting(true);
      console.log("redirecting", stateAbbreviation);
      redirect(`/${stateAbbreviation}/login`);
    }
  }, [redirectCalled, redirecting, stateAbbreviation]);

  return (
    <Typography level="h1" marginBottom={6} marginTop={3}>
      Logging out...
    </Typography>
  );
}
