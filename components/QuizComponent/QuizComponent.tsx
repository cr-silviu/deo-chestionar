// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import classes from "./QuizComponent.module.scss";

import Questions from "@/data/questions.json";
import Cases from "@/data/cases.json";
import Image from "next/image";
const QuizComponent = () => {
  const [open, setOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsArray, setQuestionsArray] = useState([
    Questions["SITUATIE_IMPUTERNICIRE"],
  ]);
  const [stringArray, setStringArray] = useState<string[]>([]);
  const [finishState, setFinishState] = useState(false);

  const closeModalHandler = () => {
    setStringArray([]);
    setFinishState(false);
    setQuestionsArray([Questions["SITUATIE_IMPUTERNICIRE"]]);
    setCurrentQuestionIndex(0);
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
          <div className={classes.modalCard}>
            <div className={classes.modalTitle}>
              <p className={classes.title}>Chestionar analiza tip utilizator</p>
              <button
                className={classes.closeIcon}
                onClick={() => closeModalHandler()}
                onKeyDown={() => closeModalHandler()}
              >
                X
              </button>
            </div>
            {finishState ? (
              <div className={classes.results}>
                {/* <p className={classes.resultsTitle}>Sunteti:</p> */}
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
                            <Image
                              className={classes.image}
                              height={100}
                              width={200}
                              src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                              alt="placeholder"
                            />
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
