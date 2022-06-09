import { Formik, yupToFormErrors } from "formik";
import ContactForm from "./ContactForm";
import React from 'react'
import  * as Yup from 'yup';

export default function App2() {
  const ErrorSchema = Yup.object().shape(
    {
 fname:Yup.string().required("Name is required")
 .min(2,"Min 2 characters needed").max(12,"Max 12 characters are needed"),
    
    age:Yup.number()
    .typeError("Age must be number")
    .integer("must be integer")
    .required("age is required")
    .min(18,"Min 18 ")
    .max(30, "Max 30"),

    email:Yup.string()
    .email('invalid email') 
    .required("email is required"),

    
    phone:Yup.string()
    .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'not valid') 
    .required("phone is required")
     
     
  
    })
  return (
    <div> 
 <Formik 
 initialValues={{
   fname : "",
   age:0,
   email:"",
   phone:"",
   message:""
 }}
 validationSchema ={ErrorSchema}
  onSubmit={(value)=> 
  {
    console.log(value);
  }}
 component={ContactForm}/>


    </div>
  )
}
