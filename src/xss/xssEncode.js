/**
 * @method xssEncode
 * @since version 1.0.0
 * @desc 进行XSS编码，与xssDecode配合使用
 * @params {String} str 待转换的字符串
 * @return {String} 返回编码转换的字符串
 *
 * @example fdutils.xssEncode(string);
 *
 */

let _xssTrim = require('../_tools/_xssTrim');

function _xssEncode(str){
  return _xssTrim.encode(str);
}

module.exports = _xssEncode;
