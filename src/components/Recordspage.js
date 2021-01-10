import React from 'react';


const Recordspage = ({patientrecords}) => {




	return (
		<div>
			{patientrecords.map( d =>(
                <div className='record'>
                <h1>{d.FirstName}</h1>
                <h1>{d.LastName}</h1>
                <h1>{d.Gender}</h1>
                </div>
            ))}
		</div>
	);
};

export default Recordspage;
