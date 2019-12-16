import React from 'react';
export default class Shouqunweituoshu1 extends React.Component {
    render() {
        const { data } = this.props;
        return (<div style={{
            fontSize: '14px',
            padding: "150px 130px"
        }}>

				<div style={{ marginLeft: 55, height: 30 }}>
					<div style={{ float: 'left' }}>{data.bankName}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 90, marginLeft: 120, height: 30 }}>
					<div style={{ float: 'left', width: 300 }}>{data.name}</div>
					<div style={{ float: 'left' }}>{data.idType}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 15, marginLeft: 30, height: 30 }}>
					<div style={{ float: 'left', width: 220 }}>{data.idNumber}</div>
					<div style={{ float: 'left' }}>{data.post}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 50, marginLeft: 160 }}>
					<div style={{ float: 'left' }}>{data.name1}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 185, marginLeft: 105 }}>
					<div style={{ float: 'left', width: 260 }}>{data.name2}</div>
					<div style={{ float: 'left' }}>{data.idNumber2}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 25, marginLeft: 365 }}>
					<div style={{ float: 'left' }}>{data.name3}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 30, marginLeft: 40 }}>
					<div style={{ float: 'left', width: 280 }}>{data.idNumber3}</div>
					<div style={{ float: 'left' }}>{data.phone3}</div>
					<div style={{ clear: "both" }}></div>
				</div>

			</div>);
    }
}
