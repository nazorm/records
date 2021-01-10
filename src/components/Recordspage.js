import React, {useState} from 'react'
import Record from './Record'

const Recordspage=(props)=>{
const [patientrecords] = useState(props)


    const records = patientrecords.map((d)=>{
        return(
            <Record
            firstName = {d.FirstName}
            
            
            />
        )
    })
    return(
        <div>
            <h1>records</h1>
            {records}
        </div>
    )
}


export default Recordspage