'use strict';

const range = function (start, end) {
  const numbArr = [];
  for (let i = start; i <= end; i++) {
    numbArr.push(i);
  }
  return numbArr;
};

module.exports = { range };
