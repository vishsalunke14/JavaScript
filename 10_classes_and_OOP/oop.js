const user = {
    username: "Vishal",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("Got user details freom database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

const userOne = new User("Vishal", 13 ,true)

const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);