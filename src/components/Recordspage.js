import React from 'react';
import Record from './Record';
import '../App.css';

const Recordspage = ({ patientrecords }) => {
	const records = patientrecords.map((d, index) => {
		return (
			<Record
				key={index}
				url={d.URL}
				firstname={d.FirstName}
				lastname={d.LastName}
				username={d.UserName}
				gender={d.Gender}
				creditcard={d.CreditCardType}
				phonenumber={d.PhoneNumber}
				paymentmethod={d.PaymentMethod}
				lastlogin={d.LastLogin}
			/>
		);
	});

	return <div className="record-container">{records}</div>;
};

export default Recordspage;
