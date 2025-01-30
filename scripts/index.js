{{  
  let nums = [1, 2, 7, 4, 5];
nums.forEach(function (num, index) {
  console.log(index);
  console.log(num);
});

let nums2 = [6, 7, 8, 9, 10];
nums2.forEach((num, index) => {
  console.log(num);
  console.log(index);
});

// .filter method - Filter out specific elements that meet a certain criteria
const even = nums.filter((value) => {
  if (value % 2 == 0) {
    return value;
  }
});
console.log(even);

// map
const addNum = nums2.map((value) => {
  return value + 1;
});
console.log(addNum);

//reduce method used to aggregrate use it to get the sum in an array
const sum = nums.reduce((prev, current, index) => {
  prev
  current;
  return prev > current ? prev : current;
});

console.log(sum);
// Jerald Codes
let babyNames = ["Junior", "Dorreen", "Njoki", "Njoroge", "Boi", "Ryan"];
let countryToVisit = ["Singapore", "Cuba", "Jamaica", "Ghana"];

babyNames.forEach(function(name, index){
  console.log(name);
  console.log(index);
});

countryToVisit.forEach((country) => {
  console.log(country);
});

babyNames.filter((name, index)=>{
  if(index % 2 !== 0){
    console.log(name);
  }
});

let fullNames = babyNames.map((name)=>{
  return name + " Nyaga"
})
console.log(fullNames);

const myNumbers = [4,92,1,192, 88, 5, 92, 198, 12, 39, 43];

const bigNum = myNumbers.reduce((prev, next) =>{
  return prev > next ? prev : next;
}, 0)
console.log(bigNum);
}}
