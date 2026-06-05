// // // let h = prompt("What is your Height in meters?");
// // // let w = prompt("What is yout Weight in kg?");

// // // function getBMI(){
// // //   let bmi = w/(h*h);
// // //   if (bmi <= 18.5) return "You are Underweight";
// // //   if (18.6 <= bmi && bmi <= 24.9) return "You are perfect";
// // //   if (25 <= bmi && bmi <= 29.9) return "You are Overweight";
// // //   return "You are Obesed";
// // // }
// // // console.log(getBMI());

// // function getDiscount(percent) {
// //   return function (price) {
// //     return price - price * (percent / 100);
// //   };
// // }
// // let discounter = getDiscount(10);
// // console.log(discounter(200));

// let total = 0;
// function abcd(){
//   let newtotal = total;
//   newtotal++;
//   return newtotal;
// }
// console.log(abcd());
// console.log(`Total: ${total}`);

let arr = [39,48,58,57,64,73,84];
let sr = arr.sort(function(a,b){
  return b - a;
})