import React from 'react';
import { postBook } from '../utils/http-utils';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { bookSchema, initialValues } from '../utils/book-utils';

export default function NewBook() {
    // const saveNewBook = (book) => {
    //     postBook(book).catch(err => {
    //         console.log(err);
    //     })
    // }


    const nav = useNavigate();

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

        postBook(newBook).catch(err => {
            console.log(err);
        })

        setTimeout(() => {
            nav("/data-list");
            formik.resetForm();
        }, 3000);

    }

    const formik  = useFormik({
        initialValues:  initialValues,
        validationSchema: bookSchema,
        onSubmit: submitBookDetails
    })
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
                                    placeholder='Enter author name'
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
                                    placeholder='Enter country name'
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
                                    placeholder='Enter language'
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
                                    placeholder='Enter link'
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
                                    placeholder='Enter pages'
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
                                    placeholder='Enter title'
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
                                    placeholder='Enter year'
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
