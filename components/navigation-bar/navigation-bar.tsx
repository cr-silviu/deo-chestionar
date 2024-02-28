"use client";
import React from "react";
import classes from "./navigation-bar.module.scss";
import Link from "next/link";

import { useAppDispatch } from "@/hooks/redux-hooks";

import { initiateFlow } from "@/redux-actions/flow-actions";

interface Props extends React.ComponentPropsWithoutRef<"nav"> {}

const NavigationBar = (props: Props) => {
  const dispatch = useAppDispatch();

  const generateUser = () => {
    return dispatch(initiateFlow());
  };
  return (
    <nav {...props} className={classes.navigationWrapper}>
      <div className={classes.container}>
        <Logo title="CONSUMATOR" />
        <button onClick={() => generateUser()}>Generate user</button>
      </div>
    </nav>
  );
};

const Logo = (props: { title: "CONSUMATOR" | "PROSUMATOR" | "DEO" }) => {
  return (
    <Link href="/">
      <div className={classes.logoWrapper}>
        <h3>MyDEO</h3>
        <p>{props.title ?? ""}</p>
      </div>
    </Link>
  );
};

export default NavigationBar;
