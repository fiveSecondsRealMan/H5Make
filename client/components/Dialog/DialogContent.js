/**
  对话框内容
**/

'use strict';

import React from 'react';

export default class DialogContent extends React.Component {
  render() {
    return (
      <ul className="dialog-content">
        <li className="item">
          <input type="text" placeholder="用户名" name="username" />
        </li>
        <li className="item">
          <input type="password" placeholder="密码" name="password" />
        </li>
      </ul>
    );
  }
}
