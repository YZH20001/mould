import React from 'react';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';
export default class IOU extends React.Component {
    render() {
        const { iou } = this.props;
        return (<div style={{
            fontSize: '20px',
            lineHeight: '40px',
            marginLeft: '50px',
            marginRight: '50px'
        }}>
				<br />
				<br />
				<span>　　　　　　　　</span>
				<span>{iou.endCoachSchoolName}</span>
				<span>　　　　　　　　　　　　　</span>
				<span>{iou.usedTimeSubFeeTime}</span>
				<br />
				<span>　　　　　　</span>
				<span>{iou.consume.realFee}</span>
				<span>　　　　　</span>
				<span>{chinesesCurrencyFormatter(iou.consume.realFee)}</span>
			</div>);
    }
}
