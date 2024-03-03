// check prime number

// function prime(n){
//   if( n == 0 || n == 1){
//     return false;
//   }
//   for(let i=2; i<n;i++){
//     if(n%i==0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(prime(17))


// // falsy values 
// function falsyValue(arr){
// let falsy =  [false, null, 0, "", undefined, NaN];
// let ans= []
//   for(let i = 0;i<arr.length;i++){
//     if(!falsy.includes(arr[i])){
//       ans.push(arr[i])
//     }
//   }
//   return ans;
// }
// console.log(falsyValue([1,2,3,4,null,5,8]))

// //nth fibonacci 

// // function findFibonacci(n) {
// //   if (n === 0) return 0;
// //   if (n === 1) return 1;

// //   var prev = 0;
// //   var current = 1;
// //   var next;

// //   for (var i = 2; i <= n; i++) {
// //     next = prev + current;
// //     prev = current;
// //     current = next;
// //   }

// //   return current;
// // }

// // console.log(findFibonacci(2))


// function reverseWordsInAString(s) {
//     let spl = s.split(" ");
//     let spl2 = spl.reverse()
//   return spl2
// }

// console.log(reverseWordsInAString("hello world"))

// function twoSum(nums, target) {
//     let sum = [];
//     for (let i=0;i<nums.length;i++){
//         if(nums[i] + nums[i+1] == target){
//            sum.push(nums[i],nums[i+1])
//         }
//     }
//     return sum;
// }

// console.log(twoSum([2,5,0],[7]))



// // generate string combination [a,b,c,d] [e,t,g,h] = [ae,bt,cg,dh]

// function combo(n,m){
//   let ans = []
//   for(let i=0;i<n.length;i++){
//     for(let j=0;j<m.length;j++){
//       ans.push(n[i] + m[j])
//     }
//   }
//   return ans;
// }
// console.log(combo(["a","b"],["g","h"]))


// sum of [[23,48],[12,18]] = 101

// function matrixSum(arr){
//   let sum = 0;
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//        sum = sum + arr[i][j]
//     }
   
//   }
//   return sum;
// }
// console.log(matrixSum([[1,2],[3,111]]));




//2D array 

// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 

// 7 4 1
// 8 5 2
// 9 6 3

// rotate a 2D array



// how to create an object

// var obj = { fullName: 'Alice P John' ,
//           age: 32 }
// var name = {Fullname : obj.fullName}
// console.log(name)

// //update

// obj.fullName = "Updated"
// var name = {Fullname : obj.fullName}
// console.log(name)

// // delete

// delete obj.fullName
// var name = {Fullname : obj.fullName}
// console.log(name)

// // check if property has or not

// var chek = obj.hasOwnProperty("fullName");
// var name = {Fullname : obj.fullName}
// console.log(chek)


// // array of objects find maximum capacity so we use dot . operator for accessing values


// function maxCapacityType(arr) {
//    var maxCapacity = 0;
//    var type = " ";
//    for (var i=0;i<arr.length;i++){
//       if( arr[i].capacity > maxCapacity){ 
//        maxCapacity = arr[i].type;
//        }
//    }
//    return maxCapacity;
// }
// var obj = 
//   [
//     {
//         color: 'red',
//         type: 'Station Wagon',
//         capacity: 5
//     },
//     {
//         color: 'green',
//         type: 'Convertible',
//         capacity: 2
//     },
//     {
//         color: 'white',
//         type: 'MiniVan',
//         capacity: 4
//     }
//   ];

// console.log(maxCapacityType(obj))




// foreach loop

// function each(arr, key){
//   arr.forEach((item) => {
//     if(item == key){
//       return false;
//     }
//   })
//   return true;
// }

// console.log(each([1,2,3,4,5],(0)))

// divide the ele

// let arr = [2,4,5]
// let ans = []
// arr.forEach((ele) => {
//   ans.push(ele/2)
// })
// console.log(ans)


// the find method , i want to find first even number in an array
// if i use if condition here it will populate every even num bcoz all will satisfy the condition so we have not used if condition so it returns first even number

// function even(arr){
 
//   return arr.find((ele) => 
//    ele % 2 === 0
//   )
  
// }
// console.log(even([1,3,5,7,9,22,88]))

