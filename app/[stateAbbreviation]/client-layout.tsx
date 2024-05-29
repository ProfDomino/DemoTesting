"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { Container, Box } from "@mui/joy";
import { IconContext } from "react-icons";
import { type PropsWithChildren } from "react";
import Navbar from "@/components/site/navbar";
import ThemeProvider from "@/contexts/theme";
import Footer from "@/components/site/footer";
import { usePathname, useParams, useRouter } from "next/navigation";
import MongoAtlasApp from "@/contexts/mongo-atlas-app";
import UserProfileProvider from "@/contexts/user-profile";

export default function ClientLayout(
  props: PropsWithChildren
): JSX.Element | null {
  const { children } = props;
  const path = usePathname();
  const params = useParams();
  const router = useRouter();
  const validStates: string[] = ["me", "ME"];
  const { stateAbbreviation = "" } = params;
  if (
    typeof stateAbbreviation !== "string" ||
    !validStates.includes(stateAbbreviation)
  ) {
    router.push("/");
    return null;
  }

  return (
    <Box
      sx={{ bgcolor: path === `/${stateAbbreviation}` ? "#65298b" : "#FFFFFF" }}
    >
      <ThemeProvider>
        <MongoAtlasApp>
          <UserProfileProvider>
            <LazyMotion features={domAnimation}>
              <Navbar />
              <IconContext.Provider
                value={{
                  style: {
                    width: "36px",
                    height: "36px",
                    color: "#434343",
                  },
                }}
              >
                <Container>
                  <Box pt={3} minHeight="66vh">
                    {children}
                  </Box>
                </Container>
                <Footer />
              </IconContext.Provider>
            </LazyMotion>
          </UserProfileProvider>
        </MongoAtlasApp>
      </ThemeProvider>
    </Box>
  );
}
