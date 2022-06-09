import React from 'react'
import {Form , Field} from 'formik';
import './App2.css';

export default function ContactForm({errors,touched, isValid, dirty}) {
  console.log(errors);
  return (
    <div>ContactForm
<Form>
  <div  className="mb-3 mt-3">
  <label className="form-label"> name </label>
  <Field type="text" className={touched.fname ? `form-control  ${errors.fname ? "invalid" :"valid"}` :`form-control`} name="fname"/>
  <small className="text-danger">{errors.fname} </small>
  </div>

  <div  className="mb-3 mt-3">
  <label className="form-label"> age </label>
  <Field type="text" className={touched.age ? `form-control  ${errors.age ? "invalid" :"valid"}` :`form-control`} name="age"/>
  <small className="text-danger">{errors.age} </small>
  </div>

  <div  className="mb-3 mt-3">
  <label className="form-label"> email </label>
  <Field type="text" className={touched.email ? `form-control  ${errors.email ? "invalid" :"valid"}` :`form-control`} name="email"/>
  <small className="text-danger">{errors.email} </small>
  </div>

<div  className="mb-3 mt-3">
  <label className="form-label"> phone </label>
  <Field type="text" className={touched.phone ? `form-control  ${errors.phone ? "invalid" :"valid"}` :`form-control`} name="phone"/>
  <small className="text-danger">{errors.phone} </small>
  </div>

  
<div  className="mb-3 mt-3">
  <label className="form-label"> message </label>
  <Field type="text" className={touched.message ? `form-control  ${errors.message ? "invalid" :"valid"}` :`form-control`} name="message"/>
  <small className="text-danger">{errors.message} </small>
  </div>

  

  <button className='btn btn-primary'
  disabled={!isValid || !dirty}> Submit </button>
</Form>


    </div>
  )
}
