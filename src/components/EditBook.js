import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBooks, putBook } from '../utils/http-utils';
import { useFormik } from 'formik';
import { bookSchema } from '../utils/book-utils';
import { useNavigate } from 'react-router-dom';


export default function EditBook() {
    const bookId = useParams();
    const [booksInfo, setBooksInfo] = useState([]);
    const [currentBook, setCurrentBook] = useState({});
    const nav = useNavigate();

    const getCurrentBook = (bookId)=>{
        getBooks().then(res=>{
            setBooksInfo(res.data.data);
            console.log("booksInfo",booksInfo);
            const data = booksInfo.filter(book => book.id === bookId);
            setCurrentBook(data);
            console.log("currentBook",data);
        })
    }

    const submitBookDetails = (e) => {
        let newBook = {
            id: formik.values.id,
            author: formik.values.author,
            country: formik.values.country,
            language: formik.values.language,
            link: formik.values.link,
            pages: formik.values.pages,
            title: formik.values.title,
            year: formik.values.year
        }

        console.log("NewBook Data:/n",newBook);

        putBook(newBook).catch(err => {
            console.log(err);
        })

        setTimeout(() => {
            nav("/data-list");
            formik.resetForm();
        }, 3000);

    }

    const formik  = useFormik({
        initialValues: currentBook,
        validationSchema: bookSchema,
        onSubmit: submitBookDetails
    })

    useEffect(()=>{
        getCurrentBook(bookId);
    },[])

  return (
    <div className='container text-center'>
            {/* <div className='row'>
                <div className='col'> */}
                    <div className='card book-card'>
                        <div className='card-body'>
                            <h2 className='form-label'>Enter Book Details</h2>

                            <form onSubmit={formik.handleSubmit}>

                                <div className="input-feild form-floating">
                                    <input
                                    id="id"
                                    name='id'
                                    type='number'
                                    placeholder='Enter Id'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.id}
                                    />
                                    <label htmlFor="id">Enter Id</label>
                                    {formik.touched.id && formik.errors.id ? 
                                        <p className='book-error'>{formik.errors.id}</p>: null}
                                </div>

                                <div className="input-feild form-floating">
                                    <input
                                    id="author"
                                    name='author'
                                    type='text'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.author}
                                    />
                                    <label htmlFor="author">Enter author name</label>
                                    {formik.touched.author && formik.errors.author ? 
                                        <p className='book-error'>{formik.errors.author}</p>: null}
                                </div>

                                <div className="input-feild form-floating">
                                    <input
                                    id="country"
                                    name='country'
                                    type='text'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.country}
                                    />
                                    <label htmlFor="country">Enter country</label>
                                    {formik.touched.country && formik.errors.country ? 
                                        <p className='book-error'>{formik.errors.country}</p>: null}
                                </div>

                                <div className="input-feild form-floating">
                                    <input
                                    id="language"
                                    name='language'
                                    type='text'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.language}
                                    />
                                    <label htmlFor="language">Enter language</label>
                                    {formik.touched.language && formik.errors.language ? 
                                        <p className='book-error'>{formik.errors.language}</p>: null}
                                </div>

                                <div className="input-feild form-floating">
                                    <input
                                    id="link"
                                    name='link'
                                    type='text'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.link}
                                    />
                                    <label htmlFor="link">Enter link</label>
                                    {formik.touched.link && formik.errors.link ? 
                                        <p className='book-error'>{formik.errors.link}</p>: null}
                                </div>

                                <div className="input-feild form-floating">
                                    <input
                                    id="pages"
                                    name='pages'
                                    type='number'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.pages}
                                    />
                                    <label htmlFor="pages">Enter pages</label>
                                    {formik.touched.pages && formik.errors.pages ? 
                                        <p className='book-error'>{formik.errors.pages}</p>: null}
                                </div>

                                <div className="input-feild form-floating">
                                    <input
                                    id="title"
                                    name='title'
                                    type='text'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    />
                                    <label htmlFor="title">Enter title</label>
                                    {formik.touched.title && formik.errors.title ? 
                                        <p className='book-error'>{formik.errors.title}</p>: null}
                                </div>

                                <div className="input-feild form-floating">
                                    <input
                                    id="year"
                                    name='year'
                                    type='number'
                                    className="form-control"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.year}
                                    />
                                    <label htmlFor="year">Enter Year</label>
                                    {formik.touched.year && formik.errors.year ? 
                                        <p className='book-error'>{formik.errors.year}</p>: null}
                                </div>

                                <div className="button-feild inform-floating">
                                    <button className="form-control btn btn-outline-success" type='submit'>Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                {/* </div>
            </div> */}
        </div>
  );
}
