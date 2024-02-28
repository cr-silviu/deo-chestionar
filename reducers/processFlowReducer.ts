"use client";
import { FlowActionTypes } from "@/types/flowActionTypes";
import { FlowType, FileUploadBlock } from "@/types/blockTypes";

interface IAction {
  type: keyof FlowActionTypes;
  payload: any;
}

const processFlow: FlowType = [
  {
    id: "1",
    type: "process",
    status: "current",
    metadata: {
      title: "Depunere documente",
      description: "",
      details: "",
    },
    nextSteps: [
      {
        id: "11",
        type: "upload",
        status: "current",
        metadata: {
          title: "Incarcare documente",
          description: "",
          details: "",
        },
        nextSteps: [
          {
            id: "110",
            type: "form",
            form: "cerere_racordare",
            metadata: {
              title: "Cerere de racordare",
              description: "",
              details: "",
            },
            status: "upcoming",
          },
          {
            id: "111",
            type: "file",
            file: "act_de_identitate",
            status: "current",
            metadata: {
              title: "Act de identitate",
              description: "",
              details: "Buletin sau carte de identitate.",
            },
          },
          {
            id: "113",
            type: "file",
            file: "act_de_proprietate",
            status: "upcoming",
            metadata: {
              title: "Act de proprietate",
              description: "",
              details: "",
            },
          },
          {
            id: "114",
            type: "file",
            file: "certificat_urbanism",
            status: "current",
            metadata: {
              title: "Certificat de urbanism",
              description: "",
              details: "",
            },
          },
        ],
      },
      {
        id: "12",
        type: "process",
        status: "current",
        metadata: {
          title: "Verificare documente",
          description: "",
          details: "",
        },
      },
    ],
  },
  {
    id: "2",
    type: "process",
    status: "upcoming",
    metadata: {
      title: "Emitere ATR",
      description: "",
      details: "",
    },
    nextSteps: [
      {
        id: "211",
        type: "upload",
        status: "upcoming",
        metadata: {
          title: "Plata factura",
          description: "",
          details: "",
        },
      },
    ],
  },
];

const changeElementStatus = (
  tree: FlowType,
  id: string,
  status: any,
  fileName: string
) => {
  let elementsArray: FlowType = [];
  for (let node of tree) {
    if (node.nextSteps) {
      elementsArray = [
        ...elementsArray,
        {
          ...node,
          status: node.id === id ? status : node.status,
          ...(fileName && {
            metadata: { ...node.metadata, fileName: fileName },
          }),
          nextSteps: changeElementStatus(node?.nextSteps, id, status, fileName),
        } as FileUploadBlock,
      ];
    } else {
      elementsArray = [
        ...elementsArray,
        {
          ...node,
          status: node.id === id ? status : node.status,
        },
      ];
    }
  }

  return elementsArray;
};

const reducer = (flow = [] as FlowType, action: IAction) => {
  switch (action.type) {
    case "INITIATE_FLOW":
      return processFlow;

    case "UPLOAD_DOCUMENT":
      return changeElementStatus(
        flow,
        action.payload.id,
        action.payload.status,
        action.payload.fileName
      );

    default:
      return [];
  }
};

export default reducer;
