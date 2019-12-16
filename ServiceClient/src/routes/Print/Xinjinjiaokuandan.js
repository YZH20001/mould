import React from 'react';
import { digitUppercase } from '../../utils/digitUppercase';
export default class Dayin extends React.Component {
    render() {
        const { xinjinjiaokuandan } = this.props;
        console.log(xinjinjiaokuandan);
        return (<div style={{
            padding: "35px 20px 0 20px",
            lineHeight: "30px",
            fontSize: '16px',
        }}>
				<div style={{
            paddingBottom: "10px",
            marginLeft: 270,
            width: 150
        }}>
					<div style={{
            width: "45px",
            float: "left"
        }}>{xinjinjiaokuandan.nian}</div>
					<div style={{
            width: '45px',
            float: "left"
        }}>{xinjinjiaokuandan.yue}</div>
					<div style={{
            width: '45px',
            float: "left"
        }}>{xinjinjiaokuandan.ri}</div>
				</div>

				<div>
					<div style={{
            float: 'left',
            marginLeft: '120px',
            width: '300px'
        }}>
						{xinjinjiaokuandan.accountName}
					</div>
					<div style={{
            float: 'left'
        }}>
						{xinjinjiaokuandan.openingBank}
					</div>
					<div style={{ clear: "both" }}></div>
				</div>
				<div>
					<div style={{
            float: 'left',
            marginLeft: '120px',
            width: '300px'
        }}>
						{xinjinjiaokuandan.accountNumber}
					</div>
					<div style={{
            float: 'left'
        }}>
						{xinjinjiaokuandan.abstract}
					</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div>
					<div style={{
            float: 'left',
            marginLeft: '120px',
            width: '250px'
        }}>
						{digitUppercase(xinjinjiaokuandan.money)}
					</div>
					<div style={{
            float: 'right',
            marginRight: 15,
            letterSpacing: "8px"
        }}>
						{"￥" + xinjinjiaokuandan.money}
					</div>
					<div style={{ clear: "both" }}></div>
				</div>
			</div>);
    }
}
