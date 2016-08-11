/**
  前端入口文件
  曾文彬
  2016.8.11
**/

'use strict';

import Button from 'components/Calc';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CalcActions from 'actions/calc';


export default connect(
  // state数据绑定到props
  state => {
    return {
      counter: state.counter
    };
  }
  // action绑定到props
  dispatch => bindActionCreators(CalcActions, dispatch)
)(Button);

/*
 connect方法
 react-redux提供了让redux更方便操作react的方法
*/
