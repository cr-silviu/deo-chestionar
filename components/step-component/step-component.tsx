"use client";
import React,{useEffect, useState}from "react"
import classes from './step-component.module.scss'
import{NextStepsType}from "@/types/blockTypes"

import {CircleDot} from "lucide-react"



import { useAppSelector } from "@/hooks/redux-hooks";


interface IStepComponent extends React.ComponentPropsWithoutRef<"div">{


    
}

const StepComponent=()=>{
    const processFlow = useAppSelector((state)=> state.processFlow)

    
    console.log(processFlow)
   
    return <div className={classes.componentWrapper}>
        <PrimaryComponent title="Depunere documente" index={1}/>
        <SecondaryComponent nextSteps={[{ id:"1.1",
        type:"process",
        status:"current",
        title:"Incarcare documente",
        description:"",}]}/>
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
            <div className={classes.bubble}>2</div>
        </div>
    </div>
}

interface ISecondaryComponent extends React.ComponentPropsWithoutRef<"div">{
    nextSteps?: NextStepsType
}

const SecondaryComponent=(props:ISecondaryComponent)=>{
    return <div className={classes.secondaryComponentWrapper}>
        <div className={classes.secondaryComponentListWrapper}>
            <div className={classes.secundaryComponentListItem}>
            <CircleDot  size={10}/>
                <p>Care de identitate</p>
                </div>   
            </div>
         
        <div className={classes.secondaryComponentMarker}>
            <div className={classes.verticalLine}/>
        </div>
    </div>
}



export default StepComponent