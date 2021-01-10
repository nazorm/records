import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Recordspage from './components/Recordspage';
function App() {
	const [patientRecordList, setPatientRecordList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(20);

	useEffect(() => {
const fetchRecords = async()=>{
  setLoading(true);
  const res = await axios.get('http://api.enye.tech/v1/challenge/records');
  setPatientRecordList(res.data.profiles)
  console.log(patientRecordList)
  setLoading(false);
}
fetchRecords()
  },[]);
  //get current posts
  const indexofLastPost = currentPage*postsPerPage;
  const indexofFirstPost = indexofLastPost- postsPerPage;
  const currentPosts = patientRecordList.slice(indexofFirstPost, indexofLastPost)
	return (
		<div className="App">
			<h1>Patient Record</h1>
			{loading ? <p>Loading...</p> : <Recordspage patientrecords={currentPosts} />}
		</div>
	);
}

export default App;
