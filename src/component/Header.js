import React, { useState } from "react";
import '../styles/Header.css'
import User from "./User";
const Header = () => {

  const[load,setload]=useState(false);
  const [conres,setuserdata]=useState([]);


  const fetchdata=()=>{
    setload(true);

    setTimeout(async function () {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const conres= await response.json();
      // console.log(conres["data"]);
      setuserdata(conres["data"]);
      setload(false)
    },2000)

  }
  return (
    <>
        <div className="navbar">
          <div>
          <h1>  SHAMSHER </h1>
          </div>
            <button className="btn" onClick={fetchdata}>
              USERDETAILS
            </button>
        </div>
        <div>
        <User load={load} userdata={conres}/>
        </div>
    </>
  );
};

export default Header;