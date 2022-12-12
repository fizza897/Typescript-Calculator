#! /usr/bin/env node;
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";
const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}
async function welcome() {
    let rainbowTile=chalkAnimation.rainbow('lets start calculation'); //start
    await sleep ();
    rainbowTile.stop();
    console.log(` _____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|`)
        // console.log(`${rainbowTile} is Fine`)
}
await welcome()

async function askQuestion() {
    const ans =await inquirer 
    .prompt([
{
    type: "list",
    name:"operator",
    message :"which operation you want to perform? \n ",
    choices:["Addition","Subtraction","Multiplication","Division"]
},
{
    type: "number",
    name:"num1",
    message :"Enter number is 1:- "
},
{
    type: "number",
    name:"num2",
    message :"Enter number is 2:- "
}

    ])
    if
    (ans.operator == "Addition"){
        console.log(chalk.yellow(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`))
    }
    else if
    (ans.operator == "Subtraction"){
        console.log(chalk.blue(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`))
    }
    else if
    (ans.operator == "Multiplication"){
        console.log(chalk.green(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`))
    }
    else if
    (ans.operator == "Division"){
        console.log(chalk.gray(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`))
    }
}
// askQuestion()
async function startAgain(){
    do{
      await askQuestion();
      var again =await inquirer
      .prompt({
        type:"input",
        name:"restart",
        message:"Do you want to continue? press y or n:"
      })
      
    }
    while (again.restart == "y" || again.restart == "Y" || again.restart == "YES" || again.restart =="yes" )
}
startAgain()














