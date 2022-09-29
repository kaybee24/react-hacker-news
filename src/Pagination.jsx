import React from 'react';

function Pagination({ page, setPage }) {
    let pages = [];
    const offset = page < 5 ? 5 - page : 0;
    // console.log(page);
    for (let i = page - 5; i <= page + 5; i++) {
        pages.push(i + offset);
        //console.log("offset");
    }
    return (pages.map((pn, index) => <button key={index}
        className="my-8 mx-2 py-1 px-3 border border-teal-500 rounded"
        onClick={() => setPage(pn)}>{pn}</button>));
}

export default Pagination;
