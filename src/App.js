import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Pagination from './components/Pagination';
import Recordspage from './components/Recordspage';
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
 
 
  return (
		<div className="App">
			<h1>Patient Record</h1>
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
