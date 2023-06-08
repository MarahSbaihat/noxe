import React, { useState } from "react";
import axios from 'axios';
import Joi, { number, string } from "joi";
import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";

function Register() {

  let navigate = useNavigate();
  function goToLogin(){
    let path = '/Login';
    navigate(path);
  }

  let [user,setuser] = useState({
    name:'',
    age:'',
    email:'',
    password:'',
  });

  let [loading,setLoading] = useState(false);

  let [errorlist,seterrorlist] = useState([]);

  let submitFormData = async (e) => {
    e.preventDefault();
    let validateResult = validateform();
    console.log(validateResult)
    validateResult.error ? seterrorlist(validateResult.error.details) : seterrorlist('') ;

    let {data} = await axios.post("https://knowledge-saraha.herokuapp.com/users/signUp",user);

    if (data.message=='success'){
      goToLogin();
    }

    setLoading(true);
  };
  
  let getFormValue = (e) => {
    let myUser = {...user};
    myUser[e.target.name] = e.target.value;
    setuser(myUser);
  }

  function validateform (){
    const schema = Joi.object({
      name:Joi.string().alphanum().min(3).max(20).required(),
      age:Joi.number().min(5).max(20).required(),
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password:Joi.string().required(),
    });
    return schema.validate(user,{abortEarly:false});
  }

  
  return (
    <>
      <div className="vh-100 w-100 d-flex align-items-center">
        <div className="w-100">
          <h2 className="pt-4">Register form</h2>

          {
          errorlist ? errorlist.map((error,index) => 
            <div className="alert alert-danger">{error.message}</div>
          ): ''
          } 
      

          <form onSubmit={submitFormData} className="my-5">
            <div className="mb-3 my-3">
              <label htmlFor="name" className="form-label">name</label>
              <input type="text" onChange={getFormValue} name="name" className="form-control" id="name" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 my-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" onChange={getFormValue} name="age" className="form-control" id="age" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 my-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" onChange={getFormValue} name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 my-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" onChange={getFormValue} name="password" className="form-control" id="password" />
            </div>
            <button type="submit" onChange={getFormValue} className="btn btn-primary mt-4">
              {loading?<i className={`${style.spinn} fa-solid fa-spinner fa-spin`}></i>:'Register'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
