import React from 'react';
import "./App.css";
import { Switch, Route, Redirect} from 'react-router-dom';
//import Container from "./components/components.container"
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector"
import HomePage from "./Pages/Homepage/hompage.component"
import ShopPage from './Pages/Shoppage/ShopPage.componenets'
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./Pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import checkoutPage from "./Pages/checkoutPage/checkoutPage.component"
class App extends React.Component
{
  unsubscribeFromAuth=null;
  componentDidMount()
  {
    const { setCurrentUser } = this.props;
     this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
        if(userAuth)
        {
          const userRef=await createUserProfileDocument(userAuth);
           userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })     
        }
        setCurrentUser(userAuth);
      });
  }
  componentWillUnmount()
  {
        this.unsubscribeFromAuth();
  }
  render(){
  return(
    <div>
     <Header></Header>
     <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/Shop" component={ShopPage}></Route>
        <Route exact path="/SignIn" render={()=>this.props.currentUser ? (<Redirect to="/"></Redirect>) : <SignInAndSignUpPage/>}></Route>
        <Route exact path="/checkout" component={checkoutPage}></Route>
     </Switch>
    </div>
  )
}
}
const mapStateToProps=(state)=>({
  currentUser: selectCurrentUser(state)
})
const mapDispatchToProps=dispatch=>({
    setCurrentUser: user=> dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
