import React from 'react';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
//import Container from "./components/components.container"
import HomePage from "./Pages/Homepage/hompage.component"
const Hats=(props)=>{
  console.log(props)
  return(
    <h1>Hello I am {props.match.params.name}</h1>
  )
};
function App()
{
  return(
    <div>
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route exact path="/shop/:name" component={Hats}/>
       </Switch>
    </div>
  )
}
export default App;
