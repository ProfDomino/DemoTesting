"use client";

import * as Realm from "realm-web";
import {
  Button,
  Card,
  Typography,
  CardActions,
  Box,
  AccordionGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/joy";
import Link from "@mui/joy/Link";
import { GoogleIcon } from "@/components/ui/google-icon";
import { useCallback, useContext, useEffect, useState } from "react";
import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";
import { useParams } from "next/navigation";

export default function LoginFormGoogle(): JSX.Element {
  const { logIn } = useContext(MongoAtlasAppContext);
  const { stateAbbreviation = "me" } = useParams();
  const [executeLogin, setExecuteLogin] = useState<boolean>(false);

  const logInWrapper = useCallback(
    async (credentials: Realm.Credentials) => {
      if (logIn) {
        await logIn(credentials);
      }
    },
    [logIn]
  );

  useEffect(() => {
    const loginFunction = async (): Promise<void> => {
      try {
        const redirectUrl = process.env.NEXT_PUBLIC_AUTH_REDIRECT
          ? `${process.env.NEXT_PUBLIC_AUTH_REDIRECT}${stateAbbreviation}/login/auth`
          : "http://localhost:3000/login/auth";

        const credentials = Realm.Credentials.google({ redirectUrl });
        await logInWrapper(credentials);
        setExecuteLogin(false);
      } catch (e) {
        // eslint-disable-next-line no-console -- need to display error
        console.error(e);
      }
    };
    if (executeLogin) {
      loginFunction();
    }
  }, [executeLogin, logInWrapper]);

  return (
    <>
      <Card
        sx={() => ({
          textAlign: "center",
          alignItems: "center",
          width: 320,
          py: 3, // padding top & bottom
          px: 2, // padding left & right
        })}
        variant="outlined"
      >
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            setExecuteLogin(true);
          }}
          style={{ width: "100%" }}
        >
          <Typography level="h2">Start your reading adventure today</Typography>

          <CardActions>
            <Button
              color="neutral"
              data-testid="submit-button"
              fullWidth
              id="submit-button"
              startDecorator={<GoogleIcon />}
              type="submit"
              variant="outlined"
            >
              Sign in with Google
            </Button>
          </CardActions>
        </form>
      </Card>

      <Typography level="body-sm" textColor="text.secondary">
        By continuing you agree to our{" "}
        <Link color="neutral" href="https://remo.app/terms-of-use/">
          <b>Terms of Use</b>
        </Link>{" "}
        and our{" "}
        <Link color="neutral" href="https://remo.app/privacy-policy/">
          <b> Privacy Policy</b>
        </Link>
      </Typography>

      <Box maxWidth={480} mt={8}>
        <AccordionGroup color="warning" size="lg" variant="soft">
          <Accordion>
            <AccordionSummary>
              <Typography level="title-md">
                Having trouble signing in with Google?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography level="title-sm" mt={2}>
                I click the &quot;Sign in with Google&quot; button and nothing
                happens.
              </Typography>

              <Typography level="body-sm">
                It is likely that your browser pop-up blocker is interfering
                with the process. To allow pop-ups, please follow the
                instructions for your specific browser. You can usually find
                these settings within the browser&apos;s Privacy or Security
                sections.
              </Typography>
              <Typography level="title-sm" mt={2}>
                I get to the Google login screen, but then nothing happens.
              </Typography>

              <Typography level="body-sm">
                On some iPads, we have seen this issue. Once you have logged in
                to Google, try refreshing the ReMo website and see if that
                works.
              </Typography>
              <Typography level="title-sm" mt={2}>
                None of these worked and I still cannot login
              </Typography>

              <Typography level="body-sm">
                Reach out to our support team (support@remo.app) and we will
                help troubleshoot this
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Box>
    </>
  );
}
