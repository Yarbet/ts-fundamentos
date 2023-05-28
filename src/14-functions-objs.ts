(() =>{
const login = (data: {email: string, password: number }) => {
  console.log(data.email, data.password);
}

//login('Yarbet@gmail.com', '121222');
login({
  email: 'Yarbet@gmail.com',
  password: 121222
});

type Sizes = 'S' | 'M' | 'L' | 'XL';

const products: any[] = [];

const addProduct = (data: {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}) => {
  products.push(data);
}

addProduct({
  title: 'pro1',
  createdAt: new Date(1993,1,1),
  stock: 12
});

addProduct({
  title: 'pro1',
  createdAt: new Date(1993,1,1),
  stock: 12,
  size: 'XL'
});

console.log(products);
});
