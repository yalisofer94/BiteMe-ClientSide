import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import ReactRouter from '../Router/router';
import UserContext from '../UserContext';

const App = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(0);
  const value = { userName , setUserName, userId, setUserId};
  //const valueProvider = useMemo(() => ({userInfo, setUserInfo}) , [userInfo, setUserInfo]);
  
  return (
    <div>
      <UserContext.Provider value = {value}>
        <ReactRouter/>
      </UserContext.Provider>
    </div>
  )
}
export default App;