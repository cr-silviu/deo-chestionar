"use client";
import StepComponent from "@/components/step-component/step-component";
import classes from "./page.module.scss";

import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  console.log(params);

  return <div className={classes.pageWrapper}>
    <StepComponent />
  </div>;
}
