# JS工具集

### 使用

- 引入MyJs.js，然后直接调用函数，参考下面说明
- MyJs.js中含有注释，可以自行查找，按需使用，地址：[MyJs.js](MyJs.js)

### 其他

- css模块（待发布）
- 前端开发规范：[前端开发规范.md](前端开发规范.md)


## 1. 浏览器相关

- 获取当前url

```js
getUrl()
```

- 获取url参数

```js
getUrlParam(key)
```

- 获取滚动条距顶部的高度

```js
getScrollTop()
```

- 滚动到页面顶部
```js
scrollToTop()
```

## 2. 日期相关

- 获取当前时间戳

```js
var timestamp = new Date().getTime();
```

- 获取指定时间戳

```js
var timestamp = (new Date("2019/10/24 08:00:00")).getTime();
var timestamp = (new Date("2019-10-24 08:00:00")).getTime();
```

- 获取当前时间的n天后的时间戳
```js
// n为几天，可为正数或负数
toNextTimes(n)
```

- 按指定格式返回日期字符串

```js
// date 具体日期变量，"2019-10-24"，"2019/10/24","2019.10.24", new Date()
// dateType 需要返回类型，"yyyy-mm-dd"，"yyyy.mm.dd"，"yyyy-mm-dd MM:mm:ss"，"mm-dd MM:mm"，"yyyy年mm月dd日 MM:mm:ss"，"weekday"，不填时默认为yyyymmdd
getFormatDate(date, dateType)
```

- 返回指定时间戳的时间间隔
```js
//startTime起始时间，endTime结束时间内，返回值为n年前，n月前，n日前等
getTimeInterval(startTime, endTime) 
```

- 验证日期大小
```js
// d1，d2为需要验证的日期，如"2019-10-24"，"2019-10-25"，返回布尔值
compareDate(d1, d2)
```

- 设置几天后的日期
```js
// date起始日期，day向后的天数，返回值格式为yyyy-mm-dd，day可为负数
convertDate(date, day)
```

## 3.字符数字类

- 截取字符串并加省略号
```js
subText(str, length)
```

- 金钱格式化，每三位加逗号
```js
formatMoney(num)
```

- 判断数据类型
```js
// target为数据，返回值为array，object，number，boolean，string
type(target)
```

- 生成指定范围的随机数
```js
// 返回值默认为整数，如果传入n，则保留n位小数
RandomNum(min, max, n)
```

- 随机十六进制颜色
```js
randomColor()
```

- 去除空格
```js
// str为字符串，type为空格类型，1：所有空格  2：前后空格  3：前空格 4：后空格，默认为1
trim(str, type)
```

- 大小写转换
```js
// str为字符串，type为转换类型，1：全大写 2：全小写 3：首字母大写，默认不转换
turnCase(str, type)
```

- 转义html
```js
escapeHTML(str)
```

## 4.数组类

- 判断数组是否存在某元素
```js
array.indexOf(str)
```

- 数组去重

```js
unique(array)
```

- 数组排序并去重

```js
uniqueSort(array)
```

- 数组转化为json字符串
```js
JSON.stringify(array)
```

- json转化为数组
```js
JSON.parse(array)
```

## 5.设备相关

- 判断手机是Android还是ios
```js
// Android返回1，ios返回0
getOSType()
```

- 判断移动/PC设备
```js
// 返回值为'Mobile'，'PC'
detectDeviceType()
```

- 判断浏览器内核

```js
// trident: IE内核, presto: opera内核, webKit:苹果、谷歌内核, gecko: 火狐内核
checkBrowser()
```

## 6.正则表达式

- 邮箱
```js
/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
```

- 手机号码
```js
/^1[345678]\d{9}$/
```

## 其他类型待完善