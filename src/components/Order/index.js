import React from 'react';
import css from "./style.module.css";

const Order = (props) =>{
    {/* {console.log(props.order)}   */} 
return <div className={css.Order}>
    <p>Хэргэлэгчийн нэр: {props.order.hayag.name} |{props.order.hayag.phone} | {props.order.hayag.city}</p>
    <p>Үнийн дүн: {props.order.dun}₮</p>
    <p>Бүргэрийн орц: </p>
    <p>Гахайн мах: {props.order.orts.bacon}ш | Салад:{props.order.orts.salad}ш | Үхрийн мах {props.order.orts.meat}ш | Бяслаг {props.order.orts.cheese}ш </p>
    
</div> };

export default Order;