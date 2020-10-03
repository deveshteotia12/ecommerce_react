import React from 'react';

import FormInput from "../form-input/form-input.components"
import CustomButton from "../Button/button.component"
import {auth,createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss'

class Signup extends React.Component{
   constructor()
   {
       super();
       this.state={
           displayName: '',
           email: '',
           password: '',
           confirmPassword:''
       }
   }
   handelChange=(event)=>
   {
        const{name, value} = event.target;
        this.setState({[name]: value});
   }
   handelSubmit=async (event)=>{
       alert("Value is submittes");
       event.preventDefault();
        const {displayName, email, password,confirmPassword}=this.state;
        if(password!==confirmPassword)
        {
            alert("Password don't Match");
        }
        try{
          const { user } = await auth.createUserWithEmailAndPassword(
              email,
             password
          );
          await createUserProfileDocument(user, { displayName });
          this.setState({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
          })
        }catch(err){
            console.error(err);
        }


   }
   render()
   {
        return(
            <div className="sign-up">
            <h1 className="title">I do not have an account</h1>
            <span>Sign Up with Your Email and Password</span>
            <form onSubmit={this.handelSubmit}>
              <FormInput name="displayName" type="text" label="Full Name" value={this.state.displayName} handelChange={this.handelChange} required/>
              <FormInput name="email" type="email" label="Email" value={this.state.email} handelChange={this.handelChange} required/>
              <FormInput name="password" type="password" label="Password" value={this.state.password} handelChange={this.handelChange} required/>
              <FormInput name="confirmPassword" type="password" label="Confirm Password" value={this.state.confirmPassword} handelChange={this.handelChange} required/>
              <CustomButton type="submit">Sign Up</CustomButton>
            </form>
            </div>
        )
   }

}

export default Signup;