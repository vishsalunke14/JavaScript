const user = {
    username: "Vishal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);




// function chai(){
//     let username = "Vishal"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "Vishal"
//     console.log(this.username);
// }

// chai()


const chai = () => {
    let username = "Vishal"
    console.log(this)
}

// chai()

// const addTwo = (num1,num2) =>  num1 + num2;
// const addTwo = (num1,num2) =>  (num1 + num2);
const addTwo = (num1,num2) =>  ({username: "Vishal"});

console.log(addTwo(3,5))


const myArray = [2,3,45,56]



