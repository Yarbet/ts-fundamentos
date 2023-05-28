import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },

  {
    username: 'valentina',
    role: 'vendedora'
  },

  {
    username: 'zuelen',
    role: 'seller'
  },

  {
    username: 'santiago',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
