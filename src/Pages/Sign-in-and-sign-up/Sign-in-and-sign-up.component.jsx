import React from 'react';
import './Sign-in-and-sign-up.scss';
import SignIn from "../../components/SignIn/SignIn.component"
import Signup from "../../components/SignUp/signup.component"
const SignInAndSignUpPage=()=>(
    <div className="sign-in-and-sign-up">
       
              <SignIn></SignIn>
              <Signup></Signup>
        
    </div>
)

export default SignInAndSignUpPage;