# check-thai-pid
Check thai personal ID

## Installation

### npm

`npm install --save check-thai-pid`

### yarn

`yarn add check-thai-pid`

## Usage

**Hello World**

``` javascript
const CheckThaiPID = require('check-thai-pid')

const personalID = 9999999999999 //string or number

let outStr = CheckThaiPID(personalID) ? 'Personal ID is correct' : "Personal ID is incorrect"

console.log(outStr)
```