//Comparision

// same datatype to samedatatype comparision is best given below
console.log( 2 > 1);
console.log( 2 < 1);
console.log( 2 == 1);
console.log( 2 != 1);
console.log( 2 >= 1);
console.log( 2 <= 1);

// diffrent datatype to diffrent datatype is not so good given below
console.log( "2" > 1);
console.log( "02" > 1);

// tryp to avoid these kind of Comparision given below 
console.log(null > 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);


// === Strick check triple equal check the value strictly

console.log("3" === 3);
