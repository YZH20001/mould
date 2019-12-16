import React from 'react';
export default class Shouqunweituoshu2 extends React.Component {
    render() {
        const { data } = this.props;
        return (<div style={{
            fontSize: '14px',
            padding: "140px 140px"
        }}>
				<div style={{ marginLeft: 65, height: 30 }}>
					<div style={{ float: 'left' }}>{data.bankName}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 15, marginLeft: 120, height: 30 }}>
					<div style={{ float: 'left', width: 220 }}>{data.name}</div>
					<div style={{ float: 'left' }}>{data.idType}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 15, marginLeft: 30, height: 30 }}>
					<div style={{ float: 'left', width: 240 }}>{data.idNumber}</div>
					<div style={{ float: 'left', width: 150 }}>{data.department}</div>
					<div style={{ float: 'left' }}>{data.post}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{ marginTop: 500, marginLeft: 90 }}>
					<div style={{ float: 'left' }}>{data.other}</div>
					<div style={{ clear: "both" }}></div>
				</div>

			</div>);
    }
}
