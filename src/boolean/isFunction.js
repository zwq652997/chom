/**
 * @method isFunction
 * @since version 1.0.0
 * @desc 判断是否为函数
 * @param {Function} value 待检测的值
 * @return {Boolean} Boolean 值；
 * @example fdutils.isFunction(value);
 */

let checkType = require('../_tools/_type');

function isFunction(value){
	return checkType(value) === 'function';
}
module.exports = isFunction;