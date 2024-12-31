//web storage api 
//not part of dom:refers to window api
//available to js  via global variable window
//we dont need to type window it is implied

// window.alert("ok!")== alert(location)
const myArray=["eat","sleep","code"]
const myObj={
    name:"surabhi",
    hobbies:["eat","sleep","code"],
    logName:function(){
        console.log(this.name)
    }
}



myObj.logName();

localStorage.setItem("myLocalStore",JSON.stringify(myArray))
// localStorage.removeItem("myLocalStore")
// localStorage.clear()
const storeLength=localStorage.length
const sessionData=JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log( storeLength)