"use client";
import React, { useState } from "react";
import classes from "./case-modal.module.scss";
import { FolderCheck, X, ChevronRight } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/hooks/redux-hooks";

import cases from "@/data/cases.json";

import ResultsTable from "@/components/results-table/results-table";
import Button from "@/components/button/button";

import { addUser } from "@/actions/user-actions";
type Props = {
  case: string;
};

interface Document {
  document: string;
  required: boolean;
}

interface Case {
  title: string;
  documents: Document[];
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const CaseModal = (props: Props) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  //@ts-ignore
  const currentCase: Case = cases[props?.case];
  const newCaseTitle = currentCase?.title
    ?.split(" ")
    ?.filter((word) => !["sunteti", "un"].includes(word.toLowerCase()))
    .join(" ");

  const closeModalHandler = () => {
    setOpen(false);
  };

  const handleProcessStart = () => {
    const uuid = uuidv4();

    dispatch(addUser({ id: uuid }));
    router.push(`/utilizator/consumator/${uuid}`);
  };

  return (
    <>
      {open ? (
        <div>
          <div className={classes.modal}>
            <button
              className={classes.backdrop}
              onClick={() => closeModalHandler()}
              onKeyDown={() => closeModalHandler()}
            />
            <div className={classes.modalCardWrapper}>
              <div className={classes.logoWrapper}>
                <img
                  loading="lazy"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F12%2FGreen-Energy-PNG-Photo.png&f=1&nofb=1&ipt=7e00a0126c98be7b62269bd252c6385acd0ab63d9a3c9b7d26ee5199cf757e28&ipo=images"
                  alt="logo"
                />
              </div>
              <div className={classes.rotatingBackgroundWrapper}>
                <div className={classes.rotatingBackground} />
              </div>
              <div className={classes.modalCard}>
                <div className={classes.modalTitle}>
                  <p className={classes.title}>
                    {capitalizeFirstLetter(newCaseTitle)}
                  </p>
                  <X
                    className={classes.closeIcon}
                    onClick={() => closeModalHandler()}
                    onKeyDown={() => closeModalHandler()}
                  />
                </div>
                <p className={classes.subtitle}></p>
                <div className={classes.results}>
                  <ResultsTable documents={currentCase?.documents} />
                </div>
                <div className={classes.footer}>
                  <Button
                    aspect="primary"
                    icon={true}
                    onClick={() => handleProcessStart()}
                  >
                    Incepe proces
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className={classes.buttonTitle} onClick={() => setOpen(true)}>
        <FolderCheck
          size={16}
          // style={
          //   currentCase?.documents?.length
          //     ? { color: "rgba(0,0,0,0.5)" }
          //     : { color: "transparent" }
          // }
        />

        <p>{capitalizeFirstLetter(newCaseTitle)}</p>
      </div>
      {/* <ResultsTable /> */}
    </>
  );
};

export default CaseModal;
