"use strict";

// let x = 16; // have to declare using let, const, or var because we are in strict mode
// console.log(x)

// *** FUNCTIONS REVIEW *** //

// const ageCheck = (age) => {
//     if (age < 21) {
//         console.log("No drinks for you!")
//     } else {
//         console.log("PARTAYYY!")
//     }
// } 
// ageCheck(12)
// ageCheck(21)

// *** .LENGTH METHOD *** // --> tells the length of the string or array, NOT the last index
// const lengthOutput = (strang) => {
//     return strang.length
// }
// console.log(lengthOutput([1,2,3,4,5,6,7]))

// *** .INDEXOF METHOD *** // --> tells the index of the value passed in
// const quoteFinder = (testString) => {
//     return "winter is coming".indexOf(testString)
// }

// console.log(quoteFinder("is"))


// *** OBJECTS *** //

const employee = {
    firstName: 'Faitlyn', // all "key: value" pairs
    lastName: 'VanHook',
    role: 'student',
    accountNumber: '123456',
    isManager: false,
    titles: ['teacher', 'bad bitch',], // array inside of an object
    accolade: { // object inside of an object
        title: 'Employee of the Year',
        dateEarned: '1/2/2020',
        expires: '12/21/2020',
        isCool: true
    }
}

// console.log(employee.firstName) // dot notation
// const keyToCheck = 'accolade';

// console.log(employee[keyToCheck])

// console.log(employee.accolade.isCool)
// console.log(employee[keyToCheck]['isCool'])
// console.log(employee[keyToCheck].isCool)
// console.log(employee.keyToCheck.isCool) // "cannot read property isCool" keyToCheck isn't in this object, so if we use a variable, we need to use bracket notation

// *** create a function that takes in an employee
// *** if the employee's firstName starts with a K, add a key=status and value='vip'
// *** if the employee's firstName does not start with a K, then add a key=staus and value='peasant'

// const statusUpdate = (object) => {
//     if (object.firstName.startsWith('K')) {
//         object.status = 'vip'
//     } else {
//         object.status = 'peasant'
//     }
// }

// statusUpdate(employee)
// console.log(employee.status)


const employeeStatus = (object) => {
    if (object.firstName[0] === 'K') {
        object.status = 'vip'
    } else {
        object.status = 'peasant'
    }
}

employeeStatus(employee)
console.log(employee.status)

