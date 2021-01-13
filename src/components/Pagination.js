import React from 'react';

import { Pagination } from 'antd';

import '../App.css';

const Paginationbtn = ({ postsPerPage, totalPosts, handlePage }) => {
	const pageNumbers = [];

	const displayPage = Math.ceil(totalPosts / postsPerPage);
	pageNumbers.push(displayPage);

	return (
		<div className="page-number">
			{pageNumbers.map((number) => (
				<Pagination key={number} 
				pageSize={20}
				total={totalPosts} 
				showSizeChanger={false}
				onChange={handlePage} />
			))}
		</div>
	);
};

export default Paginationbtn;
