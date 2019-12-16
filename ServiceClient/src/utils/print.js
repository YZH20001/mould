import { notification } from 'antd';
var CreatedOKLodop7766 = null;
//====判断是否需要安装CLodop云打印服务器:====
function needCLodop() {
    try {
        var ua = navigator.userAgent;
        if (ua.match(/Windows\sPhone/i) != null)
            return true;
        if (ua.match(/iPhone|iPod/i) != null)
            return true;
        if (ua.match(/Android/i) != null)
            return true;
        if (ua.match(/Edge\D?\d+/i) != null)
            return true;
        var verTrident = ua.match(/Trident\D?\d+/i);
        var verIE = ua.match(/MSIE\D?\d+/i);
        var verOPR = ua.match(/OPR\D?\d+/i);
        var verFF = ua.match(/Firefox\D?\d+/i);
        var x64 = ua.match(/x64/i);
        if (verTrident == null && verIE == null && x64 !== null)
            return true;
        else if (verFF !== null) {
            verFF = verFF[0].match(/\d+/);
            if (verFF[0] >= 41 || x64 !== null)
                return true;
        }
        else if (verOPR !== null) {
            verOPR = verOPR[0].match(/\d+/);
            if (verOPR[0] >= 32)
                return true;
        }
        else if (verTrident == null && verIE == null) {
            var verChrome = ua.match(/Chrome\D?\d+/i);
            if (verChrome !== null) {
                verChrome = verChrome[0].match(/\d+/);
                if (verChrome[0] >= 41)
                    return true;
            }
        }
        return false;
    }
    catch (err) {
        return true;
    }
}
//====页面引用CLodop云打印必须的JS文件：====
if (needCLodop()) {
    var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
    var oscript = document.createElement('script');
    oscript.src = 'http://localhost:8000/CLodopfuncs.js?priority=1';
    head.insertBefore(oscript, head.firstChild);
    //引用双端口(8000和18000）避免其中某个被占用：
    oscript = document.createElement('script');
    oscript.src = 'http://localhost:18000/CLodopfuncs.js?priority=0';
    head.insertBefore(oscript, head.firstChild);
}
//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
    var strHtmInstall = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    var strHtmUpdate = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    var strHtm64_Install = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
    var strHtm64_Update = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
    var strHtmFireFox = "<br><br><font color='#FF00FF'>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</font>";
    var strHtmChrome = "<br><br><font color='#FF00FF'>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</font>";
    var strCLodopInstall = "<br><font color='#FF00FF'>CLodop云打印服务(localhost本地)未安装启动!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行安装</a>,安装后请刷新页面。</font>";
    var strCLodopUpdate = "<br><font color='#FF00FF'>CLodop云打印服务需升级!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>,升级后请刷新页面。</font>";
    var LODOP;
    try {
        var isIE = navigator.userAgent.indexOf('MSIE') >= 0 || navigator.userAgent.indexOf('Trident') >= 0;
        if (needCLodop()) {
            try {
                LODOP = getCLodop();
            }
            catch (err) { }
            if (!LODOP && document.readyState !== 'complete') {
                alert('C-Lodop没准备好，请稍后再试！');
                return;
            }
            if (!LODOP) {
                if (isIE)
                    document.write(strCLodopInstall);
                else
                    document.body.innerHTML = strCLodopInstall + document.body.innerHTML;
                return;
            }
            else {
                if (CLODOP.CVERSION < '3.0.4.3') {
                    if (isIE)
                        document.write(strCLodopUpdate);
                    else
                        document.body.innerHTML = strCLodopUpdate + document.body.innerHTML;
                }
                if (oEMBED && oEMBED.parentNode)
                    oEMBED.parentNode.removeChild(oEMBED);
                if (oOBJECT && oOBJECT.parentNode)
                    oOBJECT.parentNode.removeChild(oOBJECT);
            }
        }
        else {
            var is64IE = isIE && navigator.userAgent.indexOf('x64') >= 0;
            //=====如果页面有Lodop就直接使用，没有则新建:==========
            if (oOBJECT != undefined || oEMBED != undefined) {
                if (isIE)
                    LODOP = oOBJECT;
                else
                    LODOP = oEMBED;
            }
            else if (CreatedOKLodop7766 == null) {
                LODOP = document.createElement('object');
                LODOP.setAttribute('width', 0);
                LODOP.setAttribute('height', 0);
                LODOP.setAttribute('style', 'position:absolute;left:0px;top:-100px;width:0px;height:0px;');
                if (isIE)
                    LODOP.setAttribute('classid', 'clsid:2105C259-1E0C-4534-8141-A753534CB4CA');
                else
                    LODOP.setAttribute('type', 'application/x-print-lodop');
                document.documentElement.appendChild(LODOP);
                CreatedOKLodop7766 = LODOP;
            }
            else
                LODOP = CreatedOKLodop7766;
            //=====Lodop插件未安装时提示下载地址:==========
            if (LODOP == null || typeof LODOP.VERSION == 'undefined') {
                if (navigator.userAgent.indexOf('Chrome') >= 0)
                    document.body.innerHTML = strHtmChrome + document.body.innerHTML;
                if (navigator.userAgent.indexOf('Firefox') >= 0)
                    document.body.innerHTML = strHtmFireFox + document.body.innerHTML;
                if (is64IE)
                    document.write(strHtm64_Install);
                else if (isIE)
                    document.write(strHtmInstall);
                else
                    document.body.innerHTML = strHtmInstall + document.body.innerHTML;
                return LODOP;
            }
        }
        if (LODOP.VERSION < '6.2.2.2') {
            if (!needCLodop()) {
                if (is64IE)
                    document.write(strHtm64_Update);
                else if (isIE)
                    document.write(strHtmUpdate);
                else
                    document.body.innerHTML = strHtmUpdate + document.body.innerHTML;
            }
            return LODOP;
        }
        //===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
        LODOP.SET_LICENSES('云南青才信息科技有限公司', '93E24F898EE17DE90231D1E8A683CAEA', '', '');
        //===========================================================
        return LODOP;
    }
    catch (err) {
        alert('getLodop出错:' + err);
    }
}
function getPOS58Index() {
    let LODOP = getLodop();
    let count = LODOP.GET_PRINTER_COUNT();
    var name = 'POS58';
    if (window.receiptDeviceName) {
        name = window.receiptDeviceName;
    }
    for (let i = count - 1; i >= 0; i--) {
        if (LODOP.GET_PRINTER_NAME(`${i}`).indexOf(name) >= 0) {
            return i;
        }
    }
    notification.error({
        message: '小票打印机出错',
        description: '没有找到小票打印机或小票打印机驱动未安装'
    });
    return -1;
}
export function PrintReceipt(html) {
    let LODOP = getLodop();
    var index = getPOS58Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 3, 200, 'BottomMargin:9mm', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 220, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(3, 2200, 80, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
function getEPSONLQ_630KIndex() {
    let LODOP = getLodop();
    let count = LODOP.GET_PRINTER_COUNT();
    var name = 'EPSON LQ-630K';
    if (window.needleDeviceName) {
        name = window.needleDeviceName;
    }
    for (let i = count - 1; i >= 0; i--) {
        if (LODOP.GET_PRINTER_NAME(`${i}`).indexOf(name) >= 0) {
            return i;
        }
    }
    notification.error({
        message: '针式打印机出错',
        description: '没有找到针式打印机或针式打印机驱动未安装'
    });
    return -1;
}
function getFujitsu_DPK1560Index() {
    let LODOP = getLodop();
    let count = LODOP.GET_PRINTER_COUNT();
    var name = 'Fujitsu DPK1560';
    if (window.needleDeviceName) {
        name = window.needleDeviceName;
    }
    for (let i = count - 1; i >= 0; i--) {
        if (LODOP.GET_PRINTER_NAME(`${i}`).indexOf(name) >= 0) {
            return i;
        }
    }
    notification.error({
        message: '针式打印机出错',
        description: '没有找到针式打印机或针式打印机驱动未安装'
    });
    return -1;
}
function getFujitsu_DPK1560Index() {
    let LODOP = getLodop();
    let count = LODOP.GET_PRINTER_COUNT();
    var name = 'Fujitsu DPK1560';
    if (window.needleDeviceName) {
        name = window.needleDeviceName;
    }
    for (let i = count - 1; i >= 0; i--) {
        if (LODOP.GET_PRINTER_NAME(`${i}`).indexOf(name) >= 0) {
            return i;
        }
    }
    notification.error({
        message: '针式打印机出错',
        description: '没有找到针式打印机或针式打印机驱动未安装'
    });
    return -1;
}
function getFujitsu_DPK1560Index() {
    let LODOP = getLodop();
    let count = LODOP.GET_PRINTER_COUNT();
    var name = 'Fujitsu DPK1560';
    if (window.needleDeviceName) {
        name = window.needleDeviceName;
    }
    for (let i = count - 1; i >= 0; i--) {
        if (LODOP.GET_PRINTER_NAME(`${i}`).indexOf(name) >= 0) {
            return i;
        }
    }
    notification.error({
        message: '针式打印机出错',
        description: '没有找到针式打印机或针式打印机驱动未安装'
    });
    return -1;
}
export function printJinzhangdan(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 1740, 1000, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintXinjinjiaokuandan(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 1740, 1000, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintYewujiesuanshenqingshu(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 1400, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintShouquanshu(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintYwdlsqbiao(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintPowerbook(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintShouqunweituoshu1(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintShouqunweituoshu2(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintKailiApplyBook(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintRegistration(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintJszhsqshu(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintBgyhjszhsqss(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
export function PrintDanweixinxidengjibiao(html) {
    let LODOP = getLodop();
    var index = getFujitsu_DPK1560Index();
    if (index >= 0) {
        LODOP.PRINT_INIT();
        LODOP.SET_PRINTER_INDEX(index);
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', html);
        LODOP.ADD_PRINT_TEXT(0, 0, 830, 30, ''); //打印空行,不然打印html的时候会不知道打印多长
        LODOP.SET_PRINT_PAGESIZE(1, 2100, 2970, '');
        LODOP.PRINT();
        // LODOP.PREVIEW();
    }
}
