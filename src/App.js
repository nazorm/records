import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Pagination from './components/Pagination';
import Recordspage from './components/Recordspage';
import Filter from './components/Filter';
function App() {
	const [patientRecordList, setPatientRecordList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(20);

	useEffect(() => {
const fetchRecords = async()=>{
  setLoading(true);
  const res = await axios.get('http://api.enye.tech/v1/challenge/records');
  setPatientRecordList(res.data.records.profiles)
  setLoading(false);
}

fetchRecords()
  },[]);


  
  //get current posts
  const indexofLastPost = currentPage*postsPerPage;
  const indexofFirstPost = indexofLastPost- postsPerPage;
  const currentPosts = patientRecordList.slice(indexofFirstPost, indexofLastPost)

  //paginate
  const handlePage=(number)=>{
	setCurrentPage(number)

  }
  //handle Resst
	const fetchResetData = async()=>{
		setLoading(true);
		const res = await axios.get('http://api.enye.tech/v1/challenge/records');
		setPatientRecordList(res.data.records.profiles)
		setLoading(false);
  }
  //handle gender filter
 const handleGenderChange=(e)=>{
	 const {value} = e.target;
	 const posts = patientRecordList.filter((d)=>{
		 return d.Gender === value
	 })
	 setPatientRecordList(posts)
	
 }
 //handle payment type filter
 const handlePaymentChange=(e)=>{
const {value} = e.target
const posts = patientRecordList.filter((d)=>{
	return d.PaymentMethod === value
})
setPatientRecordList(posts)
 }
 //handle credit card filter

  return (
		<div className="App">
			<div className='header'>
			<h1 className='file-name'>Patient Records</h1>
			<div className='filter-container'>
			<Filter
			handleGenderChange={handleGenderChange}
			handlePaymentChange={handlePaymentChange}

			/>
			<button className='reset-btn' onClick={()=>fetchResetData()}>Reset</button>
			</div> 
			</div>
			
			{loading ? <p>Loading...</p> : <Recordspage patientrecords={currentPosts} />}
			<Pagination
			 postsPerPage={postsPerPage} 
			 totalPosts={patientRecordList.length}
			 handlePage={handlePage}
			 />
		</div>
	);
}

export default App;
