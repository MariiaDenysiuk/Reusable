'use strict';

const rangeOdd = function (start, end) {
  const oddNumbs = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddNumbs.push(i);
    }
  }
  return oddNumbs;
};

module.exports = { rangeOdd };
