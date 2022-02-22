import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../redux/actions/burgerActions";

import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {
  const disabledIngredients = { ...props.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
  return (
    
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientsNames).map(el => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          disabled={disabledIngredients}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={props.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    purchasing: !state.burgerReducer.purchasing,
    ingredientsNames : state.burgerReducer.ingredientNames,
  };
};

const mapDispatchToProps =  dispatch => {
  return { 
  ortsNemeh: orts => dispatch(actions.addIngredient(orts)),
  ortsHasah: orts => dispatch(actions.removeIngredient(orts))
};
};

export default connect(mapStateToProps,mapDispatchToProps)(BuildControls) ;
