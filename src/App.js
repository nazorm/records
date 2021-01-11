import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from 'antd';
import './App.css';
import Pagination from './components/Pagination';
import Recordspage from './components/Recordspage';
import Filter from './components/Filter';
const { Search } = Input;
function App() {
	const [patientRecordList, setPatientRecordList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(20);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		const fetchRecords = async () => {
			setLoading(true);
			const res = await axios.get('https://api.enye.tech/v1/challenge/records');
			setPatientRecordList(res.data.records.profiles);
			setLoading(false);
		};

		fetchRecords();
	}, []);

	//get current posts
	const indexofLastPost = currentPage * postsPerPage;
	const indexofFirstPost = indexofLastPost - postsPerPage;
	const currentPosts = patientRecordList.slice(indexofFirstPost, indexofLastPost);

	//paginate
	const handlePage = (number) => {
		setCurrentPage(number);
	};
	//handle Resst
	const fetchResetData = async () => {
		setLoading(true);
		const res = await axios.get('https://api.enye.tech/v1/challenge/records');
		setPatientRecordList(res.data.records.profiles);
		setLoading(false);
	};
	//handle gender filter
	const handleGenderChange = (e) => {
		const value = `${e}`;
		const posts = patientRecordList.filter((d) => {
			return d.Gender === value;
		});
		setPatientRecordList(posts);
	};
	//handle payment type filter
	const handlePaymentChange = (e) => {
		const value = `${e}`;
		const posts = patientRecordList.filter((d) => {
			return d.PaymentMethod === value;
		});
		setPatientRecordList(posts);
	};

	//handle search filter
	const handleSearchChange = (e) => {
		const { value } = e.target;
		setSearchValue(value);
	};
	//handle search
	const handleSearchSubmit = () => {
		const user = patientRecordList.filter((users) => {
			return users.UserName.toLowerCase() === searchValue.toLowerCase();
		});
		setPatientRecordList(user);
	};
	return (
		<div className="App">
			<div className="header">
				<h1 className="file-name">Patient Records</h1>
				<div className="filter-container">
					<Search
						className="search"
						value={searchValue}
						placeholder="Search Username"
						onChange={handleSearchChange}
						onSearch={handleSearchSubmit}
						enterButton
					/>
					<Filter handleGenderChange={handleGenderChange} handlePaymentChange={handlePaymentChange} />
					<Button type="primary" className="reset-btn" onClick={() => fetchResetData()}>
						Reset
					</Button>
				</div>
			</div>

			<div className="note">
				<ul className="ul">
					<li className="li">Reset before a second filter</li>
				</ul>
			</div>

			{loading ? <p>Loading...</p> : <Recordspage patientrecords={currentPosts} />}
			<Pagination postsPerPage={postsPerPage} totalPosts={patientRecordList.length} handlePage={handlePage} />
		</div>
	);
}

export default App;
