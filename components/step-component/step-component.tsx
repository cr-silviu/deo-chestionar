"use client";
import React,{useEffect, useState}from "react"
import classes from './step-component.module.scss'
import cls from 'classnames'
import{NextStepsType}from "@/types/blockTypes"

import {CircleDot, Check} from "lucide-react"



import { useAppSelector } from "@/hooks/redux-hooks";
import { toast } from "react-toastify";


interface IStepComponent extends React.ComponentPropsWithoutRef<"div">{


    
}

const processFlow=[
    {
        id:"1",
        type:"process",
        status:"current",
        title:"Informare",
        description:"...",
        nextSteps:[{
            id:"1.1",
            type:"process",
            status:"current",
            title:"FAQ",
            description:"",
            
        }]
      },
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
            nextSteps:[{
                id:"1.1",
                type:"process",
                status:"current",
                title:"Carte identitate",
                description:"",
            },
            {
                id:"1.2",
                type:"process",
                status:"current",
                title:"Cerere racordare",
                description:"",
            }]
        },
        {
            id:"1.2",
            type:"process",
            status:"current",
            title:"Verificare documente din partea DEO",
            description:"",
        }]
      }  ,    {
        id:"1",
        type:"process",
        status:"current",
        title:"Emitere ATR",
        description:"...",
        nextSteps:[{
            id:"1.1",
            type:"process",
            status:"current",
            title:"Plata factura",
            description:"",
          
        },
        {
            id:"1.2",
            type:"process",
            status:"current",
            title:"Verificare documente din partea DEO",
            description:"",
        }]
      }  ,    {
        id:"1",
        type:"process",
        status:"current",
        title:"Contract racordare",
        description:"...",
        nextSteps:[{
            id:"1.1",
            type:"process",
            status:"current",
            title:"Cerere contract",
            description:"",
           
        }]
      }  ,    {
        id:"1",
        type:"process",
        status:"current",
        title:"Certificat de racordare",
        description:"...",
      
      } ,    {
        id:"1",
        type:"process",
        status:"current",
        title:"Executie lucrare",
        description:"...",
      
      } ,    {
        id:"1",
        type:"process",
        status:"current",
        title:"Punere in functiune",
        description:"...",
      
      }  

]

function useNodeCounter (data:any):number{
    let countedNodes = 0;

    for(let dataPoints of data){
        countedNodes = countedNodes + 1;
        if(dataPoints.nextSteps){
            countedNodes += useNodeCounter(dataPoints.nextSteps)
        }
    }

return countedNodes
}

const StepComponent=()=>{
    // const processFlow = useAppSelector((state)=> state.processFlow)
    const [selectedIndex, setSelectedIndex] = useState(1);

    

    

    const handleSelectedItem = (value:number)=>{
        if(value === selectedIndex) return;
        toast.info(`Changed state opened for idx: ${value+1}`,{
            position:"top-right",
            autoClose:500,
            theme:"dark",
        })
        setSelectedIndex(value);    
    }

    const handleStatus=(stepIndex:number)=>{
        switch(true){
            case(selectedIndex === stepIndex):
                return "current"
            case(stepIndex < selectedIndex):
                return "complete"
            case(stepIndex > selectedIndex):
                return "upcoming"
            default:
                return "skipped"
        }
    }
   
    return <div className={classes.componentWrapper}>
        {
            processFlow?.map((step:any, stepIndex:number)=>{
            const isLastChild = stepIndex === processFlow?.length - 1
            
           return <div className={cls(classes.step,
            handleStatus(stepIndex) === "current" ? classes.stickyStep : null
           )} key={stepIndex}  onClick={()=>handleSelectedItem(stepIndex)} >
                <PrimaryComponent status={handleStatus(stepIndex)} title={step?.title}  index={Number(stepIndex + 1)}  />

                <div className={cls(classes.secondaryComponentBody, selectedIndex === stepIndex ? classes.secondaryComponentBodyOpen : null)} 
                //@ts-ignore
                style={{"--max-height":`${20*useNodeCounter([processFlow[stepIndex]])}px`}}>
                    <SecondaryComponent type={step.type} nextSteps={step.nextSteps}/>
                      
                    <div className={classes.secondaryComponentMarker} style={isLastChild ? {visibility:"hidden"} : {}}>
                        <div className={classes.verticalLine}/>
                    </div>
                </div>
                <div className={classes.bottomDividerDiv} style={isLastChild ? {visibility:"hidden"} : {}}> 
                    <div className={classes.secondaryComponentMarker}>
                        <div className={classes.verticalLine}/>
                    </div>

                </div>
            </div>
})
        }
     
    </div>
}

interface IPrimaryComponent extends React.ComponentPropsWithoutRef<"div">{
    title:string;
    index:number;
    status:"complete"|"current"|"skipped"|"upcoming";
}

const PrimaryComponent = (props:IPrimaryComponent) =>{
   const {title, index, status } =props
    return <div className={cls(classes.primaryComponentWrapper)}>
        <div className={cls(classes.primaryComponentTitleWrapper,
            status === "complete" ? classes.titleComplete: null,
            status === "current" ? classes.titleCurrent: null,
            status === "skipped" ? classes.titleSkipped: null,
            status === "upcoming" ? classes.titleUpcoming: null,
            )}>{`${title}`}</div>
        <div className={classes.bubbleComponent}>
         
          
                {status === "complete" ?
                <div className={cls(classes.bubble, classes.bubbleComplete)}>  
                    <Check size={12}/>
                </div>
                :
                null
                }
                {status === "current" ?
                <div className={classes.currentBubbleWrapper}>
                    <div className={classes.pulsatingBubble}/>
                    <div className={cls(classes.bubble, classes.bubbleCurrent)}>  
                        {index}
                    </div>
                </div>
                :
                null
                }
                  {status === "upcoming" ?
                <div className={cls(classes.bubble, classes.bubbleUpcoming)}>  
                    {index}
                </div>
                :
                null
                }
        </div>
    </div>
}

interface ISecondaryComponent extends React.ComponentPropsWithoutRef<"div">{
    nextSteps?: NextStepsType;
    type:"process"|"invoice"|"upload"|"form"
}

const SecondaryComponent=(props:ISecondaryComponent)=>{
    const nextSteps = props.nextSteps ? props.nextSteps:[]

    
    return <div className={classes.secondaryComponentWrapper}>
        {nextSteps?.map((step:any, index)=>(
            <div className={classes.secondaryComponentListWrapper} key={index}>
            <div className={classes.secundaryComponentListItem}>
                <CircleDot  size={10}/>
                <p>{step.title}</p>
            </div>   
            <SecondaryComponent type={step.type} nextSteps={step?.nextSteps} />
        </div>
        ))}
    </div>
}



export default StepComponent