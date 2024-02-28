export type MetadataType = {
  title: string;
  description?: string;
  details?: string;
};

export type UploadBlock = {
  id: string;
  type: "upload";
  metadata: MetadataType;
  status: "complete" | "current" | "skipped" | "upcoming";
  nextSteps?: FlowType;
};

export type IFileUploadBlockMetadata = MetadataType & {
  fileName?: string;
  fileId?: string;
};
export type FileUploadBlock = {
  id: string;
  type: "file";
  file: string;
  metadata: IFileUploadBlockMetadata;
  status: "complete" | "current" | "skipped" | "upcoming";
  nextSteps?: FlowType;
};

export type FormBlock = {
  id: string;
  type: "form";
  form: string;
  metadata: MetadataType;
  status: "complete" | "current" | "skipped" | "upcoming";
  nextSteps?: FlowType;
};

export type InvoiceBlock = {
  id: string;
  type: "invoice";
  metadata: MetadataType;
  status: "complete" | "current" | "skipped" | "upcoming";
  nextSteps?: FlowType;
};

export type ProcessBlock = {
  id: string;
  type: "process";
  metadata: MetadataType;
  status: "complete" | "current" | "skipped" | "upcoming";
  nextSteps?: FlowType;
};

export type BuildingBlocks =
  | ProcessBlock
  | InvoiceBlock
  | FormBlock
  | FileUploadBlock
  | UploadBlock;

export type FlowType = (
  | ProcessBlock
  | InvoiceBlock
  | FormBlock
  | FileUploadBlock
  | UploadBlock
)[];
