import type { Metadata } from "next";
import classes from "./layout.module.scss";

import NavigationBar from "@/components/navigation-bar/navigation-bar";

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
    <div className={classes.page}>
      <NavigationBar />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
