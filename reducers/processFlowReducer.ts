import {FlowActionTypes} from "@/types/flowActionTypes"
import{UploadBlock,FormBlock,InvoiceBlock,ProcessBlock}from "@/types/blockTypes"

interface IAction{
    type:keyof FlowActionTypes,
    payload:any
}

type IFLOW =(UploadBlock|FormBlock|InvoiceBlock|ProcessBlock)[]

const initialFlow:IFLOW=[
  {
    id:"1",
    type:"process",
    status:"current",
    title:"Depunere documente",
    description:"...",
    nextSteps:[{
        id:"1.1",
        type:"process",
        status:"current",
        title:"Incarcare documente",
        description:"",
    },
    {
        id:"1.2",
        type:"process",
        status:"current",
        title:"Verificare documente din partea DEO",
        description:"",
    }]
  }
]


const reducer = (flow = [] as IFLOW, action: IAction) => {
  switch (action.type) {
    case "INITIATE_FLOW":
      return [...flow, initialFlow];
    default:
      return [];
  }
};

export default reducer;