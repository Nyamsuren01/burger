import React from 'react';
import { connect } from 'react-redux';

import css from "./style.module.css";
import Button from "../General/Button";
//import axios  from '../../axios-orders';
import Spinner from '../General/Spinner';
import { withRouter } from 'react-router';
import * as actions from '../../redux/actions/orderActions';


class ContactData extends React.Component{
    state = {    
            name: null,
            city: null,
            phone: null,
            price:0 
    };
    
    changeName = e =>{
        this.setState({name : e.target.value});
        
    };
    changeCity = e =>{
        this.setState({city : e.target.value});
        
    };
    changePhone = e =>{
        this.setState({phone : e.target.value});
        
    };

    componentDidUpdate() {
        if(this.props.newOrderStatus.finished && !this.props.newOrderStatus.error )
        this.props.history.replace("/orders");
    }

    saveOrder = () => {
          const newOrder = {
      userId: this.props.userId,        
      orts: this.props.ingredients,
      dun: this.props.price,
      hayag: {
        name: this.state.name,
        city: this.state.city,
        phone: this.state.phone
      }
    };
    
    this.props.saveOrderAction(newOrder)

    // this.setState({ loading: true });
    // axios.post("/orders.json", order)
    //   .then(response => {
    //       console.log("order amjilttai");
    //   })
    //   .catch(error => {console.log("aldgaa garlaa" + error)})
    //   .finally(() => {
    //     this.setState({ loading: false });
    //     this.props.history.replace("/orders")
    //   }); 
    }

    render(){
        return <div className={css.ContactData}>
            <div>
                {this.props.newOrderStatus.error && `Алдаа гарлаа: ${this.props.newOrderStatus.error}`}
            </div>
            {this.props.newOrderStatus.saving ? <Spinner /> : (
                <div> 
                    <p><strong>Бүргэрийн үнэ: {this.props.price} ₮</strong></p>
                     <input onChange={this.changeName} type = "text" name = "name" placeholder = "Таны нэр"></input> 
            <input onChange={this.changeCity}type = "text" name = "city" placeholder = "Хаяг"></input>
            <input onChange={this.changePhone} type = "text" name = "phone" placeholder = "Холбогдох дугаар"></input>
            <Button text="ИЛГЭЭХ " btnType="Success" daragdsan={this.saveOrder} />
                </div>
            )}
           
            </div>
    }
}
 const mapStateToProps = state => {
     return {
        price: state.burgerReducer.totalPrice,
        ingredients: state.burgerReducer.ingredients,
        newOrderStatus: state.orderReducer.newOrder,
        userId: state.signupLoginReducer.userId 
     }
 }

 const mapDispatchToProps = dispatch =>{
     return {
        saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder))
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData ));
 