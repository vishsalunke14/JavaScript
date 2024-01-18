// singleton
// Object.create

// object literals

const mySym =Symbol("key1")

const jsUser = {
    name: "Vishal",
    "full name": "vishal Bhau",
    [mySym] :"myKey1",
    age: 22,
    location: "Pune",
    email: "vishsalunke14@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "vish@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "vish@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
