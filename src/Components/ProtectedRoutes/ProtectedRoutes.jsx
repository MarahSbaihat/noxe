import React from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function ProtectedRoutes({logInData}) {
  return (
    <>
      {logInData?<Outlet/>:<Navigate to='Login'/>}
    </>
  )
}

export default ProtectedRoutes