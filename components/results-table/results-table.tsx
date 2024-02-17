// @ts-nocheck
"use-client";
import React, { useState, useEffect } from "react";
import classes from "./results-table.module.scss";
import forms from "@/data/forms.json";
import annexes from "@/data/form_annexes.json";

import { ClipboardType, Download, FileUp } from "lucide-react";

interface DocumentProps {
  document: string;
  type: string;
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

    // const populatedDocumentsArray = documentsArray.map((document)=>({...document, annexes:item.annexes.map((annex)=> {... annexes[annex.annex], required:annex.required }) })))
    const populatedDocumentsArray = documentsArray?.map((document) => ({
      ...document,
      annexes: document?.annexes?.map(
        (annex: { annex: string; required: boolean }) => ({
          ...annexes[annex?.annex],
          required: annex?.required,
        })
      ),
    }));

    setDocumentsArray(populatedDocumentsArray);
  }, []);

  useEffect(() => {
    console.log(documentsArray);
  }, [documentsArray]);

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
                  <th className={classes.th}>Obligatoriu</th>
                </tr>
              </thead>
              <tbody className={classes.tBody}>
                {documentsArray?.map((item, index) => (
                  <>
                    <tr className={classes.tBodyRow} key={index}>
                      <td className={classes.td}>
                        <ClipboardType size={16} style={{ color: "#469771" }} />
                      </td>
                      <td className={classes.td}>
                        <p>
                          <span>{item.title}</span>
                        </p>
                      </td>
                      <td
                        className={classes.td}
                        style={{ width: "fit-content" }}
                      >
                        <p>
                          <span>Formular</span>
                        </p>
                      </td>
                      <td
                        className={classes.td}
                        style={{ width: "fit-content" }}
                      >
                        <p>
                          <span>{item.required ? "Da" : "Nu"}</span>
                        </p>
                      </td>
                    </tr>
                    {item.annexes.map((annex, index) => (
                      <tr className={classes.tBodyRow} key={index}>
                        <td className={classes.td}>
                          <FileUp size={16} style={{ color: "#ffa3a3" }} />
                        </td>
                        <td className={classes.td}>
                          <p>{annex.title ?? ""}</p>
                        </td>
                        <td className={classes.td}>
                          <p>Anexa</p>
                        </td>
                        <td className={classes.td}>
                          <p>{annex.required ? "Da" : "Nu"}</p>
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
