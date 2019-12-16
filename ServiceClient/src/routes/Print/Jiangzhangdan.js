import React from 'react';
import { digitUppercase } from '../../utils/digitUppercase';
export default class Jiangzhangdan extends React.Component {
    render() {
        const { jiangzhangdan } = this.props;
        return (<div style={{
            fontSize: '14px',
            padding: "45px 20px 0 20px"
        }}>
                <div style={{
            paddingBottom: "10px",
            marginLeft: 250,
            width: 150
        }}>
                    <div style={{
            width: "45px",
            float: "left"
        }}>{jiangzhangdan.year}</div>
                    <div style={{
            width: '45px',
            float: "left"
        }}>{jiangzhangdan.month}</div>
                    <div style={{
            width: '45px',
            float: "left"
        }}>{jiangzhangdan.day}</div>
                </div>
                <div style={{
            paddingTop: "10px"
        }}>
                    <div style={{}}>
                        <div style={{
            float: "left",
            marginLeft: "135px",
            width: "275px"
        }}>{jiangzhangdan.chupiaorenqc}</div>
                        <div style={{
            float: "left"
        }}>{jiangzhangdan.shoukuanrenqc}</div>
                        <div style={{ clear: "both" }}></div>
                    </div>

                    <div style={{
            marginTop: "6px"
        }}>
                        <div style={{
            float: "left",
            marginLeft: "135px",
            width: "275px"
        }}>{jiangzhangdan.chupiaorenzh}</div>
                        <div style={{
            float: "left",
        }}>{jiangzhangdan.shoukuanrenzh}</div>
                        <div style={{ clear: "both" }}></div>
                    </div>

                    <div style={{
            marginTop: "6px"
        }}>
                        <div style={{
            float: "left",
            marginLeft: "135px",
            width: "275px"
        }}>{jiangzhangdan.chupiaorenkhyh}</div>
                        <div style={{
            float: "left"
        }}>{jiangzhangdan.shoukuanrenkhyh}</div>
                        <div style={{ clear: "both" }}></div>
                    </div>

                    <div style={{
            marginTop: "20px"
        }}>
                        <div style={{
            float: "left",
            marginLeft: "135px",
            width: "200px"
        }}>
                            {digitUppercase(jiangzhangdan.renminbi)}</div>
                        <div style={{
            float: "right",
            letterSpacing: "8px",
            marginRight: "22px"
        }}>￥{jiangzhangdan.renminbi}</div>
                        <div style={{ clear: "both" }}></div>
                    </div>

                    <div style={{}}>
                        <div style={{
            marginTop: "8px"
        }}>
                            <div style={{
            float: "left",
            marginLeft: "135px",
            width: "150px",
            marginTop: "8px"
        }}>{jiangzhangdan.piaojuzhonglei}</div>
                            <div style={{
            float: "left",
        }}>{jiangzhangdan.piaojuzhangshu}</div>
                            <div style={{ clear: "both" }}></div>
                        </div>

                        <div style={{
            marginTop: "8px"
        }}>
                            <div style={{
            marginLeft: "130px",
            width: "100x"
        }}>{jiangzhangdan.piaojuhaoma}</div>
                        </div>
                        <div style={{ clear: "both" }}></div>
                    </div>
                </div>
            </div>);
    }
}
