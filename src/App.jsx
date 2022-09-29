import React, { useState, useEffect } from 'react';
import Results from './Results';
import Pagination from './Pagination';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hitsPerPage, setHitsPerPage] = useState(7);

  //console.log(searchValue);
  // console.log('render')

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchValue}&page=${page}&hitsPerPage=${hitsPerPage}`)
      .then(response => response.json())
      .then(object => setItems(object.hits))
    return () => {
      // console.log('clean up')
    }
  }, [searchValue, page, hitsPerPage])

  const handleInput = (event) => {
    event.preventDefault();
    console.log("event.target.value");
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="container">
        <h1
          className="my-5 text-3xl text-teal-500 uppercase font-semibold">
          News
        </h1>
        <div className="my-8 text-center">
          <form>
            <input
              onChange={handleInput}
              className="mx-5 w-96 bg-transparent py-2 px-4 border border-teal-500 rounded"
              type="text"
              placeholder="Start your search"
            />
            <button
              className="mx-5 bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
              type='Submit'>
              Search
            </button>
          </form>
        </div>
        <div className="">
          <Results items={items} />
          <Pagination page={page} setPage={setPage} />
        </div>

      </div>
    </>
  )
}

export default App