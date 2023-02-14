function getData (data) {
  const statements = data.split(';')
  for (let i = 0; i < statements.length; i++) {
    statements[i] = statements[i].trim()
    if (statements[i].startsWith('dump.console(')) {
      const data = statements[i].match(/\((.*)\)/)[1]
      const dump_console = require('./compiler/dump.console')
      dump_console(data)
    }
  }
  return statements
}

module.exports = getData
