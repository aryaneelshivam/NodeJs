import chalk from 'chalk'
console.log(chalk.blue("Hello World"));
console.log(chalk.green.bold("Hello World ") + chalk.red.bold("Error ") + chalk.yellow.bold("Warning "));
console.log(chalk.red.bold({errmessage:"error"}));