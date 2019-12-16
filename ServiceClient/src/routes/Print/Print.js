import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Xinjinjiaokuandan from './Xinjinjiaokuandan';
class Print extends React.Component {
    render() {
        const { dispatch, activeCardReceipt = {}, inactiveCardReceipt = {}, iou = {}, accountReceipt = {} } = this.props;
        return (<div>
				<Button onClick={() => {
            dispatch({
                type: "print/printIOU"
            });
        }}>测试</Button>
				<div>
					<div style={{ width: '830px', border: '1px solid black' }}>
						<Xinjinjiaokuandan xinjinjiaokuandan={{ accountName: "云南旅游学院", openingBank: "中信银行", accountNumber: "600000", abstract: "寄款", money: "5000" }}/>
					</div>
				</div>
			</div>);
    }
}
Print = connect((state) => {
    return Object.assign({}, state.print);
})(Print);
export default Print;
