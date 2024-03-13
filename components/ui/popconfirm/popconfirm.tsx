"use client"
import React, {useState, useRef, useEffect} from "react";
import classes from './popconfirm.module.scss'
import { createPortal } from "react-dom";
import {X} from 'lucide-react';
import Button from "@/components/ui/button/button"

interface IPopconfirm extends React.ComponentPropsWithoutRef<"div">{
onConfirm:()=> void;
onCancel?:()=> void;
title:string;
description:string;
okText?:string;
cancelText?:string;
aspect?:"distructive"|"normal"
}
const Popconfirm =(props:IPopconfirm)=>{
    const {onConfirm, onCancel}=props
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    
    const ref = useRef<Element| null>();

    useEffect(()=>{
        ref.current = document.getElementById("myportal");
    },[])

    const openModalHandler=()=>{
        setModalOpen(true)
    }

    const handleModalClose=()=>{
        setModalOpen(false)
    }
    
    return <div className={classes.wrapper}>
          {ref.current && modalOpen ? 
        createPortal(<Modal {...props} handleModalClose={handleModalClose}/>, ref.current) : null}
        <div onClick={()=> openModalHandler()}>
            {props.children}        
        </div>
    </div>
}

interface IModal extends IPopconfirm{
    handleModalClose: ()=> void;
}
const Modal = (props:IModal)=>{
    const {title, description, okText, cancelText, onConfirm, onCancel, handleModalClose} = props
    
    const onConfirmHandler=()=>{
        onConfirm();
        handleModalClose()
    }
    return <div className={classes.modalWrapper}>
        <div className={classes.backdrop} onClick={()=> handleModalClose()}/>
        <div className={classes.modal}>
        <div className={classes.modalTitle}>
            <h3>{title}</h3>
            <X className={classes.closeIcon} 
            onClick={() => handleModalClose()}
            />
        </div>
        <div className={classes.body}>
            <h3>
                {description}
            </h3>
        </div>
        <div className={classes.footer}>
            <Button components="text" onClick={onCancel ? ()=>onCancel() : ()=> handleModalClose()}>
                <>{cancelText ?? "Anuleaza"}</>
            </Button>
            <Button timeout={1000} components="text" aspect="primary" onClick={()=> onConfirmHandler()}>
                <>{okText ?? "OK"}</>
            </Button>
        </div>
        </div>
    </div>
}

export default Popconfirm;