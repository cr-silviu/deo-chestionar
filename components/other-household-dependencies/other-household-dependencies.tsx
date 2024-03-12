"use client"
import React, {useState, useEffect} from 'react'
import classes from './other-household-dependencies.module.scss'
import {Pencil, Trash2,Minus, Plus} from 'lucide-react'
import Modal from "@/components/other-household-dependencies/modal/modal"


interface IOtherHouseholdDependencties{

}

interface IDependency{
    name:string,
    quantity:number;
    power: number       
}
    

const OtherHouseholdDependencties = (props:IOtherHouseholdDependencties)=>{
    const [data, setData] = useState<IDependency[]>([{
        name:"Bucatarie",
        quantity:1,
        power:10
    },
    {
        name:"Baie",
        quantity:1,
        power:10
    },{
        name:"Dormitor",
        quantity:1,
        power:10
    }])
    const [piTotal, setPiTotal] = useState()

    useEffect(()=>{

    },[])

    const increaseQuantity=(index:number, currentQuantity: number)=>{
        setData((prevData)=> prevData.map((item, prevDataIndex)=> index === prevDataIndex ? {...item, quantity: item.quantity + 1} : item ))
    }

    const lowerQuantity = (index:number, currentQuantity:number)=>{
        if(currentQuantity === 1) return;
        setData((prevData)=> prevData.map((item, prevDataIndex)=> index === prevDataIndex ? {...item, quantity: item.quantity - 1} : item ))
    }

    const handleDependencyEdit=(data:{
        name:string,
        quantity?:number,
        power: number,
        index?: number      
    })=>{
        if(!data?.quantity) return;
        const dataIndex = data.index;
        delete data["index"]
        if(data.quantity){
        setData((prevData)=> prevData.map((item, index)=> index === dataIndex ? data as IDependency : item))
        }
    }

    return <div className={classes.componentWrapper}>
        <div className={classes.titleWrapper}>
            {/* <p>Alte dependinte</p> */}
        </div>
        <div className={classes.bodyWrapper}>
            <table>
                <thead>
                    <tr>
                        <th>
                            Denumire 
                        </th>
                        <th>
                            Numar
                        </th>
                        <th className={classes.powerCell}>
                            Putere 
                        </th>
                        <th className={classes.totalPowerCell}>
                            Putere totala 
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {data?.map((item, index)=>(
                    <tr key={index}>
                        <td>
                            {item?.name}
                        </td> 
                        <td>
                            <div className={classes.quantityWrapper}>
                            <Minus onClick={()=>lowerQuantity(index, item?.quantity)} size={16} className={classes.minusIcon}/>
                            {item?.quantity}
                            <Plus onClick={()=> increaseQuantity(index, item?.quantity)} size={16}className={classes.plusIcon}/>
                            </div>
                        </td>
                         <td className={classes.powerCell}>
                           {`${item?.power} kW`}
                        </td>
                        <td className={classes.totalPowerCell}>
                            {`${Number(item.quantity * item.power)} kw`}
                        </td>
                        <td className={classes.tdActions}>
                        <div className={classes.actionsWrapper}>
                        <Modal modalData={{...item, index: index}} 
                        onConfirm={handleDependencyEdit}
                        >
                            <Pencil size={14} className={classes.editIcon}/>
                        </Modal>
                        <Trash2 size={14} className={classes.deleteIcon}/>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        
                        <th >
                        <Modal 
                        onConfirm={handleDependencyEdit}
                        >
                            <div className={classes.addButtonTd}>
                            <div className={classes.addButton}>
                            <Plus size={14} className={classes.addIcon}/>
                            <h3>Adauga</h3>
                            </div>
                            </div>
                             </Modal>
                        </th>
                        <th></th>
                        <th className={classes.totalTitleCell}>Total:</th>
                        <th className={classes.totalValueCell}>{`${data?.reduce((data, item)=>(item.power * item.quantity) + data,0)} kW`}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
}

export default OtherHouseholdDependencties