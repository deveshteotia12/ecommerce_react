import React from 'react';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
//import Container from "./components/components.container"
import HomePage from "./Pages/Homepage/hompage.component"
import ShopPage from './Pages/Shoppage/ShopPage.componenets'
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component"
import { auth } from "./firebase/firebase.utils";
class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
       currentUser: null
    }
  }
   unsubscribeFromAuth=null;
  componentDidMount()
  {
     this.unsubscribeFromAuth=auth.onAuthStateChanged(user =>{
        this.setState({currentUser: user});
      console.log(user);
      })
  }
  componentWillUnmount()
  {
        this.unsubscribeFromAuth();
  }
  render(){
  return(
    <div>
     <Header state={this.state.currentUser}></Header>
     <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/Shop" component={ShopPage}></Route>
        <Route exact path="/SignIn" component={SignInAndSignUpPage}></Route>
     </Switch>
    </div>
  )
}
}
export default App;
