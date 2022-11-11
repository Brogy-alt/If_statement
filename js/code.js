

// if statment
// let numb = 12;
// if(numb > 13) {
//     document.write ("Great than 13");
// }else {
//     document.write("less than 13");
// }

// Using a function

// function isNumber (onlyNumber) {
//     if(Number.isFinite(onlyNumber)) {
//         document.write (`${onlyNumber}is a number`);
//     }else {
//         document.write(`${onlyNumber}is not a number`);
            
//         }  
// }

// calling function
// let myNumber = 7.6;
// isNumber(myNumber);

// challenge
// mine




// if(numb >= 100) {
//     document.write ("Great or equals than 100");
// }else {
//     document.write ("Less than 100");

// }

// function addition (onlyNumber , onlyAge ) {
//     if(Number.isFinite(onlyNumber)) {
//         document.write (`${onlyNumber}is a number`);
        
//     }else {
//         document.write(`${onlyNumber}is not a number`);
        
//     }if(Words.isFinite(onlyAge)) {
//         document.write (`${onlyAge} is a young`)

//     }else {
//         document.write(`${onlyAge} is not young`)

//     }
// }

// let numb = 90;
// let myNumber = 105 ;

// let onlyAge = 18;
// let myAge = 21;


// if (myNumber > numb) {
//     document.write ("Great than 100");
// }else {
//     document.write ("less than 100");
// }

// if (myAge > onlyAge) {
//     document.write ("adult");
// }else {
//     document.write ("Not an adult");
// }

// Joels example
// function addition(numb1,numb2) {
//     if((Number.isFinite(numb1))&&
//     (Number.isFinite(numb2)) ) {
//         console.log (numb1 + numb2);
//     }else{
//         console.log(`${numb1} / ${numb2} is not a number`);
//     }
// }

// Joels example (shorter)
// function addition(numb1, numb2) {
//     if((Number.isFinite(numb1)) &&
//     (Number.isFinite(numb2)) ) return numb1 + numb2;
//     return `${numb1} / ${numb2} is not a number`;
// }
// console.log(addition(8, 7));


// another way to do if statement (Nested)
// let age = 18;
// let salary = 4999;
// if(age > 17) {
// if(salary >=5000) {
//         document.write("You are qualified")
//     }else {
//         document.write("Present your second payslip");
//     }
// }


// logical if statement
// if((age > 17) && (salary >= 5000)) {
//     document.write("Your are qualified");
// }else {
//     document.write("You are not qualified");
// }

// switch statement
// let marks = 51;
// switch(marks) {
//     case 100:
//     case 95:
//         document.write("Grade A");
//     break;
//     case 91:
//     case 90:
//     case 87:
//         document.write("Grade B");
//     break;
//     case 50:
//         document.write("Passed");
//     break;
//     case 49:
//         document.write("Failed");
//     break;
//     default:
//         document.write("Not found");
// }

// myexercise
// let marks = 71;
// switch(true) {
//     case marks <= 49:
//         console.log("You failed");
//     break;
//     case (marks >= 50) && (marks <= 69):
//         console.log("Passed");
//     break;
//     case (marks >= 70) && (marks <= 90):
//         console.log("Distinction");
//     break;
//     case (marks >= 91) && (marks <= 100):
//         console.log("You're awesome");
//     break;
// }


// Different loop in JS:
// - for
// - for in: Loop through object's properties
// - for of: Loop through the values 
// - while
// - do while



// for(let i = 0; i<2; i++) {
//     if ((i % 5) === 0)
//     console.log(i);


// if(i == 4) continue;
// console.log(i);

// }

// for in
// let person = {
//     name: 'Jews',
//     surname: 'come again',
//     subject: ['HTML', 'CSS3'],
//     address: {
//         streetName: 'Jackson rd',
//         country: 'USA',
//         complexName: 'PTA'
//     }

// }

// let (let data in person) {
//     if(data != 'address')
//     console.log(`${data}: ${person[data]}`)
// }
// console.log(person);

// console.log(
//     ` 
//     Name: ${property.name}
//     Surname: ${person.surname}
//     Street name: ${person.address}
    
//     `
// );


// let numbers = [9, 7, 4, 34, 8];

// for(let number of numbers) {
//     console.log(number);
// }

// for(let i =0; i<numbers.length; i++) {
//     console.log (numbers([i]));
// };

// while 