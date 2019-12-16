import React from 'react';
export default class data extends React.Component {
    render() {
        const { data } = this.props;
        return (<div style={{
            fontSize: '14px',
            padding: "172px 0 20px 210px",
            lineHeight: "23px"
        }}>
				<div>
					<div style={{ float: 'left' }}>{data.customername}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div>
					<div style={{ width: 300, float: 'left' }}>{data.bankcode}</div>
					<div style={{ float: 'left' }}>{data.accountnumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            marginTop: 32,
            lineHeight: "23px"
        }}>
					<div style={{ float: 'left' }}>{data.accountopennumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            marginTop: 22,
            lineHeight: "23px"
        }}>
					<div style={{ float: 'left' }}>{data.customername1}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            lineHeight: "23px"
        }}>
					<div style={{ float: 'left' }}>{data.address}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            lineHeight: "22px"
        }}>
					<div style={{ float: 'left' }}>{data.postalcode}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            lineHeight: "23px"
        }}>
					<div style={{ float: 'left' }}>{data.phonenumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            lineHeight: "22px"
        }}>
					<div style={{ float: 'left' }}>{data.registered}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            lineHeight: "23px"
        }}>
					<div>{data.typeof}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            lineHeight: "22px"
        }}>
					<div>{data.documentnumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            lineHeight: "30px"
        }}>
					<div>{data.businessscope}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            paddingLeft: 80,
            lineHeight: "23px"
        }}>
					<div>{data.name}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            paddingLeft: 80,
            lineHeight: "23px"
        }}>
					<div>{data.typedocument}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            paddingLeft: 80,
            lineHeight: "23px"
        }}>
					<div>{data.idnumber}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            marginTop: 27,
            paddingLeft: 80,
            lineHeight: "30px"
        }}>
					<div>{data.thesuperior}</div>
					<div style={{ clear: 'both' }}></div>
				</div>

				<div style={{
            paddingLeft: 80,
            lineHeight: "23px"
        }}>
					<div>{data.thename}</div>
					<div style={{ clear: 'both' }}></div>
				</div>
        
				<div style={{
            paddingLeft: 80,
            lineHeight: "23px"
        }}>
					<div>{data.name1}</div>
					<div style={{ clear: 'both' }}></div>
				</div>
        
				<div style={{
            paddingLeft: 80,
            lineHeight: "23px"
        }}>
					<div>{data.typedocument1}</div>
					<div style={{ clear: 'both' }}></div>
				</div>
        
				<div style={{
            paddingLeft: 80,
            lineHeight: "23px"
        }}>
					<div>{data.idnumber1}</div>
					<div style={{ clear: 'both' }}></div>
				</div>
			</div>);
    }
}
