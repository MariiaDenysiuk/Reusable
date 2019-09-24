'use strict';

const phonebook = {
  Ars: { name: 'Ars', phone: '+3000' },
  Sem: { name: 'Sem', phone: '+3000' }
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
