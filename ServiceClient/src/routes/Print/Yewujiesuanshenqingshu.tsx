import React from 'react';
import moment from 'moment';
import { digitUppercase } from '../../utils/digitUppercase';
import { formatCurrency } from '../../utils/formatCurrency';

export default class Yewujiesuanshenqingshu extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          fontSize: '14px',
          padding: "60px 20px 0 20px"
        }}>
        <div style={{
          paddingBottom: 25,
          marginLeft: 310,
          width: 150
        }}>
          <div style={{
            width: "45px",
            float: "left"
          }}>{data.year}</div>
          <div style={{
            width: '30px',
            float: "left"
          }}>{data.month}</div>
          <div style={{
            width: '30px',
            float: "left"
          }}>{data.day}</div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div>
          <div style={{
            float: "left",
            marginLeft: 150,
            width: 350
          }}>
            {data.designation}
          </div>
          <div style={{
            float: "left"
          }}>
            {data.designation1}
          </div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{
          marginTop: 12
        }}>
          <div style={{
            float: "left",
            marginLeft: 150,
            width: 350
          }}>
            {data.account}
          </div>
          <div style={{
            float: "left"
          }}>
            {data.account2}
          </div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{
          marginTop: 12
        }}>
          <div style={{
            float: "left",
            marginLeft: 150,
            width: 350
          }}>
            {data.telephone}
          </div>
          <div style={{
            float: "left",
            width: 100
          }}>
            {data.provice}
          </div>
          <div style={{
            float: "left"
          }}>
            {data.city}
          </div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{
          marginTop: 12
        }}>
          <div style={{
            float: "left",
            marginLeft: 150,
            width: 350
          }}>
            {data.account1}
          </div>
          <div style={{
            float: "left"
          }}>
            {data.account3}
          </div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{
          marginTop: 12
        }}>
          <div style={{
            float: "left",
            marginLeft: 50,
            width: 120
          }}>
            {data.currency}
          </div>
          <div style={{
            float: "left"
          }}>
            {digitUppercase(data.money)}
          </div><div style={{
            float: "right",
            letterSpacing: 8,
            marginRight: 30,
            marginTop: 8
          }}>
            {formatCurrency(data.money)}
          </div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div style={{
          marginTop: 45
        }}>
          <div style={{
            float: "left",
            marginLeft: 50,
            width: 350
          }}>
            {data.account4}
          </div>
          <div style={{
            float: "left"
          }}>
            <div style={{
              marginTop: 4
            }}>
              <div style={{
                float: "left",
                width: 125
              }}>
                {data.nationality}
              </div>

              <div style={{
                float: "left"
              }}>
                {data.type}
              </div>
              <div style={{ clear: "both" }}></div>
            </div>

            <div style={{
              marginTop: 12
            }}>
              <div style={{
                float: "left",
                width: 125
              }}>
                {data.professional}
              </div>

              <div style={{
                float: "left"
              }}>
                {data.number}
              </div>

              <div style={{ clear: "both" }}></div>
            </div>


            <div style={{
              marginTop: 15
            }}>
              <div style={{
                float: "left",
                width: 300
              }}>
                {data.extra}
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    );
  }
}