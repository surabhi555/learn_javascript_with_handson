//arrays
const myArray=[];
//add elements to array
myArray[0]="SURABHI";
myArray[1]=23;
myArray[2]=true;

//refer to array
console.log(myArray)
//length property
console.log(myArray.length)

//last element in array
console.log(myArray[myArray.length-1])

console.log(myArray[1])

//add the data
myArray.push("school")

console.log(myArray)

//remove element from last
const lastItem=myArray.pop()
console.log(lastItem)

console.log(myArray)

//add data in begin
const newLength=myArray.unshift(5000)//when we add then return value is new length of the array
console.log(newLength)//4 we can also do that with push
console.log(myArray)
const firstItem=myArray.shift();
console.log(firstItem)//in case of shift it returns first element 
console.log(myArray)//surabhi 23 true
console.log(myArray[3])//undefined

//delete at the specific position
delete myArray[2];
console.log(myArray)//surabhi 23 empty
console.log(myArray[3])//it doesnt remove it just undefined the value present at that position

myArray.splice(2,2);
console.log(myArray)//surabhi 23

//replace that value
myArray.splice(1,1,"kiran")

console.log(myArray)//surabhi kiran

myArray.splice(1,0,"PEDNEKAR")
console.log(myArray)//surabhi PEDNEKAR kiran   by making second params
//  0 it adds the third params in front of given position

const newArray=["A","B","C","D","E","F"];

console.log(newArray.slice(2))

console.log(newArray.reverse())//reverse the array

//join method
const newString=newArray.join()

console.log(newString)
//split

console.log(newString.split(","))

//concat

const myArrayA=["a","b","c"];
const myArrayB=["d","e","f"];
const myNumA=[1,2,3];
const myNumB=[4,5,6];

console.log(myArrayA.concat(myArrayB))

//spread opererator

let combinedArray=[myArrayA,myArrayB];
console.log(combinedArray)//[Array(3),Array(3)]
combinedArray=[...myArrayA,...myArrayB];
console.log(combinedArray)//["a","b","c","d","e","f"]
//nested arrays
// myArrayA=["a","b","c"];
// myArrayB=["d","e","f"];
//myNumA=[1,2,3];
// myNumB=[4,5,6];
//combinedArray=[myArrayA,myArrayB];
const equiArray=[myArrayA,myArrayB]
const equiNum=[myNumA,myNumB]

combinedArray=[equiArray,equiNum]
console.log(combinedArray)//[Array(2),Array(2)]

console.log(combinedArray[0][0][0]);//a
console.log(combinedArray[1][1][0])//4

