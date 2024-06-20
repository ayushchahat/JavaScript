// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

// console.log("2">1);
// console.log("02">1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* The reason is that an equality check == and
   comparisons > <= < >= work differently.
   Comparison converts null to a number,treating it as 0.
   Thats why (3) >= 0 is true and (1) is false
*/

//=== it strictly check also the datatype
console.log("2" === 2);