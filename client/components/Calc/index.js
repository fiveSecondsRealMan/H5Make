/**
  计算器组件入口文件
**/

'use strict';

import "./css/common.css";
import { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export default class Counter extends Component {
  render() {
    let { increment, decrement, incrementOdd, incrementAsync, counter } = this.props;

    return (
      <div className="counter">
        clicked: { counter } times
        <button onClick={ increment }>+</button>
        <button onClick={ decrement }>-</button>
        <button onClick={ incrementOdd }>increment odd</button>
        <button onClick={ incrementAsync }> increment async </button>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired
};
