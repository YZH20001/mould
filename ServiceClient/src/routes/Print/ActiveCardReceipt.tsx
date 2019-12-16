import React from 'react';
import moment from 'moment';

export default class ActiveCardReceipt extends React.Component {
	render() {
		const { activeCardReceipt } = this.props;
		return (
			<div style={{ fontSize: '12px' }}>
				<div>欢迎光临</div>
				<br />
				<div style={{ textAlign: 'center', fontWeight: 'bolder' }}>
					{activeCardReceipt.examinationCenterName}
				</div>
				<br />
				<div>
					{activeCardReceipt.isUnitDurationOrder ? '学　　员' : '教　　练'}：{activeCardReceipt.personName}
				</div>
				<div>驾　　校：{activeCardReceipt.schoolName}</div>
				<div>驾照类型：{activeCardReceipt.carDriverLicenseTypeName}</div>
				<div>科　　目：{activeCardReceipt.carExamSubjectName}</div>
				<div>训练车号：{activeCardReceipt.carCode}</div>
				<div>开卡时间：{moment(activeCardReceipt.startTime).format('YYYY-MM-DD HH:mm:ss')}</div>
				<br />
				<br />
				<hr />
			</div>
		);
	}
}
