"use client";
import { FlowActionTypes } from "@/types/flowActionTypes";
import { BuildingBlocks } from "@/types/blockTypes";

interface IAction {
  type: keyof FlowActionTypes;
  payload: any;
}

const processFlow = [
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
          // {
          //   id: "112",
          //   type: "form",
          //   form_name: "form_one",
          //   status: "awaiting_upload",
          //   title: "Cerere racordare",
          //   description: "",
          // },
          {
            id: "111",
            type: "file",
            metadata: {
              title: "Act de identitate",
              description: "",
              details: "Buletin sau carte de identitate.",
            },
          },
          {
            id: "113",
            type: "file",
            metadata: {
              title: "Act de proprietate",
              description: "",
              details: "",
            },
          },
          {
            id: "114",
            type: "conditional_file",
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
        type: "document_check",
        metadata: {
          title: "Verificare documente",
          description: "",
          details: "",
        },
      },
    ],
  },
  {
    id: "1",
    type: "process",
    status: "upcoming",
    metadata: {
      title: "Certificat",
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
          // {
          //   id: "112",
          //   type: "form",
          //   form_name: "form_one",
          //   status: "awaiting_upload",
          //   title: "Cerere racordare",
          //   description: "",
          // },
          {
            id: "111",
            type: "file",
            status: "awaiting_upload",
            metadata: {
              title: "Act de identitate",
              description: "",
              details: "Buletin sau carte de identitate.",
            },
          },
          {
            id: "113",
            type: "file",
            status: "awaiting_upload",
            metadata: {
              title: "Actul de proprietate",
              description: "",
              details: "",
            },
          },
          {
            id: "114",
            type: "file",
            status: "awaiting_upload",
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
        type: "document_check",
        status: "upcoming",
        metadata: {
          title: "Verificare documente",
          description: "",
          details: "",
        },
      },
    ],
  },
];

const changeElementStatus: any = (
  tree: any[],
  id: string,
  status: string,
  fileName?: string
) => {
  let elementsArray: any = [];
  for (let node of tree) {
    if (node.nextSteps) {
      elementsArray = [
        ...elementsArray,
        {
          ...node,
          status: node.id === id ? status : node.status,
          nextSteps: changeElementStatus(node?.nextSteps, id, status, fileName),
        },
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

const reducer = (flow = [] as BuildingBlocks[], action: IAction) => {
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
