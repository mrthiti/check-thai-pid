const { expect } = require('chai')
const checkThaiPID = require('../src/check-thai-pid')

describe('CheckThaiPID', () => {
  it('PID is correct(input number)', () => {
    expect(checkThaiPID(3731052662747)).to.equal(true)
  })

  it('PID is correct(input string)', () => {
    expect(checkThaiPID('3731052662747')).to.equal(true)
  })

  it('PID is not correct(input number not 13 digit)', () => {
    expect(checkThaiPID(373105266274)).to.equal(false)
  })

  it('PID is not correct(input number incorrect format)', () => {
    expect(checkThaiPID(1111111111111)).to.equal(false)
  })

  it('PID is not correct(input string not 13 digit)', () => {
    expect(checkThaiPID('373105266274')).to.equal(false)
  })

  it('PID is not correct(input string incorrect format)', () => {
    expect(checkThaiPID('1111111111111')).to.equal(false)
  })

  it('PID is not correct(input string not number)', () => {
    expect(checkThaiPID('test')).to.equal(false)
  })

  it('PID is not correct(input is null)', () => {
    expect(checkThaiPID(null)).to.equal(false)
    expect(checkThaiPID()).to.equal(false)
  })
})
