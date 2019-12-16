import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';

export default class KailiApplyBook extends React.Component {
	render() {
		const { kailiApplyBook } = this.props;
		return (
			<div
				style={{
					fontSize: '14px',
					padding: "122px 0 20px 210px",
					lineHeight: "30px"
				}}
			>
				<div>
					<div style={{ width: 370, float: 'left' }}>{kailiApplyBook.sname}</div>
					<div style={{ float: 'left' }}>{kailiApplyBook.phoneNumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div>
					<div style={{ width: 370, float: 'left' }}>{kailiApplyBook.address}</div>
					<div style={{ float: 'left' }}>{kailiApplyBook.postCode}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					lineHeight: "22px"
				}}>
					<div style={{ width: 300, float: 'left' }}>{kailiApplyBook.depositorsType}</div>
					<div style={{ float: 'left' }}>{kailiApplyBook.organization}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					paddingLeft: 80,
					lineHeight: "22px"
				}}>
					<div style={{ float: 'left' }}>{kailiApplyBook.name}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					paddingLeft: 80,
					lineHeight: "22px"
				}}>
					<div style={{ width: 260, float: 'left' }}>{kailiApplyBook.paperType}</div>
					<div style={{ float: 'left' }}>{kailiApplyBook.paperNumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					marginTop: 40,
					lineHeight: "22px"
				}}>
					<div style={{ width: 300, float: 'left' }}>{kailiApplyBook.zijin}</div>
					<div style={{ float: 'left' }}>{kailiApplyBook.addressDaima}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					lineHeight: "22px"
				}}>
					<div style={{ float: 'left' }}>{kailiApplyBook.business}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					lineHeight: "22px"
				}}>
					<div style={{ width: 300, float: 'left' }}>{kailiApplyBook.paperWenjian}</div>
					<div style={{ float: 'left' }}>{kailiApplyBook.paperBianhao}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					marginTop: 22,
					lineHeight: "40px"
				}}>
					<div>{kailiApplyBook.tax}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					marginTop: 44,
					lineHeight: "22px"
				}}>
					<div style={{ width: 350, float: 'left' }}>{kailiApplyBook.ziJiNature}</div>
					<div style={{ width: 10, float: 'left' }}>{kailiApplyBook.date && kailiApplyBook.date.year()}</div>
					<div style={{ width: 10, float: 'left' }}>{kailiApplyBook.date && kailiApplyBook.date.monnth() + 1}</div>
					<div>{kailiApplyBook.date && kailiApplyBook.date.day()}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					marginTop: 27,
					lineHeight: "30px"
				}}>
					<div>{kailiApplyBook.directorName}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					paddingLeft: 80,
					lineHeight: "22px"
				}}>
					<div style={{ width: 260, float: 'left' }}>{kailiApplyBook.cunkuanZhangHu}</div>
					<div>{kailiApplyBook.zuZhiJiGou}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					paddingLeft: 80,
					lineHeight: "22px"
				}}>
					<div>{kailiApplyBook.fadingDaiBiaoName}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					paddingLeft:80,
					lineHeight: "22px"
				}}>
					<div>{kailiApplyBook.fadingDaiBiaoType}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
					paddingLeft:80,
					lineHeight: "22px"
				}}>
					<div>{kailiApplyBook.fadingDaiBiaoNumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>
			</div>
		);
	}
}
