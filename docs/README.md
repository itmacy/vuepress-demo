# VuePress构建个人博客网站
> VuePress Hello World 版本
## Windows环境搭建
### 安装node.js

### 全局安装 VuePress
> `npm install -g vuepress`

### 创建项目
> 创建一个名为`demo`的项目

### 初始化项目
> 进入到项目后，执行命令 `npm init` 或 `npm init -y`（默认yes），此时会生成一个`package.json`的文件

### 创建文件夹和文件
> 项目目录结构如下
```
|- demo
    |- docs
        |- .vuepress
            |- public
            |- config.js
        |- README.md
```
> 新建文件夹`docs`，在`docs`文件夹里面新建文件夹`.vuepress`和文件`READEME.md`
- 由于直接创建`.vuepress`文件是不成功的，此时需要使用命令行的方式创建文件：`mkdir .vuepress`
- 在`.vuepress`文件里面新建文件夹`public`和文件`config.js`

### 添加配置
- 在`config.js`中配置网站标题，描述和菜单信息等
```
module.exports = {
  title: 'itmacy\'s blog',
  description: 'itmacy的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'github', link: 'https://github.com/itmacy'},
      {text: '博客园', link: 'https://www.cnblogs.com/itmacy/'},
      {text: '简书', link: 'https://www.jianshu.com/u/88c9ba7ac8bd' },
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};

```

- 在`package.json`中添加两个启动命令
```
  "scripts": {
	"dev": "vuepress dev docs",
	"build": "vuepress build docs"
  }
```

### 启动项目
- 命令行执行 `npm run dev`
- 浏览器访问：`http://localhost:8080`


::: tip 参考来源

https://www.cnblogs.com/softidea/p/10084946.html
:::


  