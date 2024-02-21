"use client";
import {useState}from "react"
import classes from './step-component.module.scss'
import React from 'react'

interface IStepComponent extends React.ComponentPropsWithoutRef<"div">{


    
}

const StepComponent=()=>{
   
    return <div className={classes.componentWrapper}>StepComponent</div>
}

export default StepComponent