const chalk = require('chalk')
const _ = require('lodash')

// Formats a cart line for the terminal: name in bold, total in green.
function formatLine(item) {
  const total = _.round(item.price * item.qty, 2)
  return `${chalk.bold(item.name)} x${item.qty} = ${chalk.green(total.toFixed(2))}`
}

function cartTotal(items) {
  return _.round(_.sumBy(items, (i) => i.price * i.qty), 2)
}

module.exports = { formatLine, cartTotal }
