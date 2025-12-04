function weirdCase(string) {
  if (typeof string !== string) return string + alert('function weirdCase() needs a string!')

  const weirdString = (s) => [...s].map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase()))

  return weirdString
}

const myNewString = weirdCase('derp')

console.log(myNewString)

// math

const num = (n) => (op) => op ? op(n) : n

const one = num(1)
const two = num(2)
const three = num(3)
const four = num(4)
const five = num(5)
const six = num(6)
const seven = num(7)
const eight = num(8)
const nine = num(9)

const plus = (r) => (l) => l + r
const minus = (r) => (l) => l - r
const times = (r) => (l) => l * r
const dividedBy = (r) => (l) => l / r

function sequence(iterableArray) {
  if (!iterableArray.length) return 'Non-linear sequence'

    const nonIterable = 

  if (nonIterable) return 'Non-linear sequence'

  function pattern(array) {
    const variable = array[2] - array[1]
    const differential = array[1] - array[0]

    return `f(x) = ${variable}x${differential !== variable && ' +' + differential}`
  }

  return pattern(iterableArray)
}

const array = [2, 2, 2, 2, 2]

console.log(sequence(array))