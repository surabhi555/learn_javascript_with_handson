// class pizza{
//     constructor(pizzaType,pizzaSize){
//         this.type = pizzaType;
//         this.size=pizzaSize;
//         this.crust="original";
//         this.toppings=[]
//     }

//     getCrust(){
//         return `baking a ${this.size} ${this.crust} crust ${this.type} type pizza!!`;
//     }
//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppings){
//         this.toppings.push(toppings)
//     }
//     bake(){
//         console.log(`baking a ${this.size} ${this.crust} crust ${this.type} type pizza!!`)
//     }
// }

// //obj
// const myPizza=new pizza("pepproni","small");

// myPizza.type="supreme"
// myPizza.setCrust("thin")
// myPizza.bake()
// myPizza.setToppings("olives")
// myPizza.setToppings("corn")
// console.log(myPizza.getToppings())

// class SpecialityPizza extends pizza{
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type="The Works!"
//     } 
//     slice(){
//         console.log(`our ${this.type} ${this.size} pizza has 12 slices`)
//     }
// }

// const mySpecility=new SpecialityPizza("medium");
// mySpecility.slice();


class pizza{
    crust="original";
    #sauce="traditional"
    #size;
    constructor(pizzaSize){
        this.#size=pizzaSize;//the underscore present there indicates that methods are intended to private
        
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }
    hereYouGo(){
        console.log(`here's your ${this.crust} ${this.#sauce} sauce ${this.#size}pizza`)
    }
}

const myPizza=new pizza("large");
myPizza.hereYouGo();
console.log(myPizza.sauce)//undefined
//factory function solution for classes with private fields
// function pizzaFactory(pizzaSize){
//     const crust="original";
//     const size=pizzaSize;
//     return {
//         bake:()=>console.log(`baking a ${size} ${crust} crust pizza..`)
//     }
// }
// const myPizza=pizzaFactory("small")
// myPizza.bake();