import React from 'react';
import '../../App.css';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
var passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        }
    }

    onChangeHandler = (event) => {
        let { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'email':
                errors.email = !validEmailRegex.test(value) ? "Please enter a valid email" : "";
                break;
            case 'password':
                errors.password = !passwordRegex.test(value) ? "The password should contain atleast 1 Uppercase, 1 lowercase, 1 number and 1 special character" : "";
                break;
        }
        this.setState({ errors, [name]: value }, () => {
            console.log(errors);
        });
    }

    render() {
        return (
            <div>
                <div className="centeredCss">
                    <h1>Sign In</h1>
                </div>
                <div className="form-group">
                    <input className="form-control" name="email" placeholder="Email" onChange={this.onChangeHandler}></input>
                    {this.state.errors.email.length > 0 ? <span className="validation">{this.state.errors.email}</span> : null}
                </div>
                <div className="form-group">
                    <input className="form-control" name="password" placeholder="Password" onChange={this.onChangeHandler}></input>
                    {this.state.errors.password.length > 0 ? <span className="validation">{this.state.errors.password}</span> : null}
                </div>
                <div className="centeredCss">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}