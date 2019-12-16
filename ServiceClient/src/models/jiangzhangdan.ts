
import { notification } from 'antd';
import * as api from './../api/api';
import { createApiAuthParam } from './../api/apiUtil.js';
export default {
	namespace: 'jiangzhangdan',
	state: {
	},
	subscriptions: {
		setup({ dispatch, history }) {

		}
	},

	effects: {
		*createJiangzhangdan({ payload }, { call, put }) {
			const data = yield call(
				...createApiAuthParam({
					method: new api.JingzhangdanApi().appJingzhangdanCreate,
					payload: payload
				})
			);
			if (data.success) {
				notification.success({
					message: '保存成功',
					description: '恭喜你保存成功'
				});
			}
		}
	},
	reducers: {
		setState(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	}
};