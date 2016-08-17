'use strict';

import React from 'react';
import PhoneContent from './PhoneContent';
import './phone.css';

export default class Phone extends React.Component {
  render() {
    return (
      <div className="phone">
        <div className="phone-inner">
          <div className="phone-header"></div>
          <PhoneContent />
          <div className="phone-footer"></div>
        </div>
      </div>
    );
  }
}
