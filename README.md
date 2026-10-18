# Docsify Starter

> 一个精简的 Docsify v5 单语言起步模板：无构建、可离线，内置搜索、分页、封面、404 与深色模式。

## 这是什么

- **Docsify 5.0.0**：运行时把 Markdown 渲染成网站，不需要生成静态 HTML。
- **单语言**：默认中文，没有 `en/` 目录，也没有语言切换脚本。
- **开箱即用**：侧边栏、顶部导航、封面页、全文搜索、上一节 / 下一节、404、深色模式。
- **可选公众号二维码**：默认关闭，填写配置后显示右下角悬浮按钮。
- **资源本地化**：`_script/` 与 `_style/` 内是完整运行文件，不依赖外部 CDN，离线也能预览。
- **刻意精简**：不包含多语言、捐赠页和自定义导航下拉；需要这些能力时，可从完整版 [docsify-demo](https://github.com/insseek/docsify-demo) 取用。

## 目录结构

```text
docsify-starter/
├── index.html                 # 入口：站点配置与脚本引用
├── README.md                  # 首页
├── _coverpage.md              # 封面页
├── _sidebar.md                # 侧边栏
├── _navbar.md                 # 顶部导航
├── _404.md                    # 404 页面
├── about.md                   # 关于（占位页）
├── guide/
│   └── start.md               # 快速开始 / 配置说明
├── _media/
│   └── favicon.svg            # 站点图标（可替换）
├── _script/
│   ├── docsify@5.min.js            # Docsify 5.0.0
│   ├── docsify-search@5.min.js     # 全文搜索插件
│   ├── docsify-pagination@2.10.1.min.js  # 上一节/下一节插件
│   ├── theme-toggle.js             # 深色模式切换
│   └── wechat.js                   # 可选微信公众号二维码
├── _style/
│   ├── docsify@5-themes-core.min.css      # 核心主题
│   ├── docsify@5-themes-core-dark.min.css # 深色模式附加样式
│   └── custom.css                  # 右下角主题按钮样式
├── .editorconfig
├── .gitignore
├── .markdownlint.json
├── .nojekyll
├── .prettierignore
└── .prettierrc.json
```

## 本地预览

在项目根目录执行任一命令，然后访问 <http://localhost:3000>：

```bash
# 官方 CLI（npm i -g docsify-cli）
docsify serve .

# 未全局安装：用 npx 临时运行
npx docsify-cli serve .

# 或零依赖静态服务器
python3 -m http.server 3000
```

> 直接双击 `index.html`（`file://`）无法使用，Docsify 需要通过 HTTP 读取 Markdown。

## 开始新项目

1. 复制整个目录，或通过 GitHub 的 **Use this template** 创建新仓库。
2. 修改 `index.html` 里的 `name`、`<title>`、`<meta name="description">`。
3. 如需右上角 GitHub 角标，把 `repo` 改成完整仓库 URL；不需要就保持空字符串。
4. 修改 `README.md`、`_coverpage.md`、`_sidebar.md`、`_navbar.md`、`about.md`。
5. 新增页面：写一个 `.md` 文件，再在 `_sidebar.md` 中加一行链接。

### 五分钟清单

| 要改什么             | 去哪里改                                            |
| -------------------- | --------------------------------------------------- |
| 站点名称             | `index.html` 的 `name`，以及 `<title>`              |
| 首页内容             | `README.md`                                         |
| 封面                 | `_coverpage.md`                                     |
| 侧边栏               | `_sidebar.md`                                       |
| 顶部导航             | `_navbar.md`                                        |
| 关于页               | `about.md`                                          |
| 404 页               | `_404.md`                                           |
| GitHub 入口          | `index.html` 的 `repo`（完整 URL，留空隐藏）        |
| 公众号二维码（可选） | `index.html` 的 `wechat` 配置，填写 `qrcode` 后显示 |
| 主题色 / 字体        | `index.html` 的 `<head>` 内加 CSS 变量              |

## 微信公众号二维码（可选）

默认不显示，和 GitHub 入口一样按需开启。把二维码图片放到 `_media/`，然后在 `index.html` 中取消注释并填写：

```js
wechat: {
  qrcode: '_media/wechat-qrcode.png',
  text: '微信扫码　关注公众号',
},
```

- 只有填写 `qrcode` 后，右下角才会出现二维码按钮。
- 悬停、键盘聚焦或点击展开卡片；点击按钮可固定展开，按 `Esc` 或点击外部收起。
- 设 `enabled: false` 可以显式关闭。
- 卡片背景和文字使用主题变量，自动适配浅色 / 深色模式。

## 设为 GitHub Template repository

把本目录推送到 GitHub 仓库（例如 `insseek/docsify-starter`）后：

1. 打开仓库的 **Settings → General**。
2. 滚动到 **Template repository**，勾选。
3. 如果页面有 **Save changes**，保存设置。
4. 仓库首页会出现 **Use this template** 按钮，点击即可创建新仓库。

也可以使用 GitHub CLI：

```bash
gh api -X PATCH repos/OWNER/REPO -F is_template=true
```

说明：

- 模板只复制**默认分支的文件**，不复制 issues、PR 和 git 历史。
- 公开仓库最适合作为开放模板；私有模板只有有权限的人可以使用。
- 想取消模板时，回到同一设置取消勾选即可。

## 刻意不包含

精简版专注“单语言文档站点”这条主线：

- 多语言 / `en/` / 语言切换
- 捐赠页与收款码
- 顶部导航下拉菜单

这些能力都在完整版 [docsify-demo](https://github.com/insseek/docsify-demo) 中；需要时按需取用，而不是让每个新项目都从最大集合开始删。

## 部署

这是一个纯静态站点，把整个目录发布到任意静态托管即可：

- **GitHub Pages**：推送到仓库后，在 Settings → Pages 选择分支根目录。`.nojekyll` 已包含，避免 Jekyll 忽略 `_script/`、`_style/` 等下划线目录。
- **Vercel / Netlify / Cloudflare Pages**：构建命令留空，输出目录填 `.`。
- **自有服务器**：上传目录，用 Nginx / Caddy 等作为静态站点服务。

## 常见定制

| 需求             | 做法                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------- |
| 换主题色         | 在 `index.html` 的 `<head>` 内加 `<style>:root{--theme-color:#e11d48;}</style>`          |
| 换字体           | 设置 `--font-family`、`--font-family-mono` 主题变量                                      |
| 开关深色模式     | 删除深色样式 `<link>`、`_script/theme-toggle.js` 和 `_style/custom.css`                  |
| 开关公众号二维码 | 在 `index.html` 的 `wechat` 配置中填写 `qrcode`；删除该配置或设 `enabled: false` 关闭    |
| 关闭搜索 / 分页  | 删除 `index.html` 中对应的 `<script>` 与 `$docsify` 配置项                               |
| 使用 CDN         | 把 `_script/`、`_style/` 的引用换成 `https://cdn.jsdelivr.net/npm/docsify@5/...`         |
| 增加多语言       | 参考完整版 [docsify-demo](https://github.com/insseek/docsify-demo) 的 `en/` 与 `i18n.js` |

## 代码与文档规范

- `.editorconfig` 与 `.prettierrc.json` 沿用官方 Docsify 仓库约定：UTF-8、LF、2 空格缩进、单引号。
- 文档保持一个页面一个 H1、代码块标注语言；导航文件首行使用 `<!-- markdownlint-disable first-line-h1 -->`。
- JavaScript 无依赖、无构建：只使用 `const` / `let`，文件头写 JSDoc，并对 `localStorage` 不可用等情况做兜底。

---

文档由 [Docsify](https://docsify.js.org) 驱动 · MIT License。
