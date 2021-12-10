import React, {Component} from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmpassword} = this.state;

        if (password != confirmpassword) {
            alert('Passwords do not Match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({displayName: '', email: '', password: '', confirmpassword: ''});

        } catch (error) {
            console.log(error);
        }
    }


    handleChange = e => {
        const { name, value } = e.target;

        this.setState({[name] : value});
    }

    render() {
        const {displayName, email, password, confirmpassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="display Name"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Name"
                        required/>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required/>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required/>
                    <FormInput
                        type="password"
                        name="confirm password"
                        value={confirmpassword}
                        onChange={this.handleChange}
                        label="Confirm password"
                        required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignUp;