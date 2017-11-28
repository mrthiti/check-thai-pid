module.exports = pid => {
  if (!pid) return false
  const isNot13Digits = x => ((Math.log(x) * Math.LOG10E + 1) | 0) !== 13
  if (isNot13Digits(pid)) return false
  const pidArray = [...pid.toString()]
  const lastDigit = Number(pidArray.pop())
  const sum = pidArray.map((x, i) => Number(x) * 13 - i).reduce((x, y) => x + y)
  return (11 - sum % 11) % 10 === lastDigit
}
