"use client"
import React, {useEffect, useRef, useState} from 'react'
import classes from './modal.module.scss'
import { createPortal } from "react-dom";
import {X} from 'lucide-react'
import {Field, FieldSet } from "@/components/ui/field/field"
import Input from "@/components/ui/input/input"
import Button from "@/components/ui/button/button"
import { useForm, SubmitHandler, Controller } from "react-hook-form";


interface IModalData{
name:string,
quantity?:number;
power: number
index?:number       
}

interface IModalWrapper extends React.ComponentPropsWithoutRef<"div">{
modalData?:IModalData;
onConfirm:(data: IModalData)=>void;
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
        createPortal(<Modal modalData={props?.modalData} handleModalClose={handleModalClose} onConfirm={props.onConfirm}/>, ref.current) : null}
        <div onClick={()=> openModalHandler()}>
            {props.children}
        </div>
        
        </div>
}


interface IModal extends React.ComponentPropsWithoutRef<"div">{
handleModalClose:()=>void;
onConfirm:(data: IModalData)=>void;
modalData?: IModalData;
}

const Modal = (props:IModal)=>{
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        control,
        formState: { errors },
      } = useForm({defaultValues:{
      name:"",
      power: 0
      }})

      const {modalData} = props
      const{name, quantity, power} = modalData ?? {}
  
    useEffect(()=>{
        if(!props.modalData) return;
        setValue("name", name!);
        setValue("power", power!);
    },[])

    const handleConfirm=()=>{

        if(props.modalData){
            props.onConfirm({...props?.modalData, ...getValues(), power:Number(getValues("power"))})
        }
        if(!props.modalData){
            props.onConfirm({...getValues(), power:Number(getValues("power"))})
        }
      props.handleModalClose()
    }

    useEffect(()=>{
    console.log(errors) 
    },[errors])

    return <div className={classes.modalWrapper}>
            <div className={classes.backdrop} onClick={()=>props.handleModalClose()}/>
            <form className={classes.modal} onSubmit={handleSubmit(handleConfirm)}>
                <div className={classes.modalTitle}>
                    <h3>{props?.modalData ? "Editeaza dependinta" : "Adauga dependinta"}</h3>
                    <X className={classes.closeIcon} 
                    onClick={() => props.handleModalClose()}/>
                </div>

                <div className={classes.bodyWrapper}>
                <FieldSet>
                <Field label="Denumire" > 
                    <Input  name="name" 
                    required
                    control={control} />
                </Field>
                <Field label="Putere per unitate"> 
                    <Input  unit="kW:" name='power' required control={control} {... {valueAsNumber: true}}/>
                </Field>
                </FieldSet>
                </div>

                <div className={classes.footerWrapper}>
                <Button
                    aspect="secondary"
                    components="text"
                    type="button"
                    onClick={() => props.handleModalClose()}
                  >
                    Anuleaza
                  </Button>
                <Button
                    aspect="primary"
                    components="text"
                    type="submit"
                  >
                    {props?.modalData ? "Salveaza" : "Adauga"}
                  </Button>

                 
                </div>

            </form>
    </div>
}

export default ModalWrapper