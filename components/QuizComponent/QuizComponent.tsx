// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import classes from "./QuizComponent.module.scss";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import Questions from "@/data/questions.json";
import Cases from "@/data/cases.json";
const QuizComponent = () => {
  const [open, setOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsArray, setQuestionsArray] = useState([
    Questions["SITUATIE_IMPUTERNICIRE"],
  ]);
  const [stringArray, setStringArray] = useState<string[]>([]);
  const [finishState, setFinishState] = useState(false);

  const handleResetModal = () => {
    setStringArray([]);
    setFinishState(false);
    setQuestionsArray([Questions["SITUATIE_IMPUTERNICIRE"]]);
    setCurrentQuestionIndex(0);
  };

  const closeModalHandler = () => {
    handleResetModal();
    setOpen(false);
  };

  const handleSelectAnswer = (value: string, nextQuestion: any) => {
    setStringArray((prevState) => [...prevState, value]);
    if (!nextQuestion) {
      return setFinishState(true);
    }
    setQuestionsArray((prevState) => [...prevState, Questions[nextQuestion]]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleBack = () => {
    if (currentQuestionIndex === 1) return handleResetModal();

    setCurrentQuestionIndex((prevState) => prevState - 1);
    setStringArray((prevStringArray) =>
      prevStringArray.filter(
        (item, index) => index !== prevStringArray.length - 1
      )
    );
    setQuestionsArray((prevState) =>
      prevState.filter((item, index) => index !== prevState.length - 1)
    );
  };

  useEffect(() => {
    console.log(stringArray);
  }, [stringArray]);

  return (
    <>
      {open ? (
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
                  Chestionar analiza documente initiale
                </p>
                <X
                  className={classes.closeIcon}
                  onClick={() => closeModalHandler()}
                  onKeyDown={() => closeModalHandler()}
                />
              </div>
              <p className={classes.subtitle}>
                Selectati cazurile care vi se aplica pentru a vedea documentele
                initiale ce vor trebui depuse.
              </p>
              {finishState ? (
                <div className={classes.results}>
                  <p className={classes.resultsText}>{`${
                    Cases[stringArray.join("_")]?.title
                  }`}</p>
                </div>
              ) : (
                <div className={classes.questionsWrapper}>
                  {questionsArray.map((question, indexQ) => (
                    <div
                      className={classes.question}
                      style={{
                        display:
                          indexQ === currentQuestionIndex ? "block" : "none",
                      }}
                      key={indexQ}
                    >
                      <div className={classes.questionTitle}>
                        {question?.title}
                      </div>
                      <div className={classes.answersWrapperCases}>
                        {question?.answers?.map((answer, index) => (
                          <button
                            className={classes.answerCard}
                            key={index}
                            onClick={() =>
                              handleSelectAnswer(
                                answer.value,
                                answer.nextQuestion
                              )
                            }
                            onKeyDown={() =>
                              handleSelectAnswer(
                                answer.value,
                                answer.nextQuestion
                              )
                            }
                          >
                            <div className={classes.answerCardIcon}>
                              {/* <Image /> */}
                            </div>
                            <div className={classes.answerCardTitle}>
                              {answer.title}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {!currentQuestionIndex || finishState ? null : (
                <div className={classes.footer}>
                  <button
                    className={classes.backButton}
                    onClick={() => handleBack()}
                  >
                    <ChevronLeft />
                    Inapoi
                  </button>
                </div>
              )}
              {!finishState ? null : (
                <div
                  className={classes.footer}
                  style={{ alignItems: "center", justifyContent: "flex-end" }}
                >
                  <button className={classes.nextStepButton}>
                    Incepe proces
                    <ChevronRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
      <button className={classes.button} onClick={() => setOpen(true)}>
        <h2>Incepe chestionar</h2>
        <p></p>
      </button>
    </>
  );
};

export default QuizComponent;
