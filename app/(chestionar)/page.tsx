import { QuizComponent } from "@/components/quiz-component/quiz-component";
import classes from "./page.module.scss";
import CaseComponent from "@/components/case-component/case-component";

import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";

export default function Home() {
  return (
    <div className={classes.page}>
      <div className={classes.wrapper}>
        <QuizComponent />
        <CaseComponent />
      </div>
    </div>
  );
}
