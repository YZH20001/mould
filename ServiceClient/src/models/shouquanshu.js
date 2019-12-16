import { notification } from 'antd';
import * as api from './../api/api';
import { createApiAuthParam } from './../api/apiUtil.js';
export default {
    namespace: 'shouquanshu',
    state: {},
    subscriptions: {
        setup({ dispatch, history }) {
        }
    },
    effects: {
        *createShouquanshu({ payload }, { call, put }) {
            const data = yield call(...createApiAuthParam({
                method: new api.ShouquanshuApi().appShouquanshuCreate,
                payload: payload
            }));
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
            return Object.assign({}, state, payload);
        }
    }
};
