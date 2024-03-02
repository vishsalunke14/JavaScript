// let myName = "Vishal     "
// let myChannel = "Chai    "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",


    getspiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.vishal = function(){
    console.log(`vishal is present in all object`);
}

Array.prototype.heyVishal = function(){
    console.log(`vishal says hello`);
}
// heroPower.vishal()
// myHeros.vishal()
// myHeros.heyVishal()
// heroPower.heyVishal()



// inheritance


const User = {
    name: "Chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"vishal".trueLength()
"iceTea".trueLength()