
import React from 'react'
import './SignIn.styles.scss'
import FormInput from "../form-input/form-input.components"
import CustomButton from "../Button/button.component"
import {auth,signInWithGoogle} from "../../firebase/firebase.utils"


class SignIn extends React.Component{
    constructor()
    {
        super();
        this.state={
            Email:'',
            Password:''
        }
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]: value});
    }
    handleSubmit=async (event)=>{

        event.preventDefault();
        const{Email, Password}=this.state;

        try{
           await auth.signInWithEmailAndPassword(Email,Password);
            this.setState({Email: '',Password: ''})
        }
        catch(err)
        {
             console.error(err);
        }
        
    }
    render()
    {
        return(
            
               <div className="sign-in">
                 <h2 className="title">I already have an account</h2>
                 <span>Sign in with your email and password</span>
                 <form onSubmit={this.handleSubmit}>
                     <FormInput name="Email" type="email" label="Email" value={this.state.Email} handleChange={this.handleChange} required/>
                     <FormInput name="Password" type="password" label="Password" handleChange={this.handleChange} value={this.state.Password} required/>
                    <div className="buttons">
                     <CustomButton type="submit">Sign In</CustomButton>
                     <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                         Sign in with Google
                    </CustomButton>
                    </div>
                 </form>
                </div>
                 
           
        )
    }
}
export default SignIn;