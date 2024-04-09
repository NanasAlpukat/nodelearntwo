const validator = require('validator')
const chalk = require('chalk')

// console.log(validator.isEmail("nanas@gmail.com"))
// console.log(validator.isMobilePhone("0823197332","id-ID"))
console.log(chalk.bgBlue.black(validator.isNumeric("0823197332")))