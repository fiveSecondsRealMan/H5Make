'use strict';

import React from 'react';
import DialogContent from './DialogContent';
import DialogFooter from './DialogFooter';
import './dialog.css';

export default class Dialog extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="dialog dialog-appearance">
        <div className="dialog-inner">

          {/* 对话框 header */}
          <div className="dialog-header clearfix">
            <a className="fr dialog-close-btn" href="javascript:;">×</a>
            <span className="dialog-title">{ title }</span>
          </div>

          {/* 对话框 content */}
          <DialogContent />

          {/* 对话框 footer */}
          <DialogFooter />

        </div>
      </div>
    );
  }
}
