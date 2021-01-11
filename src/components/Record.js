import React from 'react';
import '../App.css';
const Redcord = (props) => {
	return (
		<a href={props.url} target="_blank" rel="noreferrer" className="record">
			<h3 className="patient-name">
				{props.firstname} {props.lastname}
			</h3>
			<div className="details">
				<p className="detail-parent">
					Username: <span className="detail">{props.username} </span>
				</p>
				<p className="detail-parent">
					Gender: <span className="detail">{props.gender} </span>
				</p>
				<p className="detail-parent">
					Phone Number: <span className="detail">{props.phonenumber} </span>
				</p>
				<p className="detail-parent">
					Credit Card Type: <span className="detail">{props.creditcard} </span>
				</p>
				<p className="detail-parent">
					Payment Method: <span className="detail">{props.paymentmethod}</span>
				</p>
				<p className="detail-parent">
					Last Login: <span className="detail">{props.lastlogin} </span>
				</p>
			</div>
		</a>
	);
};

export default Redcord;
