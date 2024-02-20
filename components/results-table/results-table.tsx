// @ts-nocheck
"use-client";
import React, { useState, useEffect } from "react";
import classes from "./results-table.module.scss";
import forms from "@/data/forms.json";
import annexes from "@/data/form_annexes.json";

import { ClipboardType, FileUp } from "lucide-react";

interface DocumentProps {
  document: string;
}

interface Props {
  documents: DocumentProps[];
}

const ResultsTable = (props: Props) => {
  const [documentsArray, setDocumentsArray] = useState<any>([]);

  const myForms: {
    [key: string]: {
      title: string;
      annexes: any;
    };
  }[] = forms;

  const currentDocuments: { document: string }[] = props?.documents;

  useEffect(() => {
    if (!currentDocuments) return;
    const documentsArray: {
      [key: string]: { title: string; annexes: any };
    }[] = currentDocuments?.map((item) => ({
      ...myForms[item.document],
      required: item.required,
    }));

    let existingAnnexesArray = [];

    const populatedDocumentsArray = documentsArray
      ?.map((document) => ({
        ...document,
        annexes: document?.annexes?.map(
          (annex: { annex: string; required: boolean }) => ({
            ...annexes[annex?.annex],
            required: annex?.required,
          })
        ),
      }))
      ?.map((document) => ({
        ...document,
        annexes: document?.annexes?.map((annex) => {
          if (existingAnnexesArray?.includes(annex?.title)) {
            return {
              ...annex,
              exists: true,
            };
          } else {
            existingAnnexesArray?.push(annex?.title);
            return {
              ...annex,
              exists: false,
            };
          }
        }),
      }));

    setDocumentsArray(populatedDocumentsArray);
  }, []);

  return (
    <div className={classes.wrapper}>
      {!currentDocuments ? null : (
        <>
          <div className={classes.tableHeaderWrapper}>
            <p className={classes.tableHeaderTitle}>Documente</p>
          </div>
          <div className={classes.tableWrapper}>
            <table className={classes.table}>
              <thead className={classes.tHead}>
                <tr className={classes.tHeadRow}>
                  <th className={classes.th} style={{ width: "1rem" }} />
                  <th className={classes.th}>Denumire</th>
                  <th className={classes.th}>Tip</th>
                  <th className={classes.th} style={{ paddingRight: "0.5rem" }}>
                    Obligatoriu
                  </th>
                </tr>
              </thead>
              <tbody className={classes.tBody}>
                {documentsArray?.map((item, index) => (
                  <>
                    <tr className={classes.tBodyRow} key={index}>
                      <td className={classes.td}>
                        <ClipboardType
                          size={16}
                          style={
                            item?.required
                              ? { color: "#469771" }
                              : { color: "hsla(151, 36%, 43%,0.4)" }
                          }
                        />
                      </td>
                      <td
                        className={classes.td}
                        style={
                          item?.required
                            ? { color: "rgba(0,0,0,0.9)" }
                            : { color: "rgba(0,0,0,0.4)" }
                        }
                      >
                        <p>
                          <span>{item.title}</span>
                        </p>
                      </td>
                      <td
                        className={classes.td}
                        style={
                          ({ width: "fit-content" },
                          item?.required
                            ? { color: "rgba(0,0,0,0.9)" }
                            : { color: "rgba(0,0,0,0.4)" })
                        }
                      >
                        <p>
                          <span>Formular</span>
                        </p>
                      </td>
                      <td
                        className={classes.td}
                        style={
                          ({ width: "fit-content" },
                          item?.required
                            ? { color: "rgba(0,0,0,0.9)" }
                            : { color: "rgba(0,0,0,0.4)" })
                        }
                      >
                        <p>
                          <span>{item.required ? "Da" : "Nu"}</span>
                        </p>
                      </td>
                    </tr>
                    {item?.annexes?.map((annex, index) => (
                      <tr className={classes.tBodyRow} key={index}>
                        <td className={classes.td}>
                          <FileUp
                            size={16}
                            style={
                              annex?.required
                                ? { color: "#ffa3a3" }
                                : {
                                    color:
                                      "hsla(0, 100%, 81.96078431372548%,0.5)",
                                  }
                            }
                          />
                        </td>
                        <td
                          className={classes.td}
                          style={
                            ({ width: "fit-content" },
                            annex?.required
                              ? { color: "rgba(0,0,0,0.9)" }
                              : { color: "rgba(0,0,0,0.4)" })
                          }
                        >
                          <p
                            style={
                              annex?.exists
                                ? { textDecoration: "line-through" }
                                : {}
                            }
                          >
                            {annex.title ?? ""}
                          </p>
                        </td>
                        <td
                          className={classes.td}
                          style={
                            ({ width: "fit-content" },
                            annex?.required
                              ? { color: "rgba(0,0,0,0.9)" }
                              : { color: "rgba(0,0,0,0.4)" })
                          }
                        >
                          <p
                            style={
                              annex?.exists
                                ? { textDecoration: "line-through" }
                                : {}
                            }
                          >
                            Anexa
                          </p>
                        </td>
                        <td
                          className={classes.td}
                          style={
                            ({ width: "fit-content" },
                            annex?.required
                              ? { color: "rgba(0,0,0,0.9)" }
                              : { color: "rgba(0,0,0,0.4)" })
                          }
                        >
                          <p
                            style={
                              annex?.exists
                                ? { textDecoration: "line-through" }
                                : {}
                            }
                          >
                            {annex.required ? "Da" : "Nu"}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultsTable;
