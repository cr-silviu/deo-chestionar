"use client"
import React, {useEffect, useRef, useState} from 'react'
import classes from './modal.module.scss'
import { createPortal } from "react-dom";
import {X} from 'lucide-react'


interface IModalWrapper extends React.ComponentPropsWithoutRef<"div">{
modalData:{
name:string,
number:number;
power: number
}
index: number;
}
const ModalWrapper = (props:IModalWrapper)=>{
    const ref = useRef<Element| null>();
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        ref.current = document.getElementById("myportal");
    },[])

    const openModalHandler=()=>{
        setOpen(true)
    }

    const handleModalClose=()=>{
        setOpen(false)
    }
    return <div className={classes.wrapper} >
        {ref.current && open ? 
        createPortal(<Modal handleModalClose={handleModalClose}/>, ref.current) : null}
        <div onClick={()=> openModalHandler()}>
            {props.children}
        </div>
        
        </div>
}


interface IModal extends React.ComponentPropsWithoutRef<"div">{
handleModalClose:()=>void;
}

const Modal = (props:IModal)=>{
    return <div className={classes.modalWrapper}>
            <div className={classes.backdrop} onClick={()=>props.handleModalClose()}/>
            <div className={classes.modal}>
                <div className={classes.modalTitle}>
                    <h3>Vedem</h3>
                    <X />
                </div>
            </div>
    </div>
}

export default ModalWrapper