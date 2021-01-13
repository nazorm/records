import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
const Filter = (props) => {
	return (
		<div className="select-container">
			<label className="label">
				<Select defaultValue="--Gender--" style={{ width: 130 }} onChange={props.handleSelectChange}>
					<Option value="Female">Female</Option>
					<Option value="Male">Male</Option>
					<Option value="Prefer to skip">Prefer to Skip</Option>
				</Select>
			</label>
			<label className="label">
				<Select defaultValue="--Payment Method--" style={{ width: 150 }} onChange={props.handleSelectChange}>
					<Option value="paypal"> PayPal</Option>
					<Option value="check">Cheque</Option>
					<Option value="money order">Money Order</Option>
					<Option value="cc">CC</Option>
				</Select>
			</label>
		</div>
	);
};

export default Filter;
