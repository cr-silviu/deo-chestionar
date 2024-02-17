import QuizComponent from "@/components/QuizComponent/QuizComponent";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes.page}>
      <QuizComponent />
    </div>
  );
}
