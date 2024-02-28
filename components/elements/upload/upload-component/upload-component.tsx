"use client";
import React, { useState } from "react";
import classes from "./upload-component.module.scss";
import { FileUploadBlock } from "@/types/blockTypes";

import { toast } from "react-toastify";

import { UploadCloud, File, XCircle } from "lucide-react";
import Button from "@/components/ui/button/button";

import { useAppDispatch } from "@/hooks/redux-hooks";
import { changeDocumentStatus } from "@/redux-actions/flow-actions";

interface IUploadField extends FileUploadBlock {
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadField = (props: IUploadField) => {
  const { id, status: uploadStatus, metadata, setCardOpen, file } = props;
  const { title, description, details } = metadata;

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Omit<
    FileUploadBlock["metadata"],
    "title"
  > | null>({ fileName: "" });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    const fileName = e?.target?.files[0].name;
    setFormData({ fileName });
  };

  const handleClearDocumentField = () => {
    dispatch(
      changeDocumentStatus({
        id,
        status: "current",
        fileName: "",
      })
    );
    setFormData({ fileName: "" });
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!formData) return;
    dispatch(
      changeDocumentStatus({
        id,
        status: "complete",
        fileName: formData?.fileName,
      })
    );
    toast.success(`Document incarcat!`, {
      position: "bottom-left",
      autoClose: 2000,
    });
    setCardOpen(false);
  };

  return (
    <div className={classes.uploadWrapper}>
      <div className={classes.info}>
        <h3>{title}</h3>
        {formData ? (
          <h4>Document incarcat.</h4>
        ) : (
          <h4>Atasati documentul in campul de mai jos.</h4>
        )}
      </div>

      {formData?.fileName ? (
        <div className={classes.populatedInputWrapper}>
          <div className={classes.fileView}>
            <div className={classes.fileInfo}>
              <File className={classes.fileIcon} size={20} />
              <h3>{formData?.fileName ?? ""}</h3>
              <h3>{metadata?.fileName ?? ""}</h3>
            </div>
            <button onClick={() => handleClearDocumentField()}>
              <XCircle size={16} className={classes.deleteIcon} />
            </button>
          </div>
          {uploadStatus === "complete" ? null : (
            <div className={classes.formSubmitButtonWrapper}>
              <Button
                aspect="primary"
                components="text"
                timeout={2000}
                onClick={(e) => submitForm(e)}
              >
                <p> Salveaza</p>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <>
          <label htmlFor={`document:${id}`} className={classes.uploadLabel}>
            <UploadCloud size={32} className={classes.uploadIcon} />
            <h3>
              Apasati sau trageti si eliberati fisierul deasupra campului sau
              apasati pentru a selecta documentul.
            </h3>
            <h4>Dimensiune maxima: 5MB</h4>
          </label>
          <input
            id={`document:${id}`}
            onChange={(e) => handleFileUpload(e)}
            type="file"
            className={classes.input}
          />
        </>
      )}
    </div>
  );
};

interface IUploadComponent extends FileUploadBlock {
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const UploadComponent = (props: IUploadComponent) => {
  const { setCardOpen } = props;

  return (
    <div>
      <UploadField {...props} setCardOpen={setCardOpen} />
    </div>
  );
};

export default UploadComponent;
