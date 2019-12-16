import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';

export default class Registration extends React.Component {
	render() {
		const { registration } = this.props;
		return (
			<div
				style={{
					fontSize: '14px',
					padding:"135px 0 0 145px",
					lineHeight:"22px"
				}}
			>
				<div style={{marginLeft:438}}>
					<div style={{ float: 'left', width:40 }}>{registration.year_1}</div>
					<div style={{ float: 'left', width:40 }}>{registration.month_1}</div>
					<div style={{ float: 'left' }}>{registration.day_1}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:22}}>
					<div style={{ float: 'left', width:260 }}>{registration.name_1}</div>
					<div style={{ float: 'left' }}>{registration.name_pinyin}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{}}>
					<div style={{ float: 'left', width:160 }}>{registration.gender_1}</div>
					<div style={{ float: 'left', width:200 }}>{registration.nationality_1}</div>
					<div style={{ float: 'left' }}>{registration.phoneNumber}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:40}}>
					<div style={{ float: 'left', width:375  }}>{registration.number_1}</div>
					<div style={{ float: 'left', width:40 }}>{registration.year_2}</div>
					<div style={{ float: 'left', width:30 }}>{registration.month_2}</div>
					<div style={{ float: 'left' }}>{registration.day_2}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{}}>
					<div style={{ float: 'left' }}>{registration.license}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginLeft:80}}>
					<div style={{ float: 'left', width:150 }}>{registration.often_address1}</div>
					<div style={{ float: 'left', width:130 }}>{registration.often_address2}</div>
					<div style={{ float: 'left' }}>{registration.often_address3}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginLeft:80}}>
					<div style={{ float: 'left', width:150 }}>{registration.unit_address1}</div>
					<div style={{ float: 'left', width:130 }}>{registration.unit_address2}</div>
					<div style={{ float: 'left' }}>{registration.unit_address3}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:150, marginLeft:200}}>
					<div style={{ float: 'left' }}>{registration.number_2}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:50 }}>
					<div style={{ float: 'left', width:160 }}>{registration.name_2}</div>
					<div style={{ float: 'left', width:200 }}>{registration.gender_2}</div>
					<div style={{ float: 'left' }}>{registration.nationality_2}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:40 }}>
					<div style={{ float: 'left', width:375 }}>{registration.number_3}</div>
					<div style={{ float: 'left', width:40 }}>{registration.year_3}</div>
					<div style={{ float: 'left', width:30 }}>{registration.month_3}</div>
					<div style={{ float: 'left' }}>{registration.day_3}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{}}>
					<div style={{ float: 'left', width:275 }}>{registration.license2}</div>
					<div style={{ float: 'left' }}>{registration.phoneNumber2}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{}}>
					<div style={{ float: 'left', width:150 }}>{registration.province}</div>
					<div style={{ float: 'left', width:130 }}>{registration.city}</div>
					<div style={{ float: 'left' }}>{registration.area}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:50 }}>
					<div style={{ float: 'left' }}>{registration.why}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:22 }}>
					<div style={{ float: 'left' }}>{registration.marriage}</div>
					<div style={{ float: 'left' }}>{registration.record}</div>
					<div style={{ float: 'left' }}>{registration.family_number}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:50 }}>
					<div style={{ float: 'left' }}>{registration.unit_name}</div>
					<div style={{ float: 'left' }}>{registration.unit_number}</div>
					<div style={{ float: 'left' }}>{registration.email}</div>
					<div style={{ clear: "both" }}></div>
				</div>

				<div style={{marginTop:100 }}>
					<div style={{ float: 'left' }}>{registration.type_number}</div>
					<div style={{ clear: "both" }}></div>
				</div>

			</div>
		);
	}
}
