import React from 'react';
import Record from './Record'
import '../App.css'

const Recordspage = ({patientrecords}) => {

    const records = patientrecords.map((d, index)=>{
return(
    <Record
    key ={index}
    firstName ={d.FirstName}
    lastName ={d.LastName}
    />
)
    })

	return (
		<div>
            {records}
		</div>
	)
};

export default Recordspage;
