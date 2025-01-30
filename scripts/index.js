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
const sum = nums.reduce((prev, current) => {
  return prev + current;
}, 0);

console.log(sum);
//stellas code
let names = ["John", "Jane", "Doe", "Smith"];
names.forEach(function (name,index){

  console.log(index);
  console.log(name);

})

let cities = ["Nairobi", "Kisumu", "Mombasa", "Nakuru"];
cities.forEach((city, index) => {
  console.log(city);
  console.log(index);
}); 
 
// .filter method - Filter out specific elements that meet a certain criteria
  const john = names.filter ((name,index)=>  {
    if(index % 2 ==0){
      console.log(name)
    }
  }
  )
let fullName = names.map ((names) => {
  console.log(names + " Njau" )
}) 

let number= [4,6,6,2,0,4,12.17,89,107.240]
const  numberSum = number.reduce((prev, current) => {
  })  
