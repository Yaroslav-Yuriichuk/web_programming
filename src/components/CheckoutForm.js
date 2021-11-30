import { useFormik } from 'formik'
import React from 'react'
import InputField from './InputField'
import TextInput from './TextInput'
import * as Yup from 'yup'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { removeAllFromCart } from '../actions'

const CheckoutForm = () => {
    let history = useHistory()
    const dispatcher = useDispatch()

    const { values, handleChange, handleSubmit, handleBlur, touched, errors } = useFormik({
        initialValues: {
            first_name: '',
            second_name: '',
            phone_number: '',
            email: '',
            comment: ''
        },
        validationSchema: Yup.object({
            first_name: Yup.string().min(2, "Min length: 2 characters").max(30, "Max length: 30 characters")
                .required("Required"),
            second_name: Yup.string().min(2, "Min length: 2 characters").max(30, "Max length: 30 characters")
                .required("Required"),
            phone_number: Yup.string().matches("^380[0-9]{9}$", "Phone must match format +(380)xx xxx xx xx")
                .required("Required"),
            email: Yup.string().email("Email must be valid email").required("Required"),
            comment: Yup.string().max(200, "Max length: 200 characters")
        }),
        onSubmit: (values) => {
            dispatcher(removeAllFromCart())
            history.push("/success")
        }
    })

    console.log(values)

    return (
        <form onSubmit={handleSubmit}>
            <InputField id="first_name" htmlFor="first_name" label="First name"
                name="first_name" value={values.first_name}
                onChange={handleChange} onBlur={handleBlur}
                touched={touched.first_name} error={errors.first_name}/>
            <InputField id="second_name" htmlFor="second_name" label="Second name"
                name="second_name" value={values.second_name}
                onChange={handleChange} onBlur={handleBlur}
                touched={touched.second_name} error={errors.second_name}/>
            <InputField id="phone_number" htmlFor="phone_number" label="Phone number"
                name="phone_number" value={values.phone_number}
                onChange={handleChange} onBlur={handleBlur}
                touched={touched.phone_number} error={errors.phone_number}/>
            <InputField id="email" htmlFor="email" label="Email"
                name="email" value={values.email}
                onChange={handleChange} onBlur={handleBlur}
                touched={touched.email} error={errors.email}/>
            <TextInput id="comment" htmlFor="comment" label="Comment"
                name="comment" value={values.comment}
                onChange={handleChange} onBlur={handleBlur}
                touched={touched.comment} error={errors.comment}/>    
            <button type="submit">Purchase</button>
        </form>
    )
}

export default CheckoutForm
