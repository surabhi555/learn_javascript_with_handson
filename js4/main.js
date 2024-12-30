//JSON 
// it is used to send and recieve data
// json is text format and completly language independent
// meaning json is used in many language not just javascript

const myObj={
    name:"surabhi",
    hobbies:["eat","sleep","code","study"],
    hello:function(){
        console.log("hello")
    }
}

console.log(myObj)
console.log(myObj.name)
myObj.hello()

const sendJSON=JSON.stringify(myObj);//json to string
console.log(sendJSON)//json doesnt send function and discards the function

console.log(typeof sendJSON)

console.group(sendJSON.name)

const reciedJSON=JSON.parse(sendJSON);//string to json

console.log(typeof reciedJSON)

