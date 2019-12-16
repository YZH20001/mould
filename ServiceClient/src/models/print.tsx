import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	printJinzhangdan,
	PrintXinjinjiaokuandan,
	PrintYewujiesuanshenqingshu,
	PrintShouquanshu,
	PrintYwdlsqbiao,
	PrintPowerbook,
	PrintKailiApplyBook,
	PrintRegistration,
	PrintJszhsqshu,
	PrintBgyhjszhsqss,
	PrintDanweixinxidengjibiao,
	PrintShouqunweituoshu1,
	PrintShouqunweituoshu2
} from './../utils/print';

import Xinjinjiaokuandan from './../routes/Print/Xinjinjiaokuandan';
import Jiangzhangdan from './../routes/Print/Jiangzhangdan';
import Yewujiesuanshenqingshu from './../routes/Print/Yewujiesuanshenqingshu';
import Shouquanshu from './../routes/Print/Shouquanshu';
import Ywdlsqbiao from './../routes/Print/Ywdlsqbiao';
import Powerbook from './../routes/Print/Powerbook';
import Jszhsqshu from './../routes/Print/Jszhsqshu';
import KailiApplyBook from './../routes/Print/KailiApplyBook';
import Bgyhjszhsqss from './../routes/Print/Bgyhjszhsqss';
import Registration from './../routes/Print/Registration';
import Danweixinxidengjibiao from './../routes/Print/Danweixinxidengjibiao';
import Shouqunweituoshu1 from './../routes/Print/Shouqunweituoshu1';
import Shouqunweituoshu2 from './../routes/Print/Shouqunweituoshu2';

function print(reactElement, printFunction) {
	let div = document.createElement('div');
	document.body.appendChild(div);

	ReactDOM.render(reactElement, div);
	printFunction(div.innerHTML);

	const unmountResult = ReactDOM.unmountComponentAtNode(div);
	if (unmountResult && div.parentNode) {
		div.parentNode.removeChild(div);
	}
}

export default {
	namespace: 'print',
	state: {
	},
	reducers: {
		setState(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	},
	effects: {
		*printJinzhangdan({ payload }) {
			print(<Jiangzhangdan jiangzhangdan={payload} />, printJinzhangdan);
		},
		*printXinjinjiaokuandan({ payload }) {
			print(<Xinjinjiaokuandan xinjinjiaokuandan={payload} />, PrintXinjinjiaokuandan);
		},
		*printYewujiesuanshenqingshu({ payload }) {
			print(<Yewujiesuanshenqingshu data={payload} />, PrintYewujiesuanshenqingshu);
		},
		*printShouquanshu({ payload }) {
			print(<Shouquanshu Shouquanshu={payload} />, PrintShouquanshu);
		},
		*printYwdlsqbiao({ payload }) {
			print(<Ywdlsqbiao ywdlsqbiao={payload} />, PrintYwdlsqbiao);
		},
		*printPowerbook({ payload }) {
			print(<Powerbook powerbook={payload} />, PrintPowerbook);
		},
		*printKailiApplyBook({ payload }) {
			print(<KailiApplyBook kailiApplyBook={payload} />, PrintKailiApplyBook);
		},
		*printRegistration({ payload }) {
			print(<Registration registration={payload} />, PrintRegistration);
		},
		*printJszhsqshu({ payload }) {
			print(<Jszhsqshu data={payload} />, PrintJszhsqshu);
		},
		*printBgyhjszhsqss({ payload }) {
			print(<Bgyhjszhsqss data={payload} />, PrintBgyhjszhsqss);
		},
		*printDanweixinxidengjibiao({ payload }) {
			print(<Danweixinxidengjibiao data={payload} />, PrintDanweixinxidengjibiao);
		},
		*printShouqunweituoshu1({ payload }) {
			print(<Shouqunweituoshu1 data={payload} />, PrintShouqunweituoshu1);
		},
		*printShouqunweituoshu2({ payload }) {
			print(<Shouqunweituoshu2 data={payload} />, PrintShouqunweituoshu2);
		},
	},
	subscriptions: {}
};
