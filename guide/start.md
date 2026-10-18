# 快速开始

这个模板的所有站点配置都写在 `index.html` 的 `window.$docsify` 对象里。下面是最常用的部分。

## 站点信息

```js
window.$docsify = {
  name: 'Docsify Starter',
  nameLink: '/',
  repo: '', // 完整仓库 URL；留空不显示右上角 GitHub 角标
  auto2top: true,
  skipLink: '跳到主要内容',
};
```

同时修改 `<head>` 里的 `<title>` 和 `<meta name="description">`。

## 页面与导航

| 文件            | 作用     | 对应配置                       |
| --------------- | -------- | ------------------------------ |
| `README.md`     | 首页     | `homepage`（默认 `README.md`） |
| `_sidebar.md`   | 侧边栏   | `loadSidebar: '_sidebar.md'`   |
| `_navbar.md`    | 顶部导航 | `loadNavbar: '_navbar.md'`     |
| `_coverpage.md` | 封面页   | `coverpage: true`              |
| `_404.md`       | 404 页面 | `notFoundPage: true`           |

### 新增页面

1. 新建 Markdown 文件，例如 `guide/faq.md`；
2. 在 `_sidebar.md` 中加一行：

   ```markdown
   - [常见问题](/guide/faq.md)
   ```

3. 预览时通过 `#/guide/faq` 访问，或直接点击侧边栏链接。

### 标题层级

- `subMaxLevel: 3`：在侧边栏中显示页面内 `##`、`###` 标题；
- `maxLevel: 4`：目录（TOC）抓取的最大标题层级。

## 中英文切换

默认中文在根目录，英文在 `en/`。右下角「中 / EN」按钮会保留当前页面路径。

英文示例文件：

```text
en/
├── README.md
├── _coverpage.md
├── _sidebar.md
├── _navbar.md
├── _404.md
└── guide/start.md
```

新增英文页面：

1. 在 `en/` 下创建与中文页面同名的 `.md` 文件；
2. 在 `en/_sidebar.md` 中加入链接；
3. 通过 `#/en/...` 访问。

界面文案按路径配置，例如：

```js
search: {
  placeholder: {
    '/en/': 'Search',
    '/': '搜索',
  },
},
```

`fallbackLanguages: ['en']` 会让缺失的英文页面回退到中文同名页面；删除它则直接显示 404。

## 全文搜索

```js
search: {
  placeholder: '搜索',
  paths: 'auto', // 依据侧边栏自动建立索引
  depth: 2,      // 索引标题深度 1-6
}
```

搜索索引会缓存在浏览器 IndexedDB 中，默认一天过期（`maxAge`）。

## 上一节 / 下一节

```js
pagination: {
  previousText: '上一节',
  nextText: '下一节',
  crossChapter: true,     // 允许跨章节跳转
  crossChapterText: true, // 显示所属章节名称
}
```

## 主题定制

主题色、字体等都通过 CSS 变量控制。在 `index.html` 的 `<head>` 里、主题样式之后加一段 `<style>`：

```html
<style>
  :root {
    --theme-color: #e11d48;
    --font-family: 'Noto Sans SC', system-ui, sans-serif;
    --font-family-mono: 'JetBrains Mono', ui-monospace, monospace;
  }
</style>
```

完整变量列表见 [Docsify 主题文档](https://docsify.js.org/#/themes?id=theme-properties)。

## 深色模式

模板默认跟随系统，右下角圆形按钮可手动切换，选择保存在 `localStorage`（键名 `docsify-theme`），刷新后保持。**双击按钮**清除记忆，恢复跟随系统。

实现上，核心主题常驻，深色样式通过 `<link id="theme-dark">` 的 `media` 属性启停：

```html
<link
  id="theme-dark"
  rel="stylesheet"
  href="_style/docsify@5-themes-core-dark.min.css"
  media="(prefers-color-scheme: dark)"
/>
<script src="_script/theme-toggle.js"></script>
```

不需要深色模式时，删除上面的 `<link>`、`_script/theme-toggle.js` 和 `_style/custom.css` 即可。

## 微信公众号二维码（可选）

默认不显示。把二维码图片放到 `_media/`，然后在 `index.html` 中配置：

```js
wechat: {
  qrcode: '_media/wechat-qrcode.png',
  text: '微信扫码　关注公众号',
},
```

- 只有填写 `qrcode` 后，右下角才会出现按钮；`enabled: false` 可显式关闭。
- 悬停、键盘聚焦或点击展开；点击按钮固定展开，按 `Esc` 或点击外部收起。
- 卡片自动适配浅色 / 深色模式。

## 按需扩展

精简版只保留轻量文档站点的核心能力（含中英双语示例）。需要以下功能时，可从完整版 [docsify-demo](https://github.com/insseek/docsify-demo) 取用：

- 3 种以上语言
- 捐赠页（微信支付 / 支付宝）
- 顶部导航下拉菜单

## 升级 Docsify

`_script/` 与 `_style/` 中的官方文件取自 npm 包 `docsify@5.0.0`：

- 运行时：`dist/docsify.min.js`
- 搜索插件：`dist/plugins/search.min.js`
- 主题：`dist/themes/core.min.css`、`dist/themes/addons/core-dark.min.css`

升级时从 [docsify](https://www.npmjs.com/package/docsify) 的对应版本下载并覆盖即可。
