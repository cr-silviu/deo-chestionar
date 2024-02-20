import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chestionar analiza",
  description: "Chestionar analiza documente initiale DEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>{children}</main>
    </html>
  );
}
