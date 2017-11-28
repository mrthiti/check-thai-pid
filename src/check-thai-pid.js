module.exports = (pid = false) => {
  if (!pid) return false

  const PID = pid.toString()

  if (PID.length !== 13) return false

  let sum = 0
  for (let i = 0; i < 12; i++) sum += parseFloat(PID.charAt(i)) * (13 - i)

  return (11 - sum % 11) % 10 === parseFloat(PID.charAt(12))
}
