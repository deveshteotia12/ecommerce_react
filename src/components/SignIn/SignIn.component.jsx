
import React from 'react'
import './SignIn.styles.scss'
import FormInput from "../form-input/form-input.components"
import CustomButton from "../Button/button.component"
import {signInWithGoogle} from "../../firebase/firebase.utils"
class SignIn extends React.Component{
    constructor()
    {
        super();
        this.state={
            Email:'',
            Password:''
        }
    }
    handelChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]: value});
    }
    handelSubmit=(event)=>{
        alert("YOUR EMAIL: "+ this.state.Email + " YOUR PASSWORD : "+this.state.Password);
        event.prevetDefault();
    }
    render()
    {
        return(
           <div className="sign-in">
                 <h2 className="title">I already have an account</h2>
                 <span>Sign in with your email and password</span>
                 <form onSubmit={this.handleSubmit}>
                     <FormInput name="Email" type="email" label="Email" value={this.state.Email} handelChange={this.handelChange} required/>
                     <FormInput name="Password" type="password" label="Password" handelChange={this.handelChange} value={this.state.Password} required/>
                    <div className="buttons">
                     <CustomButton type="submit">Sign In</CustomButton>
                     <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                         Sign in with Google
                    </CustomButton>
                    </div>
                 </form>
           </div>
        )
    }
}
export default SignIn;