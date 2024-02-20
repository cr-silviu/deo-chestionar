"use client";
import classes from "./page.module.scss";

import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  console.log(params);

  return <div className={classes.page}>Hello</div>;
}
