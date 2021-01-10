import React from 'react';

const Pagination =({postsPerPage, totalPosts})=>{
const pageNumbers =[];

for (let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i)
}



    return(
        <div>
             {pageNumbers.map(number=>(
                 <button>{number}</button>
             ))}
        </div>
    )
}


export default Pagination;