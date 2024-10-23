"use client";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'

import './Register.scss';
const Register = () => {
  return (
    <>
      <div className='register-container'>
        <div className='register-body'>
        <Formik
          initialValues={ {}}
          onSubmit={() => {}}
        >
          <Form>
            <p className='register-title'>Sign Up</p>

            <div className='register-group-field'>
              <label htmlFor='name' className='register-label'>Name</label>
              <Field name='name' type='text' className='register-field' />
              <ErrorMessage name='name' component='div' className='register-error' />
            </div>

            <div className='register-group-field'>
              <label htmlFor='email' className='register-label'>Email address</label>
              <Field name='email' type='email' className='register-field' />
              <ErrorMessage name='email' component='div' className='register-error' />
            </div>

            <div className='register-group-field'>
              <label htmlFor='password' className='register-label'>Password</label>
              <Field name='password' type='text' className='register-field' />
              <ErrorMessage name='password' component='div' className='register-error' />
            </div>

            <p className='register-forgot'>Forgot password ?</p>

            <button type='submit' className='register-button'>Register</button>

            <p className='register-signin'>You have an account ? <span className='register-signin-link'>Login now</span></p>
          </Form>
          </Formik>
          </div>
      </div>
    </>
  )
}

export default Register;