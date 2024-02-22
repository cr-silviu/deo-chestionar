"use client";
import React,{useEffect, useState}from "react"
import classes from './step-component.module.scss'
import cls from 'classnames'
import{NextStepsType, BuildingBlocks}from "@/types/blockTypes"

import {CircleDot} from "lucide-react"



import { useAppSelector } from "@/hooks/redux-hooks";


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

const StepComponent=()=>{
    // const processFlow = useAppSelector((state)=> state.processFlow)
    const [selectedIndex, setSelectedIndex] = useState(0)

    
    console.log(selectedIndex)

    useEffect(()=>{
        console.log(selectedIndex)
    },[selectedIndex])

    const handleSelectedItem = (value:number)=>{
        console.log(value);
        setSelectedIndex(value);    
    }
   
    return <div className={classes.componentWrapper}>
        {
            processFlow?.map((step:any, stepIndex:number)=>(
            <div className={classes.step} key={stepIndex} onClick={()=>handleSelectedItem(stepIndex)}>
                <PrimaryComponent title={step?.title}  index={Number(stepIndex + 1)}/>
                <div className={cls(classes.secondaryComponentBody, selectedIndex === stepIndex ? classes.secondaryComponentBodyOpen : classes.secodraryComponentBodyClosed)}>
                    <SecondaryComponent type={step.type} nextSteps={step.nextSteps}/>
                      
                    <div className={classes.secondaryComponentMarker}>
                        <div className={classes.verticalLine}/>
                    </div>
                </div>
                <div className={classes.bottomDividerDiv}> 
                    <div className={classes.secondaryComponentMarker}>
                        <div className={classes.verticalLine}/>
                    </div>

                </div>
            </div>
            ))
        }
     
    </div>
}

interface IPrimaryComponent extends React.ComponentPropsWithoutRef<"div">{
    title:string;
    index:number;
}

const PrimaryComponent = (props:IPrimaryComponent) =>{
   const {title, index } =props
    return <div className={classes.primaryComponentWrapper}>
        <div className={classes.primaryComponentTitleWrapper}>{`${title}`}</div>
        <div className={classes.bubbleComponent}>
            <div className={classes.bubble}>{index}</div>
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