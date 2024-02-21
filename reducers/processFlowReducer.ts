import {FlowActionTypes} from "@/types/flowActionTypes"
import{UploadBlock,FormBlock,InvoiceBlock,ProcessBlock}from "@/types/blockTypes"

interface IAction{
    type:keyof FlowActionTypes,
    payload:any
}

const inifialFlow:(UploadBlock|FormBlock|InvoiceBlock|ProcessBlock)[]=[
{
    id:"1",
    type:"process",
    status:"current",
    title:"Depunere documente",
    description:"...",
}
]


const reducer = (flow = [], action: IAction) => {
  switch (action.type) {
    case "INITIATE_FLOW":
      console.log(action.payload);
      return flow;
    default:
      return [];
  }
};

export default reducer;