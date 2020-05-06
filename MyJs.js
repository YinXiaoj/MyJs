/**
 * JS常用工具集
 * author：yinxiaojing
 * PAI：
 */

// 获取当前url
function getUrl() {
    return window.location.href;
}

// 获取url参数
function getUrlParam(key) {
    var url = window.location.search; 
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = url.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}

// 获取滚动条距顶部的高度
function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

//滚动到页面顶部
function scrollToTop() {
    var h = document.documentElement.scrollTop || document.body.scrollTop;
    if (h > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, h - h / 8);
    }
}

/** 按指定格式返回日期字符串
 * @param {*} date 具体日期变量
 * @param {string} dateType 需要返回类型
 */
function getFormatDate(date, dateType) {
    var dateObj = new Date(date);
    var month = dateObj.getMonth() + 1;
    var strDate = dateObj.getDate();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();
    var now_day = dateObj.getDay();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;

    }
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds
    }
    var weekDay='';
    switch (now_day) {
        case 0: {
            weekDay = "星期日"
        }
            break;
        case 1: {
            weekDay = "星期一"
        }
            break;
        case 2: {
            weekDay = "星期二"
        }
            break;
        case 3: {
            weekDay = "星期三"
        }
            break;
        case 4: {
            weekDay = "星期四"
        }
            break;
        case 5: {
            weekDay = "星期五"
        }
            break;
        case 6: {
            weekDay = "星期六"
        }
            break;
        case 7: {
            weekDay = "星期日"
        }
            break;
    }
    var dateText = dateObj.getFullYear() +''+ month +''+ strDate;
    switch(dateType){
        case "yyyy-mm-dd":
            dateText = dateObj.getFullYear() + '-' + month + '-' + strDate;
            break;
        case "yyyy.mm.dd":
            dateText = dateObj.getFullYear() + '.' + month + '.' + strDate;
            break;
        case "yyyy-mm-dd MM:mm:ss":
            dateText = dateObj.getFullYear() + '-' + month + '-' + strDate + ' ' + hours + ":" + minutes + ":" + seconds;
            break;
        case "mm-dd MM:mm":
            dateText = month + '-' + strDate + ' ' + hours + ":" + minutes;
            break;
        case "yyyy年mm月dd日 MM:mm:ss":
            dateText = dateObj.getFullYear() + '年' + month + '月' + strDate + '日' + ' ' + hours + ":" + minutes + ":" + seconds;
            break;
        case "MM:mm:ss":
            dateText = hours + ":" + minutes + ":" + seconds;
            break;
        case "weekday":
            dateText = weekDay;
            break;
    }
    return dateText;
}

/** 返回指定时间戳的时间间隔
 *  @param {*} startTime 开始时间的时间戳
 *  @param {*} endTime 结束时间的时间戳
 */
function getTimeInterval(startTime, endTime) {
    let runTime = parseInt((endTime - startTime) / 1000);
    let year = Math.floor(runTime / 86400 / 365);
    runTime = runTime % (86400 * 365);
    let month = Math.floor(runTime / 86400 / 30);
    runTime = runTime % (86400 * 30);
    let day = Math.floor(runTime / 86400);
    runTime = runTime % 86400;
    let hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    let minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    let second = runTime;
    let str = '';
    if (year > 0) {
        str = year + '年';
    }
    if (year <= 0 && month > 0) {
        str = month + '月';
    }
    if (year <= 0 && month <= 0 && day > 0) {
        str = day + '天';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
        str = hour + '小时';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
        str = minute + '分钟';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second > 0) {
        str += second + '秒';
    }
    str += '前';
    return str;
}

// 获取当前时间的n天后的时间戳
function toNextTimes(n){
    var timestamp = +new Date() + n * 86400000;
    return timestamp;
}

/** 验证日期大小
* 例："2019-10-24" 和 "2019-10-25"
* @param  {string} d1需要验证的日期1
* @param  {string} d2需要验证的日期2
* @return {boolean} 返回布尔值
*/
function compareDate(d1, d2) {
    return ((new Date(d1.replace(/-/g, "\/"))) < (new Date(d2.replace(/-/g, "\/"))));
}

/** 设置几天后的日期
* @param  {string} date 起始日期
* @param  {number} day 向后的天数
*/
function convertDate(date, day) {
    var tempDate = new Date(date);
    tempDate.setDate(tempDate.getDate()+day);
    var Y = tempDate.getFullYear();
    var M = tempDate.getMonth()+1 < 10 ? '0'+(tempDate.getMonth()+1) : tempDate.getMonth()+1;
    var D = tempDate.getDate() < 10 ? '0'+(tempDate.getDate()) : tempDate.getDate();
    var result = Y + "-" + M + "-" + D
    return result;
}

// 截取字符串并加省略号
function subText(str, length) {
    if (str.length === 0) {
        return '';
    }
    if (str.length > length) {
        return str.substr(0, length) + "...";
    } else {
        return str;
    }
}

//生成指定范围的随机数
function RandomNum(min, max, n) {
    var result;
    if(n) {
        result = (Math.random() * (max - min + 1)).toFixed(n);
    }else{
        result = Math.floor(Math.random() * (max - min + 1));
    }
    return result;
} 

// 去除空格
function trim(str, type) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    switch (type) {
        case 1:
            return str.replace(/\s/g, "");
        case 2:
            return str.replace(/(^\s)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s)/g, "");
        case 4:
            return str.replace(/(\s$)/g, "");
        default:
            return str;
    }
}

// 大小写转换
function turnCase(str, type) {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
}

// 随机十六进制颜色
function randomColor() {
    var n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

// 转义html
function escapeHTML(str) {
    return str.replace(
        /[&<>'"]/g,
        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );
};

// 判断数据类型
function type(target) {
    let ret = typeof(target);
    let template = {
        "[object Array]": "array",
        "[object Object]":"object",
        "[object Number]":"number - object",
        "[object Boolean]":"boolean - object",
        "[object String]":'string-object'
    };
    if(target === null) {
        return 'null';
    }else if(ret == "object"){
        let str = Object.prototype.toString.call(target);
        return template[str];
    }else{
        return ret;
    }
}


// 金钱格式化，每三位加逗号
function formatMoney(num) {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 判断数组是否存在某元素
function inArray(item, data) {
    for (let i = 0; i < data.length; i++) {
        if (item === data[i]) {
            return i;
        }
    }
    return -1;
}

// 判断手机是Android还是ios
function getOSType() {
    let u = navigator.userAgent, app = navigator.appVersion;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
        return 0;
    }
    if (isAndroid) {
        return 1;
    }
    return 2;
}

// 判断移动/PC设备
function detectDeviceType() { 
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'PC'; 
}

// 判断浏览器内核
function checkBrowser() {
    const u = navigator.userAgent;
    const obj = {
      trident: u.indexOf("Trident") > -1, //IE内核
      presto: u.indexOf("Presto") > -1, //opera内核
      webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
      gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    }
    return Object.keys(obj)[Object.values(obj).indexOf(true)]
};