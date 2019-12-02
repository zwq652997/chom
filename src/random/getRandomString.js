/*
 * @Version: 1.0
 * @Description: 获取随机字符串
 * @Company: 
 * @Remarks: 
 */

 const getRandomInteger = require('./getRandomInteger')
/**
 * @description: 获取随机字符串
 * @param { String || Number } length 长度 
 * @param { String } type 字符类型: 可选项为u:大写字母 l:小写字母 n:数字 s:符号 格式样例为:'u+l+n+s'
 * @return { String }
 */
function getRandomString(length, type) {
  try {
    length = Math.abs(length || 6);
    type = type && type.toLowerCase() || 'u+l+n+s';
    const lowerLetterAsciiCodes = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
    const upperLetterAsciiCodes = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    const numberAsciiCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    const symbomAsciiCodes = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
    const codes = [];
    const asciiArr = [];
    if (type.includes('u')) {
      codes.push(upperLetterAsciiCodes);
    }
    if (type.includes('l')) {
      codes.push(lowerLetterAsciiCodes);
    }
    if (type.includes('n')) {
      codes.push(numberAsciiCodes);
    }
    if (type.includes('s')) {
      codes.push(symbomAsciiCodes);
    }
    for (let i = 0; i < parseInt(length); i++) {
      const indexRandom = getRandomInteger(`[0,${codes.length})`);
      const characterArr = codes[indexRandom];
      const characterRandom = getRandomInteger(`[0,${characterArr.length})`);
      asciiArr.push(characterArr[characterRandom]);
    }
    return Buffer.from(asciiArr).toString();
  } catch (e) {
    return null;
  }
}

module.exports = getRandomString;