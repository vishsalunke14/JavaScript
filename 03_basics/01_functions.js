
function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("l");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    
}

const result = addTwoNumbers(3,4)
// console.log(`Result is ${result}`);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter a Username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishal"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500))

// function object
const user = {
    username: "Vishal",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 300
})


// function array

const myNewArray = [200,400,600]

function returnSecondValue(getArray){
    // return getArray[1]
    return getArray
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([1000,2000,400,500]));