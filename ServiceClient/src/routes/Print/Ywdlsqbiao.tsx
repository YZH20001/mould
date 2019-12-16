import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';

export default class Ywdlsqbiao extends React.Component {
    render() {
        const { ywdlsqbiao } = this.props;
        return (
            <div
                style={{
                    fontSize: '20px',
                    lineHeight: '40px',
                    marginLeft: '50px',
                    padding: "230px 50px 0 50px"
                }}
            >
                <div style={{ marginLeft: 60 }}>{ywdlsqbiao.customername}</div>
                <div style={{ marginLeft: 60, marginTop: 40 }}>
                    <div style={{ width: '55%', float: 'left' }}>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.name}</div>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.certificatetype}</div>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.idnumber}</div>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.contactnumber}</div>
                    </div>
                    <div style={{ width: '45%', float: 'left' }}>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.name2}</div>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.certificatetype2}</div>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.idnumber2}</div>
                        <div style={{ height: '40px' }}>{ywdlsqbiao.contactnumber2}</div>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
                <div style={{ marginLeft: 60, marginTop: 50 }}>
                    <div style={{ height: '40px' }}>{ywdlsqbiao.name1}</div>
                    <div style={{ height: '40px' }}>{ywdlsqbiao.certificatetype1}</div>
                    <div style={{ height: '40px' }}>{ywdlsqbiao.idnumber1}</div>
                    <div style={{ height: '40px' }}>{ywdlsqbiao.contactnumber1}</div>
                </div>
            </div>
        );
    }
}
