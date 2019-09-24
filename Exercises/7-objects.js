'use strict';

const fn = () => {
  const obj = new Object();
  obj.name = '';
  let obj1 = new Object();
  obj1.name = '';
  const obj3 = new Object();
  obj1 = obj3;
};

module.exports = { fn };
