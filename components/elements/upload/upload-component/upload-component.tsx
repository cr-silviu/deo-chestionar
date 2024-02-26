import React, { useState, useEffect } from "react";
import classes from "./upload-component.module.scss";

import {
  UploadCloud,
  File,
  XCircle,
  BadgeCheck,
  BadgeMinus,
} from "lucide-react";
import Button from "@/components/button/button";

import { useAppDispatch } from "@/hooks/redux-hooks";
import { changeDocumentStatus } from "@/actions/flow-actions";

const UploadField = ({
  title,
  id,
  status,
  metadata,
  setCardOpen,
}: {
  id: string;
  title: string;
  status: string;
  metadata: any;
  setCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<any>();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;
    setFormData(e?.target?.files[0]);
  };

  const handleClearDocumentField = () => {
    dispatch(
      changeDocumentStatus({
        id,
        status: "current",
        fileName: "",
      })
    );
    setFormData(null);
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(
      changeDocumentStatus({
        id,
        status: "complete",
        fileName: formData?.name,
      })
    );
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

      {formData ? (
        <div className={classes.populatedInputWrapper}>
          <div className={classes.fileView}>
            <div className={classes.fileInfo}>
              <File className={classes.fileIcon} size={20} />
              <h3>{formData?.name ?? ""}</h3>
              <h3>{metadata?.fileName ?? ""}</h3>
            </div>
            <div onClick={() => handleClearDocumentField()}>
              <XCircle size={16} className={classes.deleteIcon} />
            </div>
          </div>
          {status === "complete" ? null : (
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
          <label htmlFor="document" className={classes.uploadLabel}>
            <UploadCloud size={32} className={classes.uploadIcon} />
            <h3>
              Apasati sau trageti si eliberati fisierul deasupra campului sau
              apasati pentru a selecta documentul.
            </h3>
            <h4>Dimensiune maxima: 5MB</h4>
          </label>
          <input
            id="document"
            onChange={(e) => handleFileUpload(e)}
            type="file"
            className={classes.input}
          />
        </>
      )}
    </div>
  );
};

interface IUploadComponent {
  metadata: any;
  id: string;
  status: string;
}

const UploadComponent = (props: IUploadComponent) => {
  const [cardOpen, setCardOpen] = useState(false);
  const { metadata, id, status } = props;
  const { title }: { title: string } = metadata;

  return (
    <div className={classes.componentWrapper}>
      <div
        className={classes.titleWrapper}
        onClick={() => setCardOpen(!cardOpen)}
      >
        <h3>{title}</h3>
        {/* {status === "complete" && !cardOpen ? <BadgeCheck /> : <></>}
        {status === "upcoming" && !cardOpen ? <BadgeMinus /> : <></>} */}
      </div>
      {!cardOpen ? (
        <UploadField
          title={title}
          status={status}
          id={id}
          metadata={metadata}
          setCardOpen={setCardOpen}
        />
      ) : null}
    </div>
  );
};

export default UploadComponent;
