let util = require('./util')

let esprima = require('esprima')
let code = util.getBody('/Users/bravf/code/mljr/mkt-platform/node_modules/echarts/lib/echarts.js')
let code2 = util.getBody('/Users/bravf/code/mljr/mkt-platform/static/htmls/compare/components/table.js')

//console.log(esprima.tokenize(code))

code = `var req1 = require('req1');
var req2 = require('req2');
console.log(require('req3'))
console.log('require("req4")')
require('hello' + ' world')
window['abcd'] = {a:'b'}
//hehe
module.exports = {
    req1: req1,
    req2: req2
}
`

let parseJSONCode = JSON.stringify(esprima.parse(code))
//parseJSONCode = JSON.stringify(esprima.tokenize(code))
util.createF('/Users/bravf/code/github/fepack/src/pjc.json', parseJSONCode)

// console.log(util.getRequireDepsByAst(code))
// console.log(util.getRequireDepsByAst(code2))

// let o = {
//     x: [
//         {y:1}
//     ]
// }
// let arr = []

// console.log(JSON.stringify([1,2,3,{a:"b"}], function (key, value){
//     // console.log(a)
//     return value.toString().toUpperCase()
// }))

//console.log(arr)