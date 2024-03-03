function rotateImage(n, matrix) {
  //implement this function
  let rotatedMatrix = [];
  for (let i = 0; i < n; i++) {
    rotatedMatrix.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotatedMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = rotatedMatrix[i][j];
    }
  }
  return rotatedMatrix;
}

//create an empty 2d matrix and run a loop for empty spaces
// populate it with this formula rotatedMatrix[j][n - 1 - i] = matrix[i][j];
// remember the formula rotatedMatrix[j][n - 1 - i] = matrix[i][j];
// then again run a loop and change original matrix to rotated one
console.log(
  rotateImage(3, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

// populate a 2d array with values from size 0 to -1

function popu(n) {
  let arr = [];
  // lets create array
  for (let i = 0; i < n; i++) {
    arr.push([]);
    for (let j = 1; j <= n; j++) {
      arr[i].push(j);
    }
  }

  //lets populate

  return arr;
}
console.log(popu(5));


// now create it from 0 to upwards


function popu2(n) {
  let arr = [];
  let count = 0
  // lets create array
  for (let i = 0; i < n; i++) {
    arr.push([]);
    for (let j = 1; j <= n; j++) {
      arr[i].push(count);
      count++
    }
  }

  //lets populate

  return arr;
}
console.log(popu2(5));

// Transpose an array 


function transpose(arr) {
  // Create a new array to store the transposed matrix
  let transposed = [];
  // Iterate through each column of the original matrix
  for(let i = 0; i < arr.length; i++) {
    // Create a new row for each column
    transposed[i] = [];
    // Iterate through each row of the original matrix
    for(let j = 0; j < arr.length; j++) {
      // Assign the value of the original matrix to the transposed matrix
      transposed[i][j] = arr[j][i];
    }
  }
  // Return the transposed matrix
  return transposed;
}

console.log(transpose([ [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]
                      ];]))



//find intersection of 2 arrays

// function intersectionOfTwoArrays(nums1,nums2) {

//     // let inter = []
//     // for(let i=0;i<nums1.length;i++){
//     //     for(let j=0;j<nums2.length;j++){
//     //         if(nums1[i] == nums2[j]){
//     //             inter.push(nums1[i])
//     //         }
//     //     }
//     // }
//     // let st = new Set(inter)
//     // return st;

//     // optimized

//     let inter = []
//   for(let i=0;i<nums1.length;i++){
//       let ele = nums1[i]
//       if(nums2.includes(ele)){
//           inter.push(ele)
//       }
//   }
//     let st = new Set(inter)
//     return st;

// }

console.log(intersectionOfTwoArrays([1,2,2,1],[1,2,2]))


