# umi-plugin-script

[![NPM version](https://img.shields.io/npm/v/umi-plugin-script.svg?style=flat)](https://npmjs.org/package/umi-plugin-script)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-script.svg?style=flat)](https://npmjs.org/package/umi-plugin-script)

解决不知道前端部署的时候 ip 地址需要由现场部署人员配置一些现场的配置参数
相比提取`document.ejs`提取到`pages`下面是一种更好的解决方案
保持文件结构整洁,为部署人员提供部署时自定义的配置项

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `config/config.js`,

```js
export default {
  plugins: [["umi-plugin-script", {
    path?:filepath
  }]]
};
```

## Options

| 参数 | 必填   | 默认值          | 备注                                                                                    |
| ---- | ------ | --------------- | --------------------------------------------------------------------------------------- |
| path | 非必填 | config/index.js | path 可以是<br/>"config/config.js"<br/>或者是 [“config/config1.js”,"config/config2.js"] |

### Warnning

如何使用插件后页面出现 `umi Uncaught SyntaxError: Unexpected token <` 报错,请检查引入的 script 的文件是否存在!

## LICENSE

MIT
