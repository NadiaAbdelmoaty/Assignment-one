// 1
let one = (number)=>{
  return Number(number)+7
}

//---------------------------------------
//2
let two = (invalid) => {
    if(invalid == false){
   console.log("invalid")
 }
};
// ----------------------------------
// 3
let three =()=>{
for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

}
// ----------------------
// 4
let arr = [1, 2, 3, 4, 5];
let four = (func) => {
  arr.filter((value) => {
    if (value % 2 == 0) {
      console.log(value);
    }
  });
};
// --------------------------------------

// 5
let five = () => {
  let x = [1, 2, 3];
  let y = [4, 5, 6];
  return [...x, ...y];
};

// --------------------------------
// 6
let six = () => {
  let day;
  let dayNumber = 6;
  switch (dayNumber) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    default:
      day = "invalid number"
      break;
  }
  return day
};
// -------------------------------
// 7
let seven=()=>{
let  arr = ["a", "ab", "abc"]
  return arr.map((ele)=>{
    return ele.length
  })
}
// --------------------------------
// 8
let eight = (y) => {
  if (y % 3 == 0 && y % 5 == 0) {
    console.log(" “Divisible by both” ")
  }
};
// --------------------------------------
// 9
let nine =(number)=>{
  return number**2
}


//  ----------------
// 10
function dis ({fname,age}){
return`${fname} is ${age}years old`
}

// ----------------------
// 11
function summetion(...numbers){
  let total = 0
  for(n of numbers){
    total += n

  }
  return total
}
// ---------------------------------------
// 12
function one(){
  setTimeout(() => {
    console.log("Success")
  }, 3000);
}
console.log(one())
function yalhwe(){
  return new Promise((r,j)=>{
  

}).then((re)=>{
  console.log(one())
})
}
// ---------------------------------
// 13
let x = () => {
  arr = [1, 3, 7, 2, 4];
  arr.sort((a, b) => {
    return b - a;
  });
  return arr[0];
};
// -----------------------------------------
// 14
function k_object(a={}){
return Object.keys(a)
}
// ------------------------------------
// 15
let splits = (x) => {
  console.log(x.split(" "));
};
// ---------------------------------------
