
import * as api from './../api/api';
import { createApiAuthParam } from './../api/apiUtil.js';
import { notification } from 'antd';


export default {
	namespace: 'shouqunweituoshu1',
	state: {
	},
	subscriptions: {
		setup({ dispatch, history }) {

		}
	},

	effects: {
		*creatShouqunweituoshu1({ payload }, { call, put }) {
			const data = yield call(
				...createApiAuthParam({
					method: new api.Shouqunweituoshu1Api().appShouqunweituoshu1Create,
					payload: payload
				})
			);
			if (data.success) {
				notification.success({
					message: '保存成功',
					description: '恭喜你保存成功'
				});
				yield
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
