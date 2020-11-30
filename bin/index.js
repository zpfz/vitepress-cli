#!/usr/bin/env node

const updateChk = require('../lib/update')
const dlTemplate = require('../lib/download')
const setMirror = require('../lib/mirror')
const initProject = require('../lib/init')

const program = require('commander')
const chalk = require('chalk')
const symbols = require('log-symbols')

// version
program
  .version(require('../package.json').version, '-v, --version')

// init
program
	.name('vitepress-cli')
	.usage('<commands> [options]')
	.command('init <project>')
	.description('Create a VitePress project.')
	.action(project => {
		initProject(project)
	})
	
// upgrade
program
	.command('upgrade')
	.description("Check the VitePress-CLI version.")
	.action(() => {
		updateChk()
	})

// template
program
	.command('template')
	.description("Download template from mirror.")
	.action(() => {
		dlTemplate()
	})

// mirror
program
	.command('mirror <template_mirror>')
	.description("Set the template mirror.")
	.action((tplMirror) => {
		setMirror(tplMirror)
	})



program.on('--help', function() {
	console.log('')
	console.log('Examples:')
	console.log('  $ vitepress-cli init myproject')
	console.log('  $ vitepress-cli template')
	console.log('')
})



program.parse(process.argv)