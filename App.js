import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password:''
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values => {
      let errors ={};
      if(!values.name) errors.name ='Field Required';
      if(!values.email) errors.email ='Field Required';
      if(!values.password) errors.password ='Field Required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
        <div>Email</div>
        <input name="email" type="text"onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input name="password" type="text"onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.}</div>: null}
        <button type="submit">Submit</button>
      </form>   
    </div>
  );
}

export default App;
