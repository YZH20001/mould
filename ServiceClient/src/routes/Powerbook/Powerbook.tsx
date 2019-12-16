import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, InputNumber, Badge, DatePicker } from 'antd';

const create = Form.create;
const FormItem = Form.Item;

const { TextArea } = Input;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';
import moment from 'moment';
function Powerbook({ form, record }) {
	const columns = [
		{
			title: '客户名称',
			dataIndex: 'sname'
		},
		{
			title: '姓名',
			dataIndex: 'name_1'
		},
		{
			title: '证件类型',
			dataIndex: 'type_1',
		},
		{
			title: '证件号码',
			dataIndex: 'number_1'
		},
		{
			title: '联系电话',
			dataIndex: 'phoneNumber_1'
		},
		{
			title: '姓名',
			dataIndex: 'name_2'
		},
		{
			title: '证件类型',
			dataIndex: 'type_2',
		},
		{
			title: '证件号码',
			dataIndex: 'number_2',
		},
		{
			title: '联系电话',
			dataIndex: 'phoneNumber_2',
		}
	];
	const { getFieldDecorator } = form;
	const formCol = {
		labelCol: { span: 8 },
		wrapperCol: { span: 12 }
	};
	const formNode = (
		<Form>
			<FormItem label="客户名称" {...formCol}>
				{getFieldDecorator('sname', {
					initialValue: record.sname,
					rules: [{ required: true, message: '请填写名称' }]
				})(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name_1', {
					initialValue: record.name_1
				})(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type_1', {
					initialValue: record.location && record.type_1
				})(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number_1', {
					initialValue: record.location && record.number_1
				})(<Input />)}
			</FormItem>
			<FormItem label="联系电话" {...formCol}>
				{getFieldDecorator('phoneNumber_1', {
					initialValue: record.location && record.phoneNumber_1
				})(<Input />)}
			</FormItem>
			<FormItem label="姓名" {...formCol}>
				{getFieldDecorator('name_2', {
					initialValue: record.name_2
				})(<Input />)}
			</FormItem>
			<FormItem label="证件类型" {...formCol}>
				{getFieldDecorator('type_2', {
					initialValue: record.type_2
				})(<Input />)}
			</FormItem>
			<FormItem label="证件号码" {...formCol}>
				{getFieldDecorator('number_2', {
					initialValue: record.location && record.number_2
				})(<Input />)}
			</FormItem>
			<FormItem label="联系电话" {...formCol}>
				{getFieldDecorator('phoneNumber_2', {
					initialValue: record.location && record.phoneNumber_2
				})(<Input />)}
			</FormItem>
		</Form>
	);
	const filters = [
		{
			name: 'sname',
			displayName: '客户名称',
			option: 'like'
		},
		{
			name: 'creationTime',
			displayName: '添加时间',
			type: 'datetime',
			option: '>='
		},
		{
			name: 'creationTime',
			displayName: '',
			type: 'datetime',
			option: '<'
		}
	];

	return (
		<CRUD
			form={form}
			getAllApi={new api.PowerbookApi().appPowerbookGetAll}
			deleteApi={new api.PowerbookApi().appPowerbookDelete}
			updateApi={new api.PowerbookApi().appPowerbookUpdate}
			createApi={new api.PowerbookApi().appPowerbookCreate}
			columns={columns}
			formNode={formNode}
			customColumnOption={(text, record) => (
				
				<span>
					<a onClick={() => {
						dispatch({
							type:"print/printPowerbook",
							payload:record
						})
					}}>
						打印
					</a>
				<span style={{marginLeft:'6px'}} /></span>
			)}
			filterProps={{
				filters,
				searchProvide: 'sql'
			}}
		/>
	);
}

Powerbook = connect((state) => {
	return {
		...state.crud
	};
})(Powerbook);
export default create()(Powerbook);
