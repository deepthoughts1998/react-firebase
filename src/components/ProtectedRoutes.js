import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoutes({children}) {
    const {currentUser} = useAuth();
    console.log({currentUser})
    return currentUser? <Outlet />:<Navigate to="/signin" />
    
  
}

export default ProtectedRoutes