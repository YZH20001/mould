import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruBgyhjszhsqss.css';
//用库
import { Select } from 'antd';
const { Option, OptGroup } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
function LuruBgyhjszhsqss({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "customername": values.customername,
                    "bankcode": values.bankcode,
                    "accountnumber": values.accountnumber,
                    "natureofaccount": values.natureofaccount,
                    "accountopennumber": values.accountopennumber,
                    "changesas": values.changesas,
                    "customername1": values.customername1,
                    "address": values.address,
                    "postalcode": values.postalcode,
                    "phonenumber": values.phonenumber,
                    "registered": values.registered,
                    "typeof": values.typeof,
                    "documentnumber": values.documentnumber,
                    "businessscope": values.businessscope,
                    "legal": values.legal,
                    "name": values.name,
                    "typedocument": values.typedocument,
                    "idnumber": values.idnumber,
                    "affiliated": values.affiliated,
                    "dengjibiao": values.dengjibiao,
                    "thesuperior": values.thesuperior,
                    "thename": values.thename,
                    "headofunit": values.headofunit,
                    "name1": values.name1,
                    "typedocument1": values.ttypedocument1,
                    "idnumber1": values.idnumber1,
                };
                dispatch({
                    type: 'bgyhjszhsqss/createbgyhjszhsqss',
                    payload: data
                });
            }
        });
    }
    function handleReset() {
        form.resetFields();
    }
    function handlePrint() {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "customername": values.customername,
                    "bankcode": values.bankcode,
                    "accountnumber": values.accountnumber,
                    "natureofaccount": values.natureofaccount,
                    "accountopennumber": values.accountopennumber,
                    "changesas": values.changesas,
                    "customername1": values.customername1,
                    "address": values.address,
                    "postalcode": values.postalcode,
                    "phonenumber": values.phonenumber,
                    "registered": values.registered,
                    "typeof": values.typeof,
                    "documentnumber": values.documentnumber,
                    "businessscope": values.businessscope,
                    "legal": values.legal,
                    "name": values.name,
                    "typedocument": values.typedocument,
                    "idnumber": values.idnumber,
                    "affiliated": values.affiliated,
                    "dengjibiao": values.dengjibiao,
                    "thesuperior": values.thesuperior,
                    "thename": values.thename,
                    "headofunit": values.headofunit,
                    "name1": values.name1,
                    "typedocument1": values.ttypedocument1,
                    "idnumber1": values.idnumber1,
                };
                dispatch({
                    type: "print/printBgyhjszhsqss",
                    payload: data
                });
            }
        });
    }
    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    const formCol1 = {
        labelCol: { span: 4 },
        wrapperCol: { span: 18 }
    };
    return (<div className={styles.container}>
            <header className={styles.title}>
                <Link to="/"><Row className={styles.logo}></Row></Link>
                <Row className={styles.title}>变更银行结算账户申请书</Row>
            </header>
            <section>
                <div className={styles.maxborder}>
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.content}>
                            <Row>
                                <Col span={24}>
                                    <FormItem label="账户名称" {...formCol1}>
                                        {getFieldDecorator('customername', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12}>
                                    <FormItem label="开户银行代码" {...formCol}>
                                        {getFieldDecorator('bankcode', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="账号" {...formCol}>
                                        {getFieldDecorator('accountnumber', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="账户性质" {...formCol1}>
                                        {getFieldDecorator('natureofaccount', {})(<Select style={{ width: "100%" }} onChange={handleChange}>

                                                <Option value="基本">基本</Option>
                                                <Option value="专用">专用</Option>
                                                <Option value="一般">一般</Option>
                                                <Option value="临时">临时</Option>
                                                <Option value="个人">个人</Option>
                                            </Select>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="开户许可证核准号" {...formCol1}>
                                        {getFieldDecorator('accountopennumber', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                变更事项及变更后内容如下
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="账户名称" {...formCol1}>
                                        {getFieldDecorator('customername1', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="地址" {...formCol1}>
                                        {getFieldDecorator('address', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="邮政编码" {...formCol1}>
                                        {getFieldDecorator('postalcode', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="电话" {...formCol1}>
                                        {getFieldDecorator('phonenumber', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="注册资金金额" {...formCol1}>
                                        {getFieldDecorator('registered', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="证明文件种类" {...formCol1}>
                                        {getFieldDecorator('typeof', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="证明文件编号" {...formCol1}>
                                        {getFieldDecorator('documentnumber', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="经营范围" {...formCol1}>
                                        {getFieldDecorator('businessscope', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>法定代表人或单位负责人</Row>
                            <Row>
                                <Col span={24}>
                                    <FormItem label="姓名" {...formCol1}>
                                        {getFieldDecorator('name', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="证件种类" {...formCol1}>
                                        {getFieldDecorator('typedocument', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="证件号码" {...formCol1}>
                                        {getFieldDecorator('idnumber', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="关联企业" {...formCol1}>
                                        变更后的关联企业信息填列在“关联企业登记表”中
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>上级法人或主管单位信息</Row>
                            <Row>
                                <Col span={24}>
                                    <FormItem label="基本存款账户核准号" {...formCol1}>
                                        {getFieldDecorator('thesuperior', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={24}>
                                    <FormItem label="名称" {...formCol1}>
                                        {getFieldDecorator('thename', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>上级法人或主管单位法定代表人或单位负责人</Row>
                            <Row>
                                <Col span={24}>
                                    <FormItem label="姓名" {...formCol1}>
                                        {getFieldDecorator('name1', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <FormItem label="证件种类" {...formCol1}>
                                        {getFieldDecorator('typedocument1', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <FormItem label="证件号码" {...formCol1}>
                                        {getFieldDecorator('idnumber1', {})(<Input className={styles.input}/>)}
                                    </FormItem>
                                </Col>
                            </Row>


                        </div>


                        <div className={styles.footer}>
                            <Row>
                                <Col span={4}>
                                    <Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
                                </Col>

                                <Col offset={5} span={8}>
                                    <Button.Group size='large'>
                                        <Button type="primary" htmlType="submit">提交</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handlePrint(); }}>打印</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handleReset(); }}>重置</Button>
                                    </Button.Group>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
            </section>
        </div>);
}
LuruBgyhjszhsqss = connect((state) => {
    return Object.assign({}, state.bgyhjszhsqss);
})(LuruBgyhjszhsqss);
export default create()(LuruBgyhjszhsqss);
