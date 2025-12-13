import React, { useContext, useEffect } from 'react'
import Routing  from './Routing'
import { DataContext } from './Components/Data/DataProvider'
import { auth } from './Utility/firebase'
import { Type } from './Utility/action.type'


const App = () => {
  const [{user}, dispatch] = useContext(DataContext);
  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
    dispatch({
      type: Type.SET_USER,
      user:authUser,
    })
    }else{
      dispatch({
        type: Type.SET_USER,
        user: null,
      });
    }
  })
  },[])


  return <Routing/>
  
}

export default App
