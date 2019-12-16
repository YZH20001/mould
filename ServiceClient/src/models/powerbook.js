import * as api from './../api/api';
import { createApiAuthParam } from './../api/apiUtil.js';
import { notification } from 'antd';
export default {
    namespace: 'powerbook',
    state: {},
    subscriptions: {
        setup({ dispatch, history }) { }
    },
    effects: {
        *createPowerbook({ payload }, { call, put }) {
            const data = yield call(...createApiAuthParam({
                method: new api.PowerbookApi().appPowerbookCreate,
                payload: payload
            }));
            if (data.success) {
                notification.success({
                    message: '保存成功',
                    description: '恭喜你保存成功'
                });
            }
            else {
            }
        },
    },
    reducers: {
        setState(state, { payload }) {
            return Object.assign({}, state, payload);
        }
    }
};
