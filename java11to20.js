// 11.	 Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// class cylinder {
//   constructor(rad, h){
//   this.rad = rad;
//   this.h = h;
//   }
//   getVolume () {
//   return Math.PI*this.rad*this.rad*this.h;
//   }
//   }
//   let myCylinder = new cylinder(2,5);
//   console.log(myCylinder.getVolume());
// }

// Write a js program to print all odd number between 1 to 100.

// for (var x=0; x<=15; x++) {
//   if (x === 0) {
//           console.log(x +  " is even");
//   }
//   else if (x % 2 === 0) {
//           console.log(x + " is even");   
//   }
//   else {
//           console.log(x + " is odd");
//   }
// }

// Write a js program to find sum of all natural numbers between 1 to n.

// 

// Write a js program to find sum of all even numbers between 1 to n.
// let sum=0;

// for(i = 2;i<=100;i=i+2){

// sum = sum+i

// }

// console.log(sum);

// Write a js program to find sum of all odd numbers between 1 to n.

// function isOdd(n) {
//   return Boolean(n % 2);
// }

// function findSum(no) {
//   let sum = 0;

//   for (var i = 0; i < no; i++) {
//     if (isOdd(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(findSum(100));

// Write a js program to print multiplication table of any number.

// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }


// Write a js program to count number of digits in a number.

// function digits_count(n) {
//   var count = 0;
//   if (n >= 1) ++count;

//   while (n / 10 >= 1) {
//     n /= 10;
//     ++count;
//   }

//   return count;
// }

// console.log(digits_count(12112));

// console.log(digits_count(457));

// where r is the radius and h is the height of the cylinder.
// 

// 19.	 Write a js program to find maximum between two numbers.
// function largesstnum()
// 			{
// 				var num1, num2, num3;
// 				num1 = Number(document.getElementById("fnum").value);
// 				num2 = Number(document.getElementById("snum").value);

// 				if(num1>num2)
// 				{
// 					window.alert(num1+"-is Larger");
// 				}
// 				else if(num2>num1)
// 				{
// 					window.alert(num2+"-is Larger");
// 				}
// 				else if(num2>num1 && num2>num1)
// 				{
// 					window.alert(num2+"is Larger");
// 				}
// 			}

// Write a js program to find maximum between three numbers.
// function max_of_three(x, y, z) 
//  {
//   max_val = 0;
//   if (x > y)
//   {
//     max_val = x;
//   } else
//   {
//     max_val = y;
//   }
//   if (z > max_val) 
//   {
//     max_val = z;
//   }
//   return max_val;
// }

// console.log(max_of_three(1,0,1));
// console.log(max_of_three(0,-10,-20));
// console.log(max_of_three(1000,510,440));