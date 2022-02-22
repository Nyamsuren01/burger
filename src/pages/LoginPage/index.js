import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom"

import Button from "../../components/General/Button"
import css from "./style.module.css";
import * as actions from "../../redux/actions/loginActions"; 
import Spinner from '../../components/General/Spinner';

class  Login extends Component {
    state = {
        email: "",  
        password: ""
    };

    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changePassword = (e) => {
        this.setState({password: e.target.value})
    }
    login = () => {
        this.props.login(this.state.email, this.state.password)
    }
     render() {
        return  <div className={css.Login}>
            {this.props.userId && <Redirect to="/orders" />}
            <input type="text" onChange={this.changeEmail} placeholder="Имайл хаяг" />
            <input type="password" onChange={this.changePassword} placeholder="Нууц үг" />
            {this.props.logginIn && <Spinner />}
            <Button text = "Нэвтрэх" btnType="Success" daragdsan={this.login} />  
            {this.props.firebaseError && (<div style ={{color: "red"}}>{this.props.firebaseError}  kод нь: {this.props.firebaseErrorCode} </div>)}

        </div>;
    
    }
    
} 
const mapStateToProps = (state) => {
    return{
        logginIn: state.signupLoginReducer.logginIn,
        firebaseError: state.signupLoginReducer.firebaseError,
        firebaseErrorCode: state.signupLoginReducer.firebaseErrorCode,
        userId: state.signupLoginReducer.userId
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login);
