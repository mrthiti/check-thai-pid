module.exports = pid => {
  if (!pid) return false
  const isNot13Digits = x => ((Math.log(x) * Math.LOG10E + 1) | 0) !== 13
  if (isNot13Digits(pid)) return false

  let sum = 0
  for (let i = 0; i < 12; i++) sum += parseFloat(pid.charAt(i)) * (13 - i)

  return (11 - sum % 11) % 10 === parseFloat(pid.charAt(12))
}
