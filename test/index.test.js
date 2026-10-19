const { test } = require('node:test')
const assert = require('node:assert/strict')
const { formatLine, cartTotal } = require('../src/index.js')

const strip = (s) => s.replace(/\x1b\[[0-9;]*m/g, '')

test('formatLine shows name, quantity and total', () => {
  assert.equal(strip(formatLine({ name: 'Tea', price: 2.5, qty: 3 })), 'Tea x3 = 7.50')
})

test('cartTotal sums price times quantity', () => {
  assert.equal(cartTotal([{ price: 2.5, qty: 3 }, { price: 1.1, qty: 2 }]), 9.7)
})
