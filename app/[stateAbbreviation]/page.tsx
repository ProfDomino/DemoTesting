"use client";

import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";
import { Box, Button, Typography } from "@mui/joy";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function MSBAHomePage(): JSX.Element {
  const { isLoggedIn } = useContext(MongoAtlasAppContext);
  const { stateAbbreviation = "me" } = useParams();

  return (
    <Box
      p={2}
      sx={{
        bgcolor: "#65298b",
        minHeight: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography level="h1" sx={{ textAlign: "center", color: "#FFFFFF" }}>
        Welcome Maine Student Book Awards Committee Members!
      </Typography>
      <Box sx={{ maxWidth: 560, mx: "auto", my: 2 }}>
        <Typography marginTop={2} sx={{ textAlign: "left", color: "#FFFFFF" }}>
          Thank you for being a part of committee to select the book list for
          2024-2025. Happy Reading!
        </Typography>
      </Box>
      <Box marginTop={2}>
        <Button
          component={NextLink}
          // regardless of what our state is, bring me to the signin page
          // after clicking "get started"
          href={`/${stateAbbreviation}/${isLoggedIn ? "signin" : "signin"}`}
          size="lg"
          sx={{
            mt: 5,
            backgroundColor: "#f05a22",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#c997d2",
            },
          }}
        >
          Get Started!
        </Button>
      </Box>
    </Box>
  );
}
