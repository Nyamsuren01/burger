import React, { Component } from "react";

import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Burger from "../../components/Burger";
import Spinner from "../../components/General/Spinner";

class BurgerPage extends Component {
  state = {
    confirmOrder: false
    
  };
   continueOrder = () => {
  this.props.history.push('/ship');

};
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
   
    return (
       
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              
            />
          )}
        </Modal>

        {/* {this.state.loading && <Spinner />} */}

        
        <Burger />
        <BuildControls
          showConfirmModal={this.showConfirmModal}        
          disabled={!this.props.purchasing}          
          ortsHasah={this.props.burgereesOrtsHas}
          ortsNemeh={this.props.burgertOrtsNem}
        />
      </div>
    );
  }
}


export default BurgerPage; 