//sort numbers
// use this arr.sort((a,b) => a - b) for sorting in ascending order

// let arr = [5, 6, 10, 22, 80]
// let sortStringMethod = arr.sort()
// let actualWayNumSorting = arr.sort((a,b) => a - b)
// let descending = arr.sort((a,b) => b - a)

// console.log(sortStringMethod)
// console.log(actualWayNumSorting)
// console.log(descending)



// map method
// we use map bcoz map returns a new array
// so when we want to create a new array from an existing array we use map


// function mapTest(arr){
//   return arr.map((ele) => 
//     ele*ele
//   )
// }



// // console.log(newArray)
// // console.log(arr)
// console.log(mapTest([5, 6, 10, 22, 80]))




// filter
//  The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array otherwise it will not be pushed.

// eligibility to vote
// so we dont need to apply conditions 

// function eligible(arr){

//   return arr.filter((ele) => 
//    ele >= 18
//   )

// }
// console.log(eligible([15,9,22,88, 18, 28]))


//.reduce() method 
// finding a sum
// The reduce() method reduces an array of values down to just one value.

// function sum(arr){

//   return arr.reduce((accumulator, currentValue) => 
//     accumulator + currentValue
//   )

// }
// console.log(sum([15,9,22,88, 18, 28]))


// .splice() method
// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// so the index is 2 and we are removing 2 elements so the apple and mango will be removed 

// function remove(fruits, startIndex, deleteCount) {
//    fruits.splice(startIndex, deleteCount);
//    return fruits;
// }

// console.log(remove(["Banana", "Orange", "Apple", "Mango", "Kiwi"], 2, 2))

// and if we want the removed one names we do this

// function remove(fruits, startIndex, deleteCount) {
//    var newArr = fruits.splice(startIndex, deleteCount);
//    return newArr;
// }

// console.log(remove(["Banana", "Orange", "Apple", "Mango", "Kiwi"], 2, 2))







// .slice() method
//The slice() method returns selected elements in an array, as a new array.
// its like if the starting index is 1 so 1st index ele will be printed and the last is 4 so till 3rd will be printed

// function getName(names, start, end) {
//   return names.slice(start, end);
// }


// console.log(getName(["Banana", "Orange", "Apple", "Mango", "Kiwi"], 1, 4))




// difference between splice ans slice are splice will remove the elements from existing array and slice will will return selcted elements in an array and gives new selected elements array




// object base question of js-1 session 10

// function getTopStudents(students, N) {
//   let ans = []

//   let ansSort = students.sort((a,b)=> b.grade - a.grade)
//   // console.log(ansSort)
//  for(let i = 0;i<N;i++){
//    ans.push(` name: ${ansSort[i].name}`)
//  }
//   return ans;
  
// }
// console.log(getTopStudents([
//              { name: "Alice", grade: 85 },
//              { name: "Emily", grade: 95 },
//              { name: "Charlie", grade: 78 },
//            ],
//            2))





//so we need to return all the passed students who achieved 90+

// function filterStudents(students, passingGrade){
//   let ans = []
//     students.filter((ele) => 
//     ele.grade >= passingGrade).forEach((currEle) => ans.push(currEle.name))
//   // so now we have passing grade whole object ans if we want a specific value we have to run a loop so im going with forEach
//   return ans;
// }

// const students = [
//   { name: 'Alice', age: 18, grade: 85 },
//   { name: 'Bob', age: 19, grade: 92 },
//   { name: 'Charlie', age: 17, grade: 78 },
//   { name: 'Charlie Cox', age: 17, grade: 90 },
// ];
// console.log(filterStudents(students, 90))

// we can achieve this by for loop also


// function filterStudents(students, passingGrade){
//   let ans = []
//     for(let i =0;i<students.length;i++){
//       if(students[i].grade >= passingGrade){
//         ans.push(students[i].name)
//       }
//     }
//   return ans;
// }

// const students = [
//   { name: 'Alice', age: 18, grade: 85 },
//   { name: 'Bob', age: 19, grade: 92 },
//   { name: 'Charlie', age: 17, grade: 78 },
//   { name: 'Charlie Cox', age: 17, grade: 90 },
// ];
// console.log(filterStudents(students, 90))



