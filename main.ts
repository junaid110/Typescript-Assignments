import inquirer from "inquirer";
import { type } from "os";

const results : {
    firstNumber: number,
    secondNumber: number,
    operator: string
} = await inquirer.prompt([
       {  
    type: "number",
    name: "firstNumber",
    message: "Please Enter First Number"

       },
       {  
        type: "number",
        name: "secondNumber",
        message: "Please Enter Second Number"
    
        },
        {  
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Divide", "Multiply"],
            message: "Please Select Operator"
        
         },
]);

const {firstNumber, secondNumber,operator}= results;
if(firstNumber && secondNumber && operator) {
         let results: number = 0;
if (operator ==="Addition"){
    results = firstNumber + secondNumber;
} else if (operator ==="Subtraction"){
    results = firstNumber - secondNumber;
} else if (operator ==="Divide"){
    results = firstNumber / secondNumber;
} else if (operator ==="Multiply"){
    results = firstNumber * secondNumber;
}
   console.log("Your Result is",results)
} else {
    console.log("please enter valid number");
}