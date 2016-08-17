/**
  对话框底部
**/

'use strict';

import React from 'react';

export default class DialogFooter extends React.Component {
  render() {
    return (
      <div className="dialog-footer">
        <a className="btn" href="javascript:;" style={{ backgroundColor: '#f34254' }}>登录</a>
      </div>
    );
  }
}
