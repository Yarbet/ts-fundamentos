import {addProduct, calcStock, products} from './product.service';

addProduct({
  name: 'pro1',
  createdAt: new Date(1993,1,1),
  stock: 5
});

addProduct({
  name: 'pro2',
  createdAt: new Date(1993,1,1),
  stock: 6,
  size: 'XL'
});

console.log(products);
const total = calcStock();
console.log(total);
