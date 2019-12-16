import React from 'react';
import moment from 'moment';
export default class InactiveCardReceipt extends React.Component {
    render() {
        const { inactiveCardReceipt } = this.props;
        return (<div style={{ fontSize: '12px' }}>
					<div>欢迎下次光临</div>
					<br />
					<div style={{ textAlign: 'center', fontWeight: 'bolder' }}>
						{inactiveCardReceipt.examinationCenterName}
					</div>
					<br />
					<div>单　　号：{inactiveCardReceipt.consume.orderNo}</div>
					<div>教　　练：{inactiveCardReceipt.endCoachName}</div>
					<div>驾　　校：{inactiveCardReceipt.endCoachSchoolName}</div>
					<div>驾照类型：{inactiveCardReceipt.carDriverLicenseTypeName}</div>
					<div>科　　目：{inactiveCardReceipt.carExamSubjectName}</div>
					<div>练车人数：{inactiveCardReceipt.studentCout}</div>
					<div>训练车号：{inactiveCardReceipt.carCode}</div>
					<div>开卡时间：{moment(inactiveCardReceipt.startTime).format('YYYY-MM-DD HH:mm:ss')}</div>
					<div>退卡时间：{moment(inactiveCardReceipt.endTime).format('YYYY-MM-DD HH:mm:ss')}</div>
					<div>练车时长：{inactiveCardReceipt.usedTime}</div>
					<div>免计时长：{inactiveCardReceipt.freeTime}</div>
					<div>暂停时长：{inactiveCardReceipt.pauseTime}</div>
					<div>免费时长：{inactiveCardReceipt.discountTime}</div>
					<div>免费理由：{inactiveCardReceipt.discountReason}</div>
					<div>计费时长：{inactiveCardReceipt.usedTimeSubFeeTime}</div>
					<div>
						应收费用：<span style={{ fontWeight: 'bold' }}>
							
						</span>
					</div>
					<br />
					<br />
					<hr />
				</div>);
    }
}
