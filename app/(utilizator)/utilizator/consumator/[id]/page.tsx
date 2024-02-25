"use client";
import StepComponent from "@/components/step-component/step-component";
import classes from "./page.module.scss";
import ElementsSectionComponent from "@/components/elements-section-component/elements-section-component";

export default function Home() {
  return (
    <div className={classes.pageWrapper}>
      <StepComponent />
      <ElementsSectionComponent />
    </div>
  );
}
