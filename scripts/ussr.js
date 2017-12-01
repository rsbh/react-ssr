#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const chalk = require('chalk')
const { spawnSync } = require('child_process');
const path = require('path')
const tempPackageJson = require('../template/package.temp.json')
const ncp = require('ncp').ncp;

const name = argv.init || argv.i || 'ussr-sample'
if (!fs.existsSync(name)){
    fs.mkdirSync(name);
    console.log(chalk.blue('created directory', name))
} else {
    console.log(chalk.red(name, 'is already present'))
    process.exit(1)
}

tempPackageJson.name = name

process.chdir(name)
fs.writeFileSync('package.json', JSON.stringify(tempPackageJson))

ncp(path.resolve(__dirname, '../template/tempFolder'), './', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(chalk.blue('created project\'s directory'))
});

console.log(chalk.green('installing dependencies'))
spawnSync('npm', ['install'])
process.chdir('../')

console.log(chalk.bgBlue.bold('USSR created the project successfully'))