const fse = require('fs-extra')
const path = require('path')

const jsonConfig = {
  "name": "vitepress-cli",
  "mirror": "https://zpfz.vercel.app/download/files/frontend/tpl/vitepress-cli/"
}

const configPath = path.resolve(__dirname,'../config.json')

async function defConfig() {
  try {
    await fse.outputJson(configPath, jsonConfig)
  } catch (err) {
    console.error(err)
  }
}

module.exports = defConfig


