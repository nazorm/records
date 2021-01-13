import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import './App.css';
import Paginationbtn from './components/Pagination';
import Recordspage from './components/Recordspage';
import Filter from './components/Filter';
const { Search } = Input;

function App() {
	const [patientRecordList, setPatientRecordList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(20);
	const [searchValue, setSearchValue] = useState('');
	const [filteredPost, setFilteredPost] = useState([]);

	useEffect(() => {
		const fetchRecords = async () => {
			setLoading(true);
			const res = await axios.get('https://api.enye.tech/v1/challenge/records');
			setPatientRecordList(res.data.records.profiles);
			setFilteredPost(res.data.records.profiles);
			setLoading(false);
		};

		fetchRecords();
	}, []);

	//handle reset
	const fetchResetRecords = async () => {
		setLoading(true);
		const res = await axios.get('https://api.enye.tech/v1/challenge/records');
		setPatientRecordList(res.data.records.profiles);
		setFilteredPost(res.data.records.profiles);
		setLoading(false);
	};
	//get current posts
	const indexofLastPost = currentPage * postsPerPage;
	const indexofFirstPost = indexofLastPost - postsPerPage;
	const currentPosts = filteredPost.slice(indexofFirstPost, indexofLastPost);

	//paginate
	const handlePage = (number) => {
		const value = `${number}`;
		setCurrentPage(value);
	};

	//handle select filter
	const handleSelectChange = (e) => {
		const value = `${e}`;
		const posts = patientRecordList.filter((d) => {
			return `${d.Gender} ${d.PaymentMethod}`.includes(value);
		});
		setFilteredPost(posts);
	};

	//get search value
	const handleSearchChange = (e) => {
		const { value } = e.target;
		setSearchValue(value);
	};

	//handle search filter
	const handleSearchSubmit = () => {
		if (searchValue === '') {
			alert('Enter Something to Search');
			return;
		} else {
			const user = patientRecordList.filter((users) => {
				return `${users.UserName} ${users.FirstName} ${users.LastName}`
					.toLowerCase()
					.includes(searchValue.toLowerCase());
			});
			setFilteredPost(user);
		}
	};
	return (
		<div className="App">
			<header className="header">
				<h1 className="file-name">Patient Records</h1>
				<div className="filter-container">
					<Search
						className="search"
						value={searchValue}
						placeholder="Search Username, First Name, Last"
						allowClear
						onChange={handleSearchChange}
						onSearch={handleSearchSubmit}
						enterButton
					/>
					<Filter handleSelectChange={handleSelectChange} />
					<Button
						type="primary"
						className="reset-btn"
						onClick={() => {
							fetchResetRecords();
						}}
					>
						Reset
					</Button>
				</div>
			</header>

			{loading ? <p>Loading...</p> : <Recordspage patientrecords={currentPosts} />}
			<Paginationbtn postsPerPage={postsPerPage} totalPosts={patientRecordList.length} handlePage={handlePage} />
		</div>
	);
}

export default App;
