import React from 'react';
import '../styles/search-result-list.css';

export default function SearchResultsList({searchResults}) {
  return (
    <div className='results-list'>
        {
            searchResults.map((result, id)=>{
                return <div className='search-result' key={id}>{result.title}</div>
            })
        }
    </div>
  );
}
