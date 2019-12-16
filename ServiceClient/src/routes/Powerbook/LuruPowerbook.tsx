import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
//用库
import { Select } from 'antd';

const { Option, OptGroup } = Select;
function handleChange(value) {
	console.log(`selected ${value}`);
}
import styles from './LuruPowerbook.css';

function LuruPowerbook({ dispatch, form, }) {
	const { getFieldDecorator } = form;

	function handleSubmit(e) {
		form.validateFields((err, values) => {
			console.log(values);
			let data = {
				"sname": values.sname,
				"name_1": values.name_1,
				"type_1": values.type_1,
				"number_1": values.number_1,
				"phoneNumber_1": values.phoneNumber_1,
				"name_2": values.name_2,
				"type_2": values.type_2,
				"number_2": values.number_2,
				"phoneNumber_2": values.phoneNumber_2,
			};
			if (!err) {
				dispatch({
					type: 'powerbook/createPowerbook',
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
					"sname": values.sname,
					"name_1": values.name_1,
					"type_1": values.type_1,
					"number_1": values.number_1,
					"phoneNumber_1": values.phoneNumber_1,
					"name_2": values.name_2,
					"type_2": values.type_2,
					"number_2": values.number_2,
					"phoneNumber_2": values.phoneNumber_2,
				};

				dispatch({
					type: "print/printPowerbook",
					payload: data
				});
			}
		});
	}

	const formCol = {
		labelCol: { span: 3 },
		wrapperCol: { span: 12 }
	};
	return (
		<div className={styles.container}>

			<header className={styles.title}>
				<Link to="/"><Row className={styles.logo}></Row></Link>
				<Row className={styles.title}>中信银行公司电子银行企业法定代表人授权书</Row>
			</header>
			<section >
				<Form onSubmit={handleSubmit}>
					<div className={styles.content1}>
						<div className={styles.service}>法定代表人授权办理人签署《中信银行公司电子银行服务协议》时填写</div>
						<FormItem label="客户名称:"{...formCol} className={styles.label_1}>
							{getFieldDecorator('sname', {
								rules: [{ required: true, message: '请输入客户名称！' }]
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<div className={styles.onSubmit_hr}>法定代表人信息</div>
						<FormItem label="姓名:"{...formCol} >
							{getFieldDecorator('name_1', {
								// rules: [{ required: true, message: '请输入姓名！' }]
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<FormItem label="证件类型:"{...formCol}>
							{getFieldDecorator('type_1', {
								// rules: [{ required: true, message: '请输入证件类型！' }]
							})(
								<Select style={{ width: 200 }} onChange={handleChange}>

									<Option value="居民身份证">居民身份证</Option>
									<Option value="临时身份证">临时身份证</Option>
									<Option value="中国护照" >中国护照</Option>
									<Option value="户口簿(仅供未满16周岁客户)">户口簿(仅供未满16周岁客户)</Option>
									<Option value="军官证" >军官证</Option>
									<Option value="武警证" >武警证</Option>
									<Option value="港澳居民来往内地通行证" >港澳居民来往内地通行证</Option>
									<Option value="台湾居民来往大陆通行证" >台湾居民来往大陆通行证</Option>
									<Option value="外国人永久居留身份证" >外国人永久居留身份证</Option>
									<Option value="边民出入境通行证" >边民出入境通行证</Option>
									<Option value="外国护照" >外国护照</Option>
								</Select>,
							)}
						</FormItem>
						<FormItem label="证件号码:"{...formCol}>
							{getFieldDecorator('number_1', {
								// rules: [{ required: true, message: '请输入证件号码！' }]
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<FormItem label="联系电话:"{...formCol}>
							{getFieldDecorator('phoneNumber_1', {
								// rules: [{ required: true, message: '请输入联系电话！' }]
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<hr />
						<div className={styles.onSubmit_hr}>办理人信息</div>
						<FormItem label="姓名:"{...formCol}>
							{getFieldDecorator('name_2', {
								// rules: [{ required: true, message: '请输入姓名！' }]
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<FormItem label="证件类型:"{...formCol}>
							{getFieldDecorator('type_2', {
								// rules: [{ required: true, message: '请输入证件类型！' }]
							})(
								<Select style={{ width: 200 }} onChange={handleChange}>

									<Option value="居民身份证">居民身份证</Option>
									<Option value="临时身份证">临时身份证</Option>
									<Option value="中国护照" >中国护照</Option>
									<Option value="户口簿(仅供未满16周岁客户)">户口簿(仅供未满16周岁客户)</Option>
									<Option value="军官证" >军官证</Option>
									<Option value="武警证" >武警证</Option>
									<Option value="港澳居民来往内地通行证" >港澳居民来往内地通行证</Option>
									<Option value="台湾居民来往大陆通行证" >台湾居民来往大陆通行证</Option>
									<Option value="外国人永久居留身份证" >外国人永久居留身份证</Option>
									<Option value="边民出入境通行证" >边民出入境通行证</Option>
									<Option value="外国护照" >外国护照</Option>
								</Select>,
							)}
						</FormItem>
						<FormItem label="证件号码:"{...formCol}>
							{getFieldDecorator('number_2', {
								// rules: [{ required: true, message: '请输入证件号码！' }]
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<FormItem label="联系电话:"{...formCol}>
							{getFieldDecorator('phoneNumber_2', {
								// rules: [{ required: true, message: '请输入联系电话！' }]
							})(
								<Input className={styles.input} />
							)}
						</FormItem>
						<hr />
						<div>
							<div className={styles.cachet1}>
								<header>单位公章:</header>
								<span>法定代表人签章:</span><br />
								<span>日期:</span>
							</div>
							<div className={styles.cachet2}>
								<header>办理网点(业务公章):</header>
								<span>经办:</span><br />
								<span>复核:</span>
								<span>日期:</span>
							</div>
						</div>
					</div>
					<div className={styles.footer}>
						<Row>
							<Col span={4}>
								<Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
							</Col>

							<Col offset={5} span={8}>
								<Button.Group size='large'>
									<Button type="primary" htmlType="submit">提交</Button>
									<Button type="primary" htmlType="button" onClick={() => { handlePrint() }}>打印</Button>
									<Button type="primary" htmlType="button" onClick={() => { handleReset() }}>重置</Button>
								</Button.Group>
							</Col>
						</Row>
					</div>

				</Form>
			</section>
		</div>
	);
}
LuruPowerbook = connect((state) => {
	return {
		...state.powerbook,
	};
})(LuruPowerbook);

export default create()(LuruPowerbook);