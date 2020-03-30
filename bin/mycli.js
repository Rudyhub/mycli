#!/usr/bin/env node

require('colors')
const commander = require('commander')
const package = require('../package')
const childProcess = require('child_process')

commander
  .version((package.name + '@' + package.version || '').green)
  .description(package.description || '')
  .usage('<projectName>')

commander
  .command('* <project>')
  .action(function (project) {
    if (project) {
      childProcess.exec('mkdir ' + project, (err) => {
        if(err) return console.err(err)
        console.log('创建了一个名为“'+project+'”的项目'.green)
      })
    } else {
      console.log('正确命令例子：mycli myproject'.red)
    }
  })
  commander.parse(process.argv)