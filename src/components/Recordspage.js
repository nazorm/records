import React from 'react';
import Record from './Record'
import '../App.css'

const Recordspage = ({patientrecords}) => {

    const records = patientrecords.map((d, index)=>{
return(
    <Record
    key ={index}
    firstname ={d.FirstName}
    lastname ={d.LastName}
    username = {d.UserName}
    gender = {d.Gender}
    phonenumber ={d.PhoneNumber}
    paymentnethod={d.PaymentMethod}
    lastlogin = {d.LastLogin}
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
