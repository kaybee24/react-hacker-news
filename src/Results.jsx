import React from 'react';

const Results = ({ items }) => {
    return (
        <div className="container full-width text-left">
            {items.map((item) => (
                <div key={item.objectID}>
                    <h3 className="pt-4 font-semibold">{item.title}</h3>
                    <p className="border-b pb-4 pt-1 text-slate-500 text-sm"><a href="#">{item.url}</a></p>
                </div>
            ))
            }
        </div >
    )
}

export default Results;