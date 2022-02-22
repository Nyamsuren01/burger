import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from "../../components/General/Button"
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions" 
import Spinner from '../../components/General/Spinner';

class  SignupPage extends Component {
    state = {
        email: "",
        password1: "",
        password2: "",
        error: ""
    };

    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changePassword1 = (e) => {
        this.setState({password1: e.target.value})
    }
    changePassword2 = (e) => {
        this.setState({password2: e.target.value})
    }

    signup = () => {
        if(this.state.password1 === this.state.password2)
       { this.props.signupUser(this.state.email, this.state.password1)

    } else {
        this.setState({error: "Нууц үгээ 2 удаа ижил бичиж өгнө үү"} )
    }
        
    }
     render() {
        return  <div className={css.SignupPage}>
            {this.props.userId && <Redirect to="/" />}
            {console.log("энд хэвлээд өгөөч хэрэглэгчийн id-г " + this.props.userId)}
            <h1>Бүртгэлийн хуудас</h1> 
            <div>Та өөрийн мэдээллээ оруулна уу</div>
            <input type="text" onChange={this.changeEmail} placeholder="Имайл хаяг" />
            <input type="password" onChange={this.changePassword1} placeholder="Нууц үг оруулна уу" />
            <input type="password" onChange={this.changePassword2} placeholder="Нууц үгээ дахин оруулна уу" />
            {this.state.error && (<div style ={{color: "red"}}>{this.state.error}</div>)}
            {this.props.firebaseError  && (<div style ={{color: "red"}}>{this.props.firebaseError}</div>) }
            {console.log("алдаа байвал" + this.props.firebaseError)}
            {this.props.saving && <Spinner />}
            {console.log(this.props.saving)}
            <Button text = "БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={this.signup} />  

        </div>;    
    }   
} 

const mapStateToProps = state => {
    return {
        saving: state.signupLoginReducer.saving,
        firebaseError: state.signupLoginReducer.firebaseError, 
        userId: state.signupLoginReducer.userId
    };
};

const mapDispatchToProps = (dispatch) => { 
    return{
        signupUser: (email, password) => dispatch(actions.signupUser(email, password)) 
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
