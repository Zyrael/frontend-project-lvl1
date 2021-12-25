import getRandomNumber from './getRandomNumber.js';

export default (arr) => arr[getRandomNumber(0, arr.length - 1)];
