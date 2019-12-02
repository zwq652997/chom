/**
 * 
 * @desc  判断是否为手机号
 * @param {String} tel 
 * @return {Boolean}
 */	
function checkPhone(tel){
	return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}

module.exports = checkPhone;