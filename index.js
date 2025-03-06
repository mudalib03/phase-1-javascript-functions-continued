// code your solution here
function saturdayFun (activity="roller-skate") {
    return  `This Saturday, I want to ${activity}!`

}


const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

const wrapAdjective = function(style = "*") {
    return function(adjective = "special") {
        return `You are ${style}${adjective}${style}!`;
    };
};


// let wrapAdjective = function(style= "*ou are *a hard worker*!") {
//     return function (adjective="special"){
//         return ` You are ${style} ${adjective} ${style}!`
//     }
// }

// const mondayWork  = Function(activity= "go to the office") {
//     return `This Monday, I will ${activity}.`;
// }
 
// const mondayWork (activity= "work from home") {
//     return `This monday i will ${activity}`
// }
