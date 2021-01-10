import React from 'react';

const Pagination =({postsPerPage, totalPosts, handlePage})=>{
const pageNumbers =[];

for (let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i)
}



    return(
        <div className='page-number'>
             {pageNumbers.map(number=>(
                 <button key={number} onClick={()=>handlePage(number)}>
                     {number}
                     </button>
             ))}
        </div>
    )
}


export default Pagination;