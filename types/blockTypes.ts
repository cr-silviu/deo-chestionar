
export type UploadBlock={
    id:string;
    type:"upload";
    tag:string;
    status:"complete"|"current"|"skipped"|"upcoming"
}

export type FormBlock={
    id:string;
    type:"form";
    tag:string;
    status:"complete"|"current"|"skipped"|"upcoming"
}

export type InvoiceBlock={
    id:string;
    type:"invoice";
    tag:string;
    status:"complete"|"current"|"skipped"|"upcoming"
}

export type ProcessBlock={
    id:string;
    type:"process";
    tag:string;
    status:"complete"|"current"|"skipped"|"upcoming"
}
