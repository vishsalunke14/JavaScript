// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        // break;
        // break;   if there is no break then after case 3 all code are execute except dafalut 
    case 4:
        console.log("April");
        // break;
// before dafault there is no break statement then dafault also executed
    default:
        console.log("Default are match");
        break;
}