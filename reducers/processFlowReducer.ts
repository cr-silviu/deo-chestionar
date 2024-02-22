import {FlowActionTypes} from "@/types/flowActionTypes"
import{BuildingBlocks}from "@/types/blockTypes"

interface IAction{
    type:keyof FlowActionTypes,
    payload:any
}



const initialFlow=[
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


const reducer = (flow = [] as BuildingBlocks[], action: IAction) => {
  switch (action.type) {
    case "INITIATE_FLOW":
      return  initialFlow;
    default:
      return [];
  }
};

export default reducer;