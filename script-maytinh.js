let check = 1;
let result;

// do{
//     let operator = prompt(`Input Operator(+, -, *, /) :`);
//     let numberA = parseInt(prompt(`Input a number : `));
//     let numberB = parseInt(prompt(`Input b number : `));
//     if(operator == "+" && numberA == true && numberB == true){
//         result = numberA + numberB;
//         alert(`${numberA} ${operator} ${numberB} = ${result}`)
//         check = 1;
//     }else if(operator == "-" && numberA == true && numberB == true){
//         result = numberA - numberB;
//         alert(`${numberA} ${operator} ${numberB} = ${result}`)
//         check = 1;
//     }else if(operator == "*" && numberA == true && numberB == true){
//         result = numberA * numberB;
//         alert(`${numberA} ${operator} ${numberB} = ${result}`)
//         check = 1;
//     }else if(operator == "/" && numberA == true && numberB == true){
//         result = numberA / numberB;
//         alert(`${numberA} ${operator} ${numberB} = ${result}`)
//         check = 1;
//     }else{
//         alert(`Operator or Number is Wrong, Pls enter again...`)
//         check = 0;
//     }
// }while(check == 0)

// alert(`Done`)

// do{
//     let operator = prompt(`Input Operator(+, -, *, /) :`);
//     let numberA = parseInt(prompt(`Input a number : `));
//     let numberB = parseInt(prompt(`Input b number : `));
//         switch(operator){
//             case `+`:
//                 result = numberA + numberB;
//                 console.log(`${numberA} ${operator} ${numberB} = ${result}`);
//                 check = 1;
//                 break;
//             case `-`:
//                 result = numberA + numberB;
//                 console.log(`${numberA} ${operator} ${numberB} = ${result}`);
//                 check = 1;
//                 break;
//             case `*`:
//                 result = numberA + numberB;
//                 console.log(`${numberA} ${operator} ${numberB} = ${result}`);
//                 check = 1;
//                 break;
//             case `/`:
//                 result = numberA + numberB;
//                 console.log(`${numberA} ${operator} ${numberB} = ${result}`);
//                 check = 1;
//                 break;
//             default:
//                 console.log(`Sorry, Wrong operator`);
//                 break;
//         }
// }while(check == 0)
while(!!check == true){
    let number = parseInt(prompt(`Enter your Number:`));
    if(number == true && number == 1){
        console.log(`your number isn't Prime number`);
        check = 0;
    }else if(!!number == true && number > 1){
        console.log(`Your number is Prime number`);
        check = 0;
    }else if(!!number == true && number < 1){
        console.log(`Your number isn't Prime number`);
        check = 0;
    }else{
        console.log(`Wrong number`);
    }
}