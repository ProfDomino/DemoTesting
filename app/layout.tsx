import type { Metadata } from "next";

export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awards Committee",
  description: "Awards Committee",
  category: "education",
  openGraph: {
    title: "Awards Committee",
    type: "website",
    description: "Awards Committee",
  },
};

export default function StateRootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
