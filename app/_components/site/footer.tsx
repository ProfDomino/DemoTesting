"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Box, Grid, Stack, Typography } from "@mui/joy";
import { PropsWithChildren } from "react";
import { useParams } from "next/navigation";

interface FooterLinkProps extends PropsWithChildren {
  href: string;
}

function FooterLink(props: FooterLinkProps): JSX.Element {
  const { href, children } = props;
  return (
    <Typography
      component={NextLink}
      href={href}
      level="body-md"
      sx={[
        {
          textDecorationLine: "none",
        },
      ]}
    >
      {children}
    </Typography>
  );
}

export default function Footer(): JSX.Element {
  const { stateAbbreviation = "me" } = useParams();
  return (
    <Box
      component="footer"
      padding={4}
      sx={[
        {
          bgcolor: "background.surface",
          borderTop: "1px solid",
          borderColor: "divider",
          zIndex: 1100,
          width: "100%",
        },
      ]}
    >
      <Grid container spacing={2}>
        <Grid xs={12} sm={3}>
          <Stack direction="column" spacing={2}>
            <FooterLink href={`/${stateAbbreviation}/about`}>About</FooterLink>
            <FooterLink href={`/${stateAbbreviation}/faq`}>FAQ</FooterLink>
          </Stack>
        </Grid>
        <Grid xs={12} sm={3}>
          <Stack direction="column" spacing={2}>
            <FooterLink href={`/${stateAbbreviation}/privacy`}>
              Privacy
            </FooterLink>
            <FooterLink href={`/${stateAbbreviation}/terms-conditions`}>
              Terms & Conditions
            </FooterLink>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6}>
          <Box
            sx={[
              {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
                height: "100%",
              },
            ]}
          >
            <Typography
              level="body-md"
              sx={{ marginRight: "0.5rem", color: "text.primary" }}
            >
              Powered by
            </Typography>
            <Image
              alt="ReMo logo"
              src="/remo-logo.png"
              height="38"
              width="104"
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={[
          {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            height: "100%",
          },
        ]}
      >
        <Typography
          level="body-md"
          sx={{ marginRight: "0.5rem", color: "text.primary" }}
        >
          © 2024 LiteracyTech, Inc
        </Typography>
      </Box>
    </Box>
  );
}
