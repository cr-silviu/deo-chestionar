"use client"
import React, {useEffect, useRef} from 'react'
import classes from './modal.module.scss'
import { createPortal } from "react-dom";


interface IModalWrapper extends React.ComponentPropsWithoutRef<"div">{

}
const ModalWrapper = (props:IModalWrapper)=>{
    const ref = useRef<Element| null>()

    useEffect(()=>{
        ref.current = document.getElementById("myportal");
    },[])


    return <div className={classes.wrapper}>
        {ref.current ? 
        createPortal(<Modal/>, ref.current) : null}
        {props.children}</div>
}


interface IModal extends React.ComponentPropsWithoutRef<"div">{

}

const Modal = (props:IModal)=>{
    return <div className={classes.modalWrapper}>
        
        <div className={classes.backdrop}/>
        <div className={classes.modal}>

        </div>
    </div>
}

export default ModalWrapper