import React from 'react';
import "./homepage.styles.scss";
import Directory from "../../components/directory/homepage.directory-menu"

const HomePage= (props)=>{
  console.log(props);
  return ( 
   <div className="homepage">
        <Directory></Directory>
   </div>
);
}
export default HomePage;
