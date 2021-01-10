import React from 'react';
import '../App.css'
const Redcord = (props) => {
	return (
		<div>
			<h3>
				{props.firstname} {props.lastname}
			</h3>
			<div className="details">
				<span>Username: {props.username}</span>
				<span>Gender: {props.gender} </span>
                <span>Phone Number: {props.phonenumber}</span>
				<span>Payment Method: {props.paymentnethod}</span>
				<span>Last Login: {props.lastlogin}</span>
			</div>
		</div>
	);
};

export default Redcord;
