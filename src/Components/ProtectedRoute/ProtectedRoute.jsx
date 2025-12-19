import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../Data/DataProvider'
const ProtectedRoute = ({ children, msg, redirect}) => {
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth", {state: {msg, redirect}})
    }
  },[user]);
  return children;
};

export default ProtectedRoute
