import React from 'react';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
//import Container from "./components/components.container"
import HomePage from "./Pages/Homepage/hompage.component"
import Shop from './Pages/Shoppage/ShopPage.componenets'
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
        <Route exact path="/Shop" component={Shop}></Route>
     </Switch>
    </div>
  )
}
export default App;
