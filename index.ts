#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstName" },
  { message: "Enter second number", type: "number", name: "secondName" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstName + answer.secondName);
} else if (answer.operator === "Substraction") {
  console.log(answer.firstName - answer.secondName);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstName * answer.secondName);
} else if (answer.operator === "Division") {
  console.log(answer.firstName / answer.secondName);
} else {
  console.log("please select valid operator");
}
