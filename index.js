#!/usr/bin/env node

const args = process.argv.slice(2)

if (args[0] === '-v' || args[0] === '--version') {
  console.log('v2023.1.0')
} else if (args[0] === '-h' || args[0] === '--help') {
  console.log(`Usage: 
    -v, --version - print version
    -h, --help - print help
    -r, --run - run the .dump file
    `)
} else if (args[0] === '-r' || args[0] === '--run') {
  if (args[1]) {
    const fs = require('fs')
    const path = require('path')
    const dump = fs.readFileSync(path.join(__dirname, args[1]), 'utf8')
    console.log(`Running ${args[1]}...`)
    const getData = require('./src/compiler')
    const data = getData(dump)
  }
} else {
  console.log(
    'No command specified. Use -h or --help to see available commands.'
  )
}
