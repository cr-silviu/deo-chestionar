import React, { ReactNode } from "react";
import classes from "./page.module.scss";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.layout}>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
};

export default layout;
