import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/appleActions';
import AppleItem from './AppleItem.jsx';
import Button from './Button.jsx';

class AppleBasket extends React.Component {
  calculateSummary() {
    let summary = {
      appleCurrent: {
        quantity: 0,
        weight: 0
      },
      appleConsumed: {
        quantity: 0,
        weight: 0
      }
    };

    let { apples } = this.props;
      apples.forEach(apple => {
      let select = apple.eaten ? 'appleConsumed' : 'appleCurrent';
      summary[select].quantity++;
      summary[select].weight += apple.weight;
    });
    return summary;
  }

  getAppleItem() {
    let { actions } = this.props;
    let { apples } = this.props;
    let appleList = [];
    apples.forEach(apple => {
      if (!apple.eaten) {
        appleList.push(<AppleItem apple={apple} eatApple={actions.eatApple} key={apple.id} />)
      }
    });
    if (!appleList.length) {
      appleList.push(<div key="empty">basket is empty now</div>)
    }
    return appleList;
  }

  render() {
    let { actions } = this.props;
    let { picking } = this.props;
    let summary = this.calculateSummary();
    let {
      appleCurrent: {
        quantity: leftQuantity,
        weight: leftWeight
      },
      appleConsumed: {
        quantity: consumedQuantity,
        weight: consumedWeight
      }
    } = summary;
    return (<div className="basket">
      <div className="title">Apple Basket</div>
      <div className="info-board">
        <div className="current">
          <div className="head">
            Current
                </div>
          <div className="content">
            {leftQuantity} Apples, {leftWeight} kg
                </div>
        </div>
        <div className="consume">
          <div className="head">
            Consume
                </div>
          <div className="content">
            {consumedQuantity} Apple, {consumedWeight} kg
                </div>
        </div>
      </div>
      <div className="item-list">
        {this.getAppleItem()}
      </div>
      <div className="btn-pick">
        <Button picking={picking} pickApple={actions.stratPickApple} />
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
  apples: state.apples,
  picking: state.picking,
  } 
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket);