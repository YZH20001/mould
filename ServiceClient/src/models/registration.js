import * as api from './../api/api';
import { createApiAuthParam } from './../api/apiUtil.js';
import { notification } from 'antd';
export default {
    namespace: 'registration',
    state: {
        type_1: "",
        professional: "",
        tax: "",
        type_2: "",
        industry: "",
        professiona2: "",
        type_4: "",
        riqi_2: "",
        riqi_1: "",
        often_address1: "",
        unit_address1: ""
    },
    subscriptions: {
        setup({ dispatch, history }) { }
    },
    effects: {
        *createRegistration({ payload }, { call, put }) {
            const data = yield call(...createApiAuthParam({
                method: new api.RegistrationApi().appRegistrationCreate,
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
