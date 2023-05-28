(() =>{
//let myNumber: number = undefined;
//let myString: string =  null;

let myNull: null = null;
let myUndefined: undefined = undefined;

let myNumber: number | null = null;
myNumber = 12;

let myString: string | undefined = undefined;
myString = 'ass';

function hi(name: string | null){
  let hello = 'hola';
  if(name) {
    hello += name;
  } else {
    hello += 'nobody';
  }
  console.log(hello)
}

function hiv2(name: string | null){
  let hello = 'hola';
  hello += name?.toLowerCase() || 'nobody';
  console.log(hello)
}

hi('nicolas');
hi(null);

hiv2('nicolas');
hiv2(null);
})();
