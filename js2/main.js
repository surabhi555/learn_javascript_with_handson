//objects
//key-value pairs

const myObj={name:"surabhi"};

console.log(myObj.name)

const anotherObj={
    alive:true,
    age:24,
    hobbies:["eat","sleep","code"],
    beverage:{
        morning:"coffee",
        afternoon:"iced tea"
    },
    action:function(){
        return `time for${this.beverage.morning}`
    }
}
console.log(anotherObj.alive)
console.log(anotherObj.age)
console.log(anotherObj.hobbies[0])
//instead of using . opererator we can also use []
console.log(anotherObj["alive"])

console.log(anotherObj.beverage.morning)

console.log(anotherObj.action())

const vehicle={
    wheels:4,
    engine:function(){
        return "vroom!"
    }
}

const truck=Object.create(vehicle)
truck.doors=2;
console.log(truck)
console.log(truck.wheels)//inheritance
console.log(truck.engine())

const car=Object.create(vehicle);
car.doors=2;
car.engine=function(){
    return "whoosh!"
}
console.log(car.engine())

const tesla=Object.create(car)
tesla.engine=function(){
    return "shhhhhhh...!"
}
console.log(tesla.engine());
console.log(tesla.wheels)

const band={
    vocals:"robert",
    guitar:"jimmy",
    bass:"paul",
    drums:"bonham"
};

//print keys of the obj
console.log(Object.keys(band))
console.log(Object.values(band))

for(let job in band){
    console.log(`on ${job} its ${band[job]}`)
}

//delete 

delete band.drums;
console.log(band.hasOwnProperty("drums"))

console.log(Object.keys(band))

//destructuring objects
//ONE WAY
const {guitar:myVariable,bass:myBass}=band;
console.log(myVariable)
console.log(myBass)

//OTHER WAY 
const {vocals,guitar}=band;
console.log(vocals)
console.log(guitar)

function sings({vocals}){
    return `${vocals} sings!!`
}
console.log(sings(band))
