import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import ReactRouter from '../Router/router';
import {UserContext} from '../UserContext';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const valueProvider = useMemo(() => ({userInfo, setUserInfo}) , [userInfo, setUserInfo]);
 
  useEffect(() => {
    setUserInfo();
  },[]);
  
  return (
    <div>
      <UserContext.Provider value = {valueProvider}>
        <ReactRouter/>
      </UserContext.Provider>
    </div>
  )
}
export default App;