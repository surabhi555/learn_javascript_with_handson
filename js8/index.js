//higher order function
//a higher order function is if it does at least of the following
//takes one or more function as an argument
//returns a function as the result

import { posts } from "./posts.js";

posts.forEach(post=>{
    console.log(post)
})
console.clear()

//filter

const filterPosts=posts.filter(post=>{
    return post.userId===1;
})
console.log(filterPosts)
//map

const mappedPosts=filterPosts.map((post)=>{
    return post.id*10;
})
console.log(mappedPosts)

//reduce

const reducedPost=mappedPosts.reduce((sum,post)=>{
    return sum+post;
})
console.log(reducedPost)