<p align=center><img src="https://s2.ax1x.com/2020/02/04/1DsmTO.png" height = "100" /></p>

<h2 align="center">VitePress-CLI</h2>

<p align="center">A lightweight CLI for VitePress project.</p>

<p align="center">
<img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square" alt="Build Status">
<img src="https://img.shields.io/github/package-json/v/zpfz/vitepress-cli?style=flat-square&color=orange" alt="Version">
<img src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square&color=blue" alt="MIT">
<img alt="npm" src="https://img.shields.io/npm/dt/vitepress-cli?style=flat-square&color=red" alt="downloads">
</p>

<p align="center">  
<a href="./README.md">English</a> | 简体中文
</p>

# 安装
```
$ npm i vitepress-cli -g
```
# 使用
运行下面的命令来创建项目：
```
$ vitepress-cli init myproject
```

# 参数
## init <PROJECT_NAME>
创建 VitePress 项目：
```
$ vitepress-cli init myproject
```

## upgrade
检查是否有 vitepress-cli 新版本可用：
```
$ vitepress-cli upgrade
```

## template
你可以从镜像链接下载或者更新本地的模板：
```
$ vitepress-cli template
```

## mirror <TEMPLATE_MIRROR>
你也可以设置模板镜像链接，比如这样：
```
$ vitepress-cli mirror https://zpfz.vercel.app/template/vitepress/
```
**小纸条**  
你可以自定义镜像链接，但模板文件名必须是 `template.zip`，而且镜像链接必须以 `/` 结尾。  
举个栗子：你自定义模板镜像的完整链接为 `https://example.com/mirror/template.zip`，那么， vitepress-cli 脚手架可以识别的链接为 `https://example.com/mirror/`。

你可以从 [vitepress-cli/tpl](https://github.com/zpfz/vitepress-cli/tree/master/tpl) 下载 VitePress 模板，然后放到你自己定义的镜像链接中。
