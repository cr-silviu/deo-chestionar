"use client"
import React, {useState, useEffect} from 'react'
import classes from './other-household-dependencies.module.scss'
import {Pencil, Trash2} from 'lucide-react'


interface IOtherHouseholdDependencties{

}

const OtherHouseholdDependencties = (props:IOtherHouseholdDependencties)=>{
    const [dependencies, setDependencies] = useState([])
    const [piTotal, setPiTotal] = useState()
    
    useEffect(()=>{

    },[])

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
                        <th>
                            Putere 
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Bucatarie
                        </td> 
                        <td>
                            2
                        </td>
                         <td>
                            2 kW
                        </td>
                        <td className={classes.tdActions}>
                        <div className={classes.actionsWrapper}>
                        <Pencil size={16} className={classes.editIcon}/>
                        <Trash2 size={16} className={classes.deleteIcon}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bucatarie
                        </td> 
                        <td>
                            2
                        </td>
                         <td>
                            2 kW
                        </td>
                        <td className={classes.tdActions}>
                        <div className={classes.actionsWrapper}>
                        <Pencil size={16} className={classes.editIcon}/>
                        <Trash2 size={16} className={classes.deleteIcon}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default OtherHouseholdDependencties