import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { getBooks } from '../utils/http-utils';
import '../styles/search-bar.css';

export default function SearchBar({setSearchResults}) {
    const [input, setInput] = useState("");
    const [booksInfo, setBooksInfo] = useState([]);

    const fetchData = (value)=>{
        getBooks().then(res=>{
            // console.log(res);
            setBooksInfo(res.data.data);
            const data = booksInfo.filter((book)=>{
                return value && book && book.title && book.title.toLowerCase().includes(value);
            });
            // console.log(data);
            setSearchResults(data);
        });
    }

    const handleChange = (value)=>{
        setInput(value);
        fetchData(value);
    }


  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input placeholder='Type Title to search...' value={input} onChange={(event) => handleChange(event.target.value)}/> 
    </div>
  );
}
