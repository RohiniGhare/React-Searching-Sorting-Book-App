import React, { useState, useEffect } from 'react';
import { getBooks } from '../utils/http-utils';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';
import '../styles/data-list.css';

export default function DataList() {
    const [bookList, setBookList] = useState([]);
    const [paginationData, setPaginationData] = useState({});
    const [searchResults, setSearchResults] = useState([]);

    const loadBooks = () => {
        getBooks().then(res => {
            setBookList(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const loadPaginationDetails = () => {
        getBooks().then(res => {
            // console.log("loadPaginationDetails",res.data.pagination);
            setPaginationData(res.data.pagination);
        }).catch(err => {
            console.log(err);
        })
    }

    const columns = [
        {dataField:'id', text:'Id', sort: true, filter: textFilter()},
        {dataField:'author', text:'Author', sort: true, filter: textFilter()},
        {dataField:'country', text:'Country', sort: true, filter: textFilter()},
        {dataField:'language', text:'Language', sort: true, filter: textFilter()},
        {dataField:'link', text:'Link', sort: true, filter: textFilter()},
        {dataField:'pages', text:'Pages', sort: true, filter: textFilter()},
        {dataField:'title', text:'Title', sort: true, filter: textFilter()},
        {dataField:'year', text:'Year', sort: true, filter: textFilter()},
        {
            text: 'Edit',
            dataField: 'edit',
            formatter: (cell, row) => (
              <Link to={`/edit-book/${row.id}`}>Edit Book</Link>
            ),
          },
    ];

    const pagination = paginationFactory({
        page: paginationData.currentPage,
        sizePerPage: paginationData.pageSize,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        }
    });



    
    useEffect(() => {
        // getBooks().then(response => response.json()).then(res => setBookList(res.data.data))
        //     .catch(err => console.log(err));
        loadBooks();
        loadPaginationDetails();
    }, [])
    return (
        <div>
            <h1>Book List</h1>
            <div className='search-bar-container text-center'>
                <SearchBar setSearchResults={setSearchResults}/>
                <SearchResultsList searchResults={searchResults}/>
            </div>

            <BootstrapTable
               className='result-table' 
               bootstrap4 
               keyField='id'
               columns={columns} 
               data={bookList}
               pagination={pagination}
               filter={filterFactory()}
            />
            <button><Link className="btn btn-sucess" to="/new-book">Add Book</Link></button>
        </div>
    );
}