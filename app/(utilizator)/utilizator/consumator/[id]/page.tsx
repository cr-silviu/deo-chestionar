"use client";
import StepComponent from "@/components/step-component/step-component";
import classes from "./page.module.scss";


export default function Home() {

  return <div className={classes.pageWrapper}>
    <StepComponent />
  </div>;
}
