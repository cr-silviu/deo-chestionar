import { QuizComponent } from "@/components/quiz-component/quiz-component";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes.page}>
      <QuizComponent />
    </div>
  );
}
