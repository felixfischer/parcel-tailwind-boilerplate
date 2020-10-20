const fs = require('fs')
const jsYaml = require('js-yaml')
 
const data = jsYaml.safeLoad(fs.readFileSync('./src/data.yml', 'utf8'))

module.exports = {
  locals: data
}
