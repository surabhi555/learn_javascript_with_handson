//modules
// import playGuitar from "./guitar.js";
// import { shredding as shred,plucking as fingerPick } from "./guitar.js";

// console.log(playGuitar());

// console.log(shred())

// console.log(fingerPick())

import * as Guitar from "./guitar.js"
import User from "./user.js"

const me=new User("email@email.com","surabhi")

console.log(me.greeting())

// console.log(Guitar.playGuitar())//TypeError: Guitar.playGuitar is not a function
//you need to change name to default
console.log(Guitar.default())

console.log(Guitar.plucking())

console.log(Guitar.shredding())