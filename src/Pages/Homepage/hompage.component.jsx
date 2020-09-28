import React from 'react';
import "./homepage.styles.scss";
import Directory from "../../components/directory/homepage.directory-menu"
import Navbar from "../../Navbar/navbar"
const HomePage= (props)=>{
  console.log(props);

  return ( 
   <div className="mainPage">
   <Navbar></Navbar>
   <div className="homepage">
   
        <Directory></Directory>
   </div>
   </div> 
);
}
export default HomePage;
