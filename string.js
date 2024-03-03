// Strings

//concat
let a = "arohi";
let b = "aditya";

//output == aa concat a and a

// let ans = a.charAt(0) + b.charAt(0)

// console.log(ans);

// indexOf() will give fst occurence of the substring and lastIndexOf will give last

let str = "hello there we are revising strings currently strings";

let fst = str.lastIndexOf("strings");
console.log(fst);

// now lets check for given 2 strings like gein word is present only one time or not

let str1 =
  "hello there we are revising strings currently and we are checking for words frequency";

// so if the given word is "we" check if we is present once in a string or not
// for that we chek fst and last index of we if both were same then it is present only once

let first = str1.indexOf("we");
let last = str1.lastIndexOf("we");

if (first == last) {
  console.log("once");
} else {
  console.log("not once");
}

// bcz index of is xyz and last index will be different if there are more we

// .substring() method takes two arguments (startIndex, LastIndex)

let str3 = "Hello bhailog";
console.log(str3.substring(2, 7));

// lets say i want to repeat a string
function repeat(str, k) {
  // let str4 = "Shah Rukh Khan"

  let ans = " ";

  let i = 0;
  while (i < k) {
    ans = ans + str;
    i++;
  }
  return ans;
}
console.log(repeat("Shah Rukh Khan ", 3));

//or we just use .repeat()

// let str5 = "Shahrukh Khan "

// let ans = str5.repeat(3);

// console.log(ans);


// find longest word in a string

function longg(n){
  let spl = n.split(" ")
  let max = "";
  for(let i=0;i<spl.length;i++){
    if(spl[i].length > max.length){
      max = spl[i]
    }
  }
  return max;
}
console.log(longg("hello guyz welcome"))

//reverse a string and thats how we run a loop from backwards
let str = "hello"
let str1= ""
for(let i = str.length - 1;i>= 0;i--){
  str1 = str1 + str[i]
}
console.log(str1)