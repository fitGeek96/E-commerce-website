import React, { Component } from 'react'
import SignIn from '../sign-in/sign-in'
import SignUp from '../sign-up/sign-up'
import './signin-signup.styles.scss'


const SigninSignupPage = () => (
    <div className="signin-signup">
        <SignIn />
        <SignUp />
    </div>
)


export default SigninSignupPage;