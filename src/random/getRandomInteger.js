/*
 * @Version: 1.0
 * @Description: 获取随机整数
 * @Remarks: 获取随机整数(范围字符串)
 */

/**
 * @description: 获取随机整数(范围字符串)
 * @param { String } rangeStr 范围字符串：同区间写法一致()表示开区间,[]表示闭区间,例:[5,8)
 * @return { Number }
 */
function getRandomInteger(rangeStr) {
  try {
    // 处理范围
    const min = parseInt(rangeStr.substring(1, rangeStr.length - 1).split(',')[0]);
    const max = parseInt(rangeStr.substring(1, rangeStr.length - 1).split(',')[1]);
    const range = max - min;
    if (range <= 0) {
      return null;
    }
    // 生成[0,range)的随机数
    const random = Math.random() * range;
    if (rangeStr.startsWith('(') && rangeStr.endsWith(')')) {
      if (range <= 1) {
        return null;
      } else {
        const randomRound = Math.round(random);
        if (randomRound === 0) {
          return min + 1;
        } else if (randomRound === range) {
          return max - 1;
        } else {
          return min + randomRound;
        }
      }
    } else if (rangeStr.startsWith('(') && rangeStr.endsWith(']')) {
      const randomRound = Math.round(random);
      if (randomRound === 0) {
        return min + 1;
      } else {
        return min + randomRound;
      }
    } else if (rangeStr.startsWith('[') && rangeStr.endsWith(']')) {
      const randomRound = Math.round(random);
      return min + randomRound;
    } else if (rangeStr.startsWith('[') && rangeStr.endsWith(')')) {
      return min + Math.floor(random);
    }
  } catch (e) {
    return null;
  }
}

module.exports = getRandomInteger;