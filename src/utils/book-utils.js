import * as Yup from 'yup';

export const initialValues={
    // id: Math.random(),
    id: 0,
    author: '',
    country: '',
    language: '',
    link: '',
    pages: 0,
    title: '',
    year: '',
}

export const bookSchema = Yup.object({
    id: Yup.number().required("Id is Mandtory  !!"),
    author: Yup.string().required("Author name is maandatory !!"),
    country: Yup.string(),
    language: Yup.string().required("Language is mandatory !!"),
    link: Yup.string().required("Link is mandatory !!"),
    pages: Yup.number(),
    title: Yup.string().required("Title is mandatory !!"),
    year: Yup.number()
})