const expect = require('chai').expect
const CheckThaiPID = require('../src/check-thai-pid')

describe('CheckThaiPID', () => {
    it('PID is correct(input number)', () => {
        expect(CheckThaiPID(3731052662747)).to.equal(true)
    })
    it('PID is correct(input string)', () => {
        expect(CheckThaiPID('3731052662747')).to.equal(true)
    })

    it('PID is not correct(input number not 13 digit)', () => {
        expect(CheckThaiPID(373105266274)).to.equal(false)
    })
    it('PID is not correct(input number incorrect format)', () => {
        expect(CheckThaiPID(1111111111111)).to.equal(false)
    })
    it('PID is not correct(input string not 13 digit)', () => {
        expect(CheckThaiPID('373105266274')).to.equal(false)
    })
    it('PID is not correct(input string incorrect format)', () => {
        expect(CheckThaiPID('1111111111111')).to.equal(false)
    })
    it('PID is not correct(input string not number)', () => {
        expect(CheckThaiPID('test')).to.equal(false)
    })
    it('PID is not correct(input is null)', () => {
        expect(CheckThaiPID(null)).to.equal(false)
        expect(CheckThaiPID()).to.equal(false)
    })
})