/**
 * @desc 获取URL中的参数（当参数paramName有值，返回对应的value；若未传参，返回全部参数键值对的聚合对象）
 * @param {String} Query的key值（可选）
 * @return
 */

 function getQueryString (paramName) {
    let paramObj = {}, m;
    const queryString = location.search.substring(1), reg = /([^&=]+)=([^&]*)/g;
    while(m = reg.exec(queryString)) {
        // 新命中一个键值对
        paramObj[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return paramName ? paramObj[paramName] || '' : paramObj;
}

module.exports = getQueryString;
