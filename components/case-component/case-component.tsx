"use client";
import React, { useState, useEffect } from "react";
import classes from "./case-component.module.scss";
import cls from "classnames";

import CaseModal from "@/components/case-modal/case-modal";

import cases from "@/data/cases.json";

type Props = {};

const CaseComponent = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState("CONSUMATOR");
  const [filteredCases, setFilteredCases] = useState<string[]>([]);
  const [filteredCasesIP, setFilteredCasesIP] = useState<string[]>([]);

  const casesArray = Object.keys(cases);
  const populatedCasesArray = casesArray?.map((caseKey) => ({
    //@ts-ignore
    ...cases[caseKey],
    caseKey: caseKey,
  }));

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  useEffect(() => {
    const FIP = casesArray?.filter(
      (caseKey) =>
        caseKey.split("_").includes(selectedOption) &&
        caseKey.split("_").includes("FIP")
    );
    const IP = casesArray?.filter(
      (caseKey) =>
        caseKey.split("_").includes(selectedOption) &&
        caseKey.split("_").includes("IP")
    );
    setFilteredCasesIP(IP);
    setFilteredCases(FIP);
  }, [selectedOption]);

  return (
    <div className={classes.listWrapper}>
      <div className={classes.filterWrapper}>
        <button
          className={cls(
            classes.filterButton,
            selectedOption === "CONSUMATOR"
              ? classes.filterButtonSelected
              : null
          )}
          onClick={() => handleSelectOption("CONSUMATOR")}
        >
          CONSUMATOR
        </button>
        <button
          className={cls(
            classes.filterButton,
            selectedOption === "PROSUMATOR"
              ? classes.filterButtonSelected
              : null
          )}
          onClick={() => handleSelectOption("PROSUMATOR")}
        >
          PROSUMATOR
        </button>
        <button
          className={cls(
            classes.filterButton,
            selectedOption === "PRODUCATOR"
              ? classes.filterButtonSelected
              : null
          )}
          onClick={() => handleSelectOption("PRODUCATOR")}
        >
          PRODUCATOR
        </button>
        <button
          className={cls(
            classes.filterButton,
            selectedOption === "DEZVOLTATOR"
              ? classes.filterButtonSelected
              : null
          )}
          onClick={() => handleSelectOption("DEZVOLTATOR")}
        >
          DEZVOLTATOR
        </button>
      </div>
      <div className={classes.bodyWrapper}>
        <div className={classes.sectionWrapper}>
          <div className={classes.sectionTitle}>Cu imputernicire</div>
          <div className={classes.sectionBody}>
            {filteredCasesIP?.map((filteredCase, index) => (
              <CaseModal case={filteredCase} key={index} />
            ))}
          </div>
        </div>
        <div className={classes.sectionWrapper}>
          <div className={classes.sectionTitle}>Fara imputernicire</div>
          <div className={classes.sectionBody}>
            {filteredCases?.map((filteredCase, index) => (
              <CaseModal case={filteredCase} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseComponent;
