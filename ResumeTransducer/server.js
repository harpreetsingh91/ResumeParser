const express = require('express')
const cmd = require('node-cmd')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const Promise = require('bluebird')
 
const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })

app.get('/convert', function (req, res) {
    res.send('Hello World!')
})
getAsync("java -cp 'bin/*:../GATEFiles/lib/*:../GATEFiles/bin/gate.jar:lib/*' code4goal.antony.resumeparser.ResumeParserProgram '/Users/harpreetsingh/Google Drive/Resume/HarpreetSinghResume.pdf'  /Users/harpreetsingh/Desktop/harpreetresume.json").then(data => {
  console.log('cmd data', data)
}).catch(err => {
  console.log('cmd err', err)
})

