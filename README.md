[![chom](https://gankaolu.oss-cn-huhehaote.aliyuncs.com/img/chom.jpg)](https://github.com/zwq652997/chom)
# chom
[![npm](https://img.shields.io/npm/v/chom.svg)](https://www.npmjs.com/package/chom) 
[![LICENSE MIT](https://img.shields.io/npm/l/chom.svg)](https://www.npmjs.com/package/chom) 

前端基础工具库  

> 使命：帮助开发者高效率完成工作

开发中会经常遇到许多通用的代码，如手机号、邮箱验证，获取url参数、操作cookie等，然而封装这些常用方法的库并不多见，而且这些方法与自己的项目经验相关，很有可能自己去扩展一些有用的方法，所以还是有必要去实现。

## 使用与安装；

> 支持UMD模式的使用；

1. 直接下载`dist`目录下的[chom.min.js](https://github.com/zwq652997/chom/blob/master/dist/chom.min.js)使用  
2. 使用npm安装

### CDN
``` html
  <script src="chom.min.js"></script>
  <script>
      chom.checkPhone('15640364015')
  </script>
```

### npm
``` bash
$ npm install chom --save
```

## 支持的API


### Base 
#### &emsp;&emsp;[createUUID][createUUID]&emsp;&emsp;生成UUID(36位)
### Checking 
#### &emsp;&emsp;[checkEmail][checkEmail]&emsp;&emsp;判断是否为邮箱地址
#### &emsp;&emsp;[checkIdCard][checkIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[checkPhone][checkPhone]&emsp;&emsp;判断是否为手机号
### Cookie 
#### &emsp;&emsp;[getCookie][getCookie]&emsp;&emsp;根据name读取cookie
#### &emsp;&emsp;[setCookie][setCookie]&emsp;&emsp;设置Cookie
#### &emsp;&emsp;[removeCookie][removeCookie]&emsp;&emsp;根据name删除cookie
### Array
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等  
### Random 
#### &emsp;&emsp;[getRandomInteger][getRandomInteger]&emsp;&emsp;获取随机整数(范围字符串)
#### &emsp;&emsp;[getRandomString][getRandomString]&emsp;&emsp;获取随机字符串
### Time 
#### &emsp;&emsp;[monthDays][monthDays]&emsp;&emsp;获取指定日期月份的总天数
#### &emsp;&emsp;[_preciseCountDownTimer][_preciseCountDownTimer]&emsp;&emsp;倒计时的插件
### LocalStorage 
#### &emsp;&emsp;[getLocalStorage][getLocalStorage]&emsp;&emsp; 获取Cookie
#### &emsp;&emsp;[setLocalStorage][setLocalStorage]&emsp;&emsp;倒计时的插件
#### &emsp;&emsp;[removeLocalStorage][removeLocalStorage]&emsp;&emsp;删除Cookie


[arrayEqual]:https://github.com/zwq652997/chom/blob/master/src/array/arrayEqual.js

[createUUID]:https://github.com/zwq652997/chom/blob/master/src/base/createUUID.js

[checkEmail]:https://github.com/zwq652997/chom/blob/master/src/checking/checkEmail.js

[checkIdCard]:https://github.com/zwq652997/chom/blob/master/src/checking/checkIdCard.js

[checkPhone]:https://github.com/zwq652997/chom/blob/master/src/checking/checkPhone.js

[getCookie]:https://github.com/zwq652997/chom/blob/master/src/cookie/getCookie.js

[setCookie]:https://github.com/zwq652997/chom/blob/master/src/cookie/setCookie.js

[removeCookie]:https://github.com/zwq652997/chom/blob/master/src/cookie/removeCookie.js

[getRandomInteger]:https://github.com/zwq652997/chom/blob/master/src/random/getRandomInteger.js

[getRandomString]:https://github.com/zwq652997/chom/blob/master/src/random/getRandomString.js

[monthDays]:https://github.com/zwq652997/chom/blob/master/src/time/monthDays.js

[_preciseCountDownTimer]:https://github.com/zwq652997/chom/blob/master/src/time/preciseCountDownTimer.js

[getLocalStorage]:https://github.com/zwq652997/chom/blob/master/src/localStorage/getLocalStorage.js

[setLocalStorage]:https://github.com/zwq652997/chom/blob/master/src/localStorage/setLocalStorage.js

[removeLocalStorage]:https://github.com/zwq652997/chom/blob/master/src/localStorage/removeLocalStorage.js




