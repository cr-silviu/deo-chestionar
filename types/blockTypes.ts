
export type UploadBlock={
    id:string;
    type:"upload";
    title:string;
    description?:string;
    tag?:string;
    status:"complete"|"current"|"skipped"|"upcoming"
}

export type FormBlock={
    id:string;
    type:"form";
    title:string;
    description?:string;
    tag?:string;
    status:"complete"|"current"|"skipped"|"upcoming"
}

export type InvoiceBlock={
    id:string;
    type:"invoice";
    title:string;
    description?:string;
    tag?:string;
    status:"complete"|"current"|"skipped"|"upcoming"
}

export type ProcessBlock={
    id:string;
    type:"process";
    title:string;
    description?:string;
    tag?:string;
    status:"complete"|"current"|"skipped"|"upcoming";
    nextSteps?:NextStepsType
}

export type BuildingBlocks = ProcessBlock|InvoiceBlock|FormBlock|UploadBlock;

export type NextStepsType = (ProcessBlock|InvoiceBlock|FormBlock|UploadBlock)[]
