import React from 'react';
import { connect } from 'react-redux';

import Burger from "../../components/Burger";
import ContactData from '../../components/ContactData';
import Button from "../../components/General/Button"
import css from "./style.module.css";
import {Route} from "react-router-dom";

//import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';


class ShippingPage extends React.Component 

{ 
  
    cancelOrder = () => {
        this.props.history.goBack();
    }
    showContactData = () =>{
        this.props.history.replace("/ship/contact")
    }
    
    render() {
       // console.log("oooooooo " + this.props.price);
        return <div className={css.ShippingPage}>
            <p><strong>ТАНЫ ЗАХИАЛСАН БУРГЕР</strong></p>
            <p><strong>Бүргэрийн үнэ: {this.props.price} ₮</strong></p>
            <Burger />
        <Button daragdsan={this.cancelOrder} btnType="Danger" text = "ЗАХИАЛГЫГ ЦУЦЛАХ"/>
        <Button daragdsan={this.showContactData} btnType="Success" text = "ХАЯГЫН МЭДЭЭЛЭЛ ОРУУЛАХ"/>
        <Route path="/ship/contact" component = {ContactData} >
            <ContactData /> 
        </Route>
        </div>
    }

};

const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice
    }

}

export default connect(mapStateToProps)(ShippingPage)
