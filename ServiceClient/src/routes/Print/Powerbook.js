import React from 'react';
export default class Powerbook extends React.Component {
    render() {
        const { powerbook } = this.props;
        return (<div style={{
            fontSize: '20px',
            padding: "220px 50px 0 60px"
        }}>
				<div style={{ height: '50px' }}>
					<span style={{ marginLeft: '105px', marginRight: '5px' }}>{powerbook.sname}</span>
				</div>
				<div style={{ height: '160px' }}>
					<div style={{ height: '15px' }}></div>
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.name_1}</span><br />
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.type_1}</span><br />
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.number_1}</span><br />
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.phoneNumber_1}</span><br />
				</div>
				<div style={{ height: '190px', marginTop: '80px' }}>
					<div style={{ height: '30px' }}></div>
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.name_2}</span><br />
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.type_2}</span><br />
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.number_2}</span><br />
					<span style={{ marginLeft: '105px', marginTop: '27px', display: 'inline-block' }}>{powerbook.phoneNumber_2}</span><br />
				</div>
			</div>);
    }
}
