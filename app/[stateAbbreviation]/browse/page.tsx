"use client";

import { useContext, useEffect, useState } from "react";
import { Box, Chip, Grid, Option, Select, Stack, Typography } from "@mui/joy";
import { BookGridWall } from "@/components/books/book-grid-wall";

import { BookMeta } from "@/types/book-meta";
import ProtectedPage from "@/components/site/protected-page";
import { useParams } from "next/navigation";
import { fetchEndpoint } from "app/_lib/util";
import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";
import { BookPreview } from "@/types/book";

function BrowsePage(): JSX.Element {
  return (
    <Box p={2} mb={12}>
      <Typography level="h1" mb={2}>
        Browse Your MSBA Books
      </Typography>
    </Box>
  );
}

export default function ProtectedBrowsePage(): JSX.Element {
  return (
    <ProtectedPage committee>
      <BrowsePage />
    </ProtectedPage>
  );
}
