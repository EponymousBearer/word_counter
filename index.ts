import chalk from 'chalk';
import inquirer from "inquirer";

const answers : {
    sentence: string,

} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To  Count The Word"
    },
])

const word = answers.sentence.trim ().split(" ")

console.log(`Your Sentence Word Count is ${chalk.green(word.length)}`)