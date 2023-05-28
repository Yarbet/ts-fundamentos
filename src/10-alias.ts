(() =>{
  type UserId = string | number;
  let userId: UserId;

   //literal types
   type Sizes = 'S' | 'M' | 'L' | 'XL';
   let shirtSize: Sizes;
   shirtSize = 'M';
   shirtSize = 'L';
   shirtSize = 'XL';
   shirtSize = 'S';

   function greeting(userId: UserId, size:Sizes){
    if (typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
   }
   greeting(1111, 'L');
   greeting('1111', 'XL');


})();
