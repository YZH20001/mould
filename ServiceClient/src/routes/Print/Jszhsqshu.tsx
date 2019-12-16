import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';
import { digitUppercase } from '../../utils/digitUppercase'

export default class Jszhsqshu extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          fontSize: '14px',
          padding: "200px 0 20px 215px",
          lineHeight: "35px"
        }}>
        <div style={{
        }}>
          {data.accounttitle}
        </div>
        <div style={{
        }}>
          {data.bankname}
        </div>
        <div >
          <div style={{
            float:"left",
            width:270
          }}>
            {data.bankcode}
          </div>
          <div style={{
            float:"left"
          }}>
            {data.account}
          </div>
          <div style={{clear:"both"}}></div>
        </div>
        <div style={{
          height: 35
        }}>
        </div>
        <div style={{
        }}>
          {data.accountnumber}
        </div>
        <div style={{
        }}>
          {data.pinreasons}
        </div>
      </div>
    );
  }
}