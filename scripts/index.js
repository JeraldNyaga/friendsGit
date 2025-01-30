let nums = [1, 2, 3, 4, 5];
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
// const sum = nums.reduce((prev, current) => {
//   console.log("here")

//   console.log(current);
//   console.log((prev[index]));
// }, 0);

// console.log(sum);
//muthoni code
let names = ["stacey", "afasan", "carl", "polly"];
names.forEach(function (name, index) {
  console.log(name);
  console.log(index);
});
let cities = ["cape town", "canada", "jamaica", "zanzibar"];
cities.forEach((city, index) => {
  console.log(city);
  console.log(index);
});

const polly = names.filter((name, index) => {
  if (index % 2 !== 0) {
    console.log(name);
  }
});
let fullname = names.map((names) => {
  console.log(names + " Wamaitha");
});
let myNumber = [4, 6, 8, 5, 0, 3, 72, 1000, 56, 375];


const bigNum = myNumber.reduce((prev, next) => {
  let bigNumber = undefined;

  if (prev > next) {
    bigNumber = prev;
  } else if (prev < next) {
    bigNumber = next;
  }
  return bigNumber;
}, 0);
console.log(bigNum);
