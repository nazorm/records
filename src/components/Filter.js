
import React from 'react'

const Filter =(props)=>{
return(
<label >
				Filter by: 
				<select onChange={props.handleGenderChange} className='gender'>
				    <option>--Gender--</option>
					<option
					name = 'Gender'
					value ='Female'
					>Female</option>
				<option
					name = 'Gender'
					value ='Male'
					>Male</option>
					<option
					name = 'Gender'
					value ='Prefer to skip'
					>Prefer to Skip</option>
				</select>

				<select onChange={props.handlePaymentChange} >
				    <option>--Payment Method--</option>
					<option
					name = 'PaymentMethod'
					value ='paypal'
					>PayPal</option>
				<option
					name = 'PaymentMethod'
					value ='check'
					>Cheque</option>
					<option
					name = 'PaymentMethod'
					value ='money order'
					>Money Order</option>
					<option
					name = 'PaymentMethod'
					value ='cc'
					>CC</option>
				</select>
			</label> 
  
  )
}

export default Filter