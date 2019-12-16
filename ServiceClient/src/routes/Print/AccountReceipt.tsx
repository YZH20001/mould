import React from 'react';
import moment from 'moment';

export default class AccountReceipt extends React.Component {
	render() {
		const { accountReceipt } = this.props;
		return (
				<div style={{ fontSize: '12px' }}>
					<div style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '14px' }}>
						{accountReceipt.examinationCenterName}
					</div>
					<br />
					<div style={{ textAlign: 'center', fontWeight: 'bolder', lineHeight: 1.5 }}>{
						accountReceipt.title
					}</div>
					<br />
					<div>客　　户：{accountReceipt.coachName}</div>
					<div>驾　　校：{accountReceipt.schoolName}</div>
					<div>金　　额：<FormattedNumber value={accountReceipt.amount ? accountReceipt.amount : 0} minimumFractionDigits={2} /></div>
					<div>备　　注：{accountReceipt.note}</div>
					<br />
					<br />
					<hr />
				</div>
		);
	}
}
