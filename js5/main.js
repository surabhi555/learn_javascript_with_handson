 "use strict";

//  const variable="surabhi";
// console.log(variable);

const makeError =()=>{
    let i=1;
    while(i<=5){
        try{
            if(i%2!==0){
                throw new Error("odd number")
            }
            console.log("even numbers")
        }catch(error){
            // console.log(error.message);
            // console.log(error.name)
    
            // console.log("in catch block!!");
            console.error(error.stack);//gives error symbol
            // console.warn(error)//gives warning symbol
        }
        finally {
            console.log("finally!")
            i++;
        }
    }
}
makeError();

function customError(message){
    this.message=message;
    this.name="customError";
    this.stack=`${this.name}:${this.message}`
}

