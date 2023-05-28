(()=>{
let producPrice = 100;
producPrice = 12;
console.log('productPrice', producPrice);

let costumerAge: number = 28;
//costumerAge = costumerAge + '1'; //281
costumerAge = costumerAge + 1;
console.log('costumerAge', costumerAge);

let productInStock: number = 5;
console.log('productInStock', productInStock);
if(productInStock > 10){
  console.log('is greater');
}

let discount = parseInt('100');
console.log('discount', discount);
if(discount <= 200){
console.log('apply');
} else {
  console.log('not apply');
}

let hex = 0xfff;
console.log('hex', hex);
let bin = 0b1010; //10
console.log('bin', bin);

const myNumber: number = 10;
})();
