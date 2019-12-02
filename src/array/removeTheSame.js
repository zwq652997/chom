/**
 * @desc 数组去重
 * @param {Array} array：待处理数组
 * @return  
 */

function removeTheSame (array) {
    return Array.from(new Set(array));
 }
 
 module.exports = removeTheSame;