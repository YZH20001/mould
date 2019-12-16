import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';

export default class Danweixinxidengjibiao extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          fontSize: '14px',
          padding: "250px 20px 0 100px",
          lineHeight: "32px"
        }}
      >

        <div style={{ marginLeft: 90, height: 32 }}>
          <div style={{
            width: "360px",
            float: "left"
          }}>{data.company}</div>
          <div style={{
            float: "left"
          }}>{data.code}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ marginTop: 70, height: 32 }}>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.shareholders}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.identity}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number}</div>
          <div style={{
            width: "110px",
            float: "left"
          }}>{data.date}</div>
          <div style={{
            width: "40px",
            float: "left"
          }}>{data.proportion}</div>
          <div style={{
            float: "left"
          }}>{data.or}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ height: 32 }}>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.shareholders1}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.identity1}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number1}</div>
          <div style={{
            width: "110px",
            float: "left"
          }}>{data.date1}</div>
          <div style={{
            width: "40px",
            float: "left"
          }}>{data.proportion1}</div>
          <div style={{
            float: "left"
          }}>{data.or1}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ height: 32 }}>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.shareholders2}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.identity2}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number2}</div>
          <div style={{
            width: "110px",
            float: "left"
          }}>{data.date2}</div>
          <div style={{
            width: "40px",
            float: "left"
          }}>{data.proportion2}</div>
          <div style={{
            float: "left"
          }}>{data.or2}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ height: 32 }}>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.shareholders3}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.identity3}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number3}</div>
          <div style={{
            width: "110px",
            float: "left"
          }}>{data.date3}</div>
          <div style={{
            width: "40px",
            float: "left"
          }}>{data.proportion3}</div>
          <div style={{
            float: "left"
          }}>{data.or3}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ marginTop: 65, height: 32 }}>
          <div style={{
            width: "60px",
            float: "left"
          }}>{data.type}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.name}</div>
          <div style={{
            width: "90px",
            float: "left"
          }}>{data.identity4}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number4}</div>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.date4}</div>
          <div style={{
            float: "left"
          }}>{data.address}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ height: 32 }}>
          <div style={{
            width: "60px",
            float: "left"
          }}>{data.type1}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.name1}</div>
          <div style={{
            width: "90px",
            float: "left"
          }}>{data.identity5}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number5}</div>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.date5}</div>
          <div style={{
            float: "left"
          }}>{data.address1}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ marginTop: 65, height: 32 }}>
          <div style={{
            width: "60px",
            float: "left"
          }}>{data.type2}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.name2}</div>
          <div style={{
            width: "90px",
            float: "left"
          }}>{data.identity6}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number6}</div>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.date6}</div>
          <div style={{
            float: "left"
          }}>{data.address2}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{ marginTop: 65, height: 32 }}>
          <div style={{
            width: "60px",
            float: "left"
          }}>{data.type3}</div>
          <div style={{
            width: "105px",
            float: "left"
          }}>{data.name3}</div>
          <div style={{
            width: "90px",
            float: "left"
          }}>{data.identity7}</div>
          <div style={{
            width: "125px",
            float: "left"
          }}>{data.number7}</div>
          <div style={{
            width: "120px",
            float: "left"
          }}>{data.date7}</div>
          <div style={{
            float: "left"
          }}>{data.address3}</div>
          <div style={{ clear: "both" }}></div>
        </div>

      </div>
    );
  }
}
