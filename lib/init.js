const fse = require('fs-extra')
const ora = require('ora')
const chalk = require('chalk')
const symbols = require('log-symbols')
const path = require('path')

const dlTemplate = require('./download')
const updateChk = require('./update')

async function initProject(projectName) {
	try {
		const exists = await fse.pathExists(projectName)
		if (exists) {
			console.log(symbols.error, chalk.red('The project already exists.'))
		} else {
			const initSpinner = ora(chalk.cyan('Initializing project...'))
			initSpinner.start()

			const templatePath = path.resolve(__dirname, '../template/')
			const processPath = process.cwd()
			const LCProjectName = projectName.toLowerCase()
			const targetPath = `${processPath}/${LCProjectName}`

			const exists = await fse.pathExists(templatePath)
			if (!exists) {
				await dlTemplate()
			}

			try {
				await fse.copy(templatePath, targetPath)
			} catch (err) {
				console.log(symbols.error, chalk.red(`Copy template failed. ${err}`))
				process.exit()
			}


			initSpinner.text = 'Initialize project successful.'
			initSpinner.succeed()
			console.log(`
To get started:

	cd ${chalk.yellow(LCProjectName)}
	${chalk.yellow('npm install')} or ${chalk.yellow('yarn install')}
	${chalk.yellow('npm run dev')} or ${chalk.yellow('yarn run dev')}
					`)
			updateChk()
		}
	} catch (err) {
		console.error(err)
		process.exit()
	}
}

module.exports = initProject
