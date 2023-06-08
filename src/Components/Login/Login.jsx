import React, { useState } from "react";
import axios from 'axios';
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login({setUserData}) {
  console.log(setUserData)

  let navigate = useNavigate();
  function goToHome(){
    let path = '/Home';
    navigate(path);
  }

  let [user,setuser] = useState({
    email:'',
    password:'',
  });

  let [errorMsg,setErrorMsg]=useState("");

  let [loading,setLoading] = useState(false);
  let submitFormData = async (e) => {
    e.preventDefault();
    let {data} = await axios.post("https://knowledge-saraha.herokuapp.com/users/signIn",user);

    if (data.message=='login'){
      localStorage.setItem('token',data.token);
      setUserData();
      setUserData.setLoginData(true);
      goToHome();
      console.log(data);
    }
    else {
      setErrorMsg(data.message);
    }

    setLoading(true);
  };
  
  let getFormValue = (e) => {
    let myUser = {...user};
    myUser[e.target.name] = e.target.value;
    setuser(myUser);
  }

  return (
    <>
      <div className="vh-100 w-100 d-flex align-items-center">
        <div className="w-100">
          <h2 className="pt-4">Log in form</h2>
          {errorMsg?<div className="alert alert-danger mt-4">{errorMsg}</div>:''}
          <form onSubmit={submitFormData} className="my-4">
            <div className="mb-3 my-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" onChange={getFormValue} name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 my-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" onChange={getFormValue} name="password" className="form-control" id="password" />
            </div>
            <button type="submit" onChange={getFormValue} className="btn btn-primary mt-4">
              {loading?<i className={`${style.spinn} fa-solid fa-spinner fa-spin`}></i>:'Log in'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
