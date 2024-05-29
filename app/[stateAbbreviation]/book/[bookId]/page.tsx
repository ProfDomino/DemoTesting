"use client";

import { Box, Button, Chip, Divider, Grid, Stack, Typography } from "@mui/joy";
import { BackButton } from "@/components/ui/back-button";
import parse from "html-react-parser";
import { BookCover } from "@/components/books/book-cover";
import { BookDetail } from "@/components/books/book-detail";
import { BookTopics } from "@/components/books/book-topics";
import { Book, BookPreview } from "@/types/book";
import { BookMeta } from "@/types/book-meta";

interface BookData {
  browse: BookPreview[];
  books: { [id: string]: Book };
  bookMeta: { [id: string]: BookMeta };
}

export default function BookDetailPage({
  params,
}: {
  params: { bookId: string };
}): JSX.Element {
  const { bookId = "" } = params;
  const book: Book = {
    isbn10: "059356619X",
    isbn13: "9780593566190",
    title: "Something Like Home",
    image: "https://cdn.remo.app/images/56/19/9780593566190.jpg",
    pageCount: "248",
    wordCount: "0",
    pubDate: "2023",
    copyrightDate: "2023",
    foreword: "",
    edition: "0",
    format: "",
    isUnpaged: false,
    _id: "65ff1fb51c5f682b7e242a56",
  };

  const bookMetum: BookMeta = {
    _id: "65ff1fb51c5f682b7e242a56",
    title: "Something Like Home",
    subtitle: "",
    author: "Andrea Beatriz Arango",

    editor: "",
    illustrator: "",
    creators: [],
    synopsis:
      "Laura grapples with the decision to call 911 after finding her parents, fearing that life would have remained unchanged if she hadn't taken action. Instead, she finds herself in kinship care with a relative she barely knows, leading to uncertainty about her future. When Laura rescues an abandoned dog and gains permission to keep it, she discovers the concept of therapy dogs and decides to train her pet. Through this journey, she forms a new friendship and gains insight into the challenges others face.",
    publisher: ["Random House Books for Young Readers"],
    characterEthnicity: [],
    characterGenderIdentity: [],
    characterRaceCulture: [],
    characterReligion: [],
    characterSexualOrientation: [],
    awards: [],
    contentWarning: [],
    timePeriod: [],
    narrativeForm: ["Novels-In-Verse"],
    genre: ["Fiction: Realistic"],
    historicalEvents: [],
    internationalAwards: [],
    language: [],
    languageRegister: [],
    literaryDevices: [],
    modesOfWriting: [],
    pointOfView: [],
    subject: [],
    textFeatures: [],
    textStructure: [],
    topic: ["Family Situations"],
    voice: [],
    tags: ["dogs"],
    isFiction: true,
    isNonFiction: false,
    isBlended: false,
    guidedReadingLevel: "",
    lexileLevel: "",
    hasMultiplePov: false,
    hasUnreliableNarrative: false,
    isbn10: ["059356619X"],
    isbn13: ["9780593566190"],
    series: "",
    seriesBookNumber: 1,
    seriesType: "Stand Alone",
    defaultEdition: 0,
    editions: [
      {
        isbn10: "059356619X",
        isbn13: "9780593566190",
        title: "Something Like Home",
        author: "Andrea Beatriz Arango",
        image: "https://cdn.remo.app/images/56/19/9780593566190.jpg",
        pageCount: "248",
        wordCount: "0",
        pubDate: "2023",
        copyrightDate: "2023",
        foreword: "",
        edition: "0",
        format: "",
        isUnpaged: false,
      },
    ],
  };

  return book && bookMetum ? (
    <Box>
      <BackButton />

      <Grid container marginTop={2} spacing={8}>
        <Grid md={3} sm={4} xs={12}>
          <Box marginBottom={4}>
            <BookCover
              image={
                book.image ? book.image : "https://cdn.remo.app/not-found.jpg"
              }
              title={book.title ? book.title : ""}
            />
          </Box>
          <Stack direction="column" spacing={2}>
            <Button color="success" disabled variant="soft">
              <Typography level="body-lg">Read this book now</Typography>
            </Button>

            <Button color="success" disabled variant="soft">
              <Typography level="body-lg">Save this book for later</Typography>
            </Button>
          </Stack>
        </Grid>
        <Grid md={9} sm={8} xs={12}>
          <Typography level="h1" marginTop={1}>
            {book.title}{" "}
            {bookMetum.series &&
            bookMetum.series !== "" &&
            bookMetum.seriesBookNumber ? (
              <Chip color="success" size="lg" variant="solid">
                Book {bookMetum.seriesBookNumber}
              </Chip>
            ) : null}
          </Typography>

          <BookDetail book={book} bookMeta={bookMetum} />

          <Box mt={4}>
            <Divider />
          </Box>

          {bookMetum.synopsis ? (
            <Box marginTop={2}>
              <Typography level="h4">Synopsis</Typography>
              <Typography level="body-md">
                {parse(bookMetum.synopsis)}
              </Typography>{" "}
            </Box>
          ) : null}

          <BookTopics bookMeta={bookMetum} />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <div />
  );
}
