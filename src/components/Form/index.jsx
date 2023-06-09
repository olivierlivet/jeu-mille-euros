import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import * as React from 'react'
import { Formik } from 'formik';
import { useFormik } from 'formik'
import * as Yup from 'yup'


export const EmissionForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            countryRegion: 'Select an Option',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            countryRegion: Yup.string()
                .required('Required')
                .matches(/(Canada|United States)/, {
                    message: 'Please select an option',
                }),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                <pre>
                    {JSON.stringify(formik.values, null, 2)}
                </pre>
                <input
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange('firstName', "test")}
                    value={formik.values.firstName}
                    invalid={
                        formik.touched.firstName && formik.errors.firstName
                    }

                    onBlur={formik.handleBlur}
                />
            </form>

            {/* <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl> */}
        </>
    )
}