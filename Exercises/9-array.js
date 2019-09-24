'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Joana Aurelius', phone: '+38044555488' }
];

const findPhoneByName = n => {
  for (const p of phonebook) {
    if (n === p.name) {
      return p.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
