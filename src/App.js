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
	const [filters, setFilters] = useState({ name: '', gender: '', payment: '' });

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

	//handle filters
	const handleFilter = (newFilters) => {
		let records = patientRecordList;
		if (newFilters.gender) {
			records = records.filter((record) => {
				return record.Gender === newFilters.gender;
			});
		}

		if (newFilters.payment) {
			records = records.filter((record) => {
				return record.PaymentMethod === newFilters.payment;
			});
		}

		if (newFilters.name) {
			records = records.filter((record) => {
				return `${record.FirstName} ${record.LastName} ${record.UserName}`
					.toLowerCase()
					.includes(newFilters.name.toLowerCase());
			});
		}

		setFilteredPost(records);
	};

	//handle gender filter
	const handleGenderChange = (e) => {
		const value = `${e}`;
		const newFilters = { ...filters, gender: value };
		setFilters(newFilters);
		handleFilter(newFilters);
	};

	//handle payment filter
	const handlePaymentChange = (e) => {
		const value = `${e}`;
		const newFilters = { ...filters, payment: value };
		setFilters(newFilters);
		handleFilter(newFilters);
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
			const newFilters = { ...filters, name: searchValue };
			setFilters(newFilters);
			handleFilter(newFilters);
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
					<Filter handleGenderChange={handleGenderChange} handlePaymentChange={handlePaymentChange} />
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
