/**
 * Docsify Starter — 中英文切换
 *
 * 约定：中文在站点根目录 `/`，英文在 `/en/`。
 * 右下角按钮显示当前语言（中 / EN），点击后保留当前页面路径。
 *
 * 只做两件事：
 * 1. 根据路由生成正确的语言路径，并同步 <html lang>；
 * 2. 为主题按钮等脚本提供少量界面文案（window.$docsifyI18n）。
 *
 * 正文翻译不在这里做：英文页面直接放在 en/ 目录。
 */
(() => {
  'use strict';

  const LANGUAGES = {
    zh: {
      code: 'zh-CN',
      short: '中',
      switchLabel: '切换到英文 (English)',
      themeLight: '切换到浅色模式（双击恢复跟随系统）',
      themeDark: '切换到深色模式（双击恢复跟随系统）',
    },
    en: {
      code: 'en',
      short: 'EN',
      switchLabel: 'Switch to Chinese (中文)',
      themeLight: 'Switch to light mode (double-click to follow system)',
      themeDark: 'Switch to dark mode (double-click to follow system)',
    },
  };

  /** 当前路由路径；支持 hash 与 history 两种 routerMode。 */
  function currentPath() {
    const mode = window.$docsify && window.$docsify.routerMode;
    const raw =
      mode === 'history' ? window.location.pathname : window.location.hash;
    const path = raw.replace(/^#/, '').split('?')[0] || '/';
    return path.startsWith('/') ? path : `/${path}`;
  }

  function isEnglishPath(path) {
    return path === '/en' || path.startsWith('/en/');
  }

  function getLanguage(path = currentPath()) {
    return isEnglishPath(path) ? 'en' : 'zh';
  }

  /** 去掉 /en 前缀，得到与语言无关的页面路径。 */
  function stripLanguage(path) {
    if (!isEnglishPath(path)) {
      return path || '/';
    }
    const rest = path.replace(/^\/en(?=\/|$)/, '');
    return rest.startsWith('/') ? rest : `/${rest}`;
  }

  /** 当前页面在目标语言下的地址。 */
  function pathForLanguage(lang, path = currentPath()) {
    const rest = stripLanguage(path);
    if (lang === 'zh') {
      return rest;
    }
    return rest === '/' ? '/en/' : `/en${rest}`;
  }

  function navigate(path) {
    const mode = window.$docsify && window.$docsify.routerMode;
    if (mode === 'history') {
      window.location.assign(path);
    } else {
      window.location.hash = `#${path}`;
    }
  }

  function t(key) {
    return LANGUAGES[getLanguage()][key] || null;
  }

  const controls = document.getElementById('app-controls');
  if (!controls) {
    return;
  }

  const button = document.createElement('button');
  button.id = 'language-toggle';
  button.type = 'button';
  button.className = 'app-control';
  button.textContent = LANGUAGES.zh.short;
  button.addEventListener('click', () => {
    const target = getLanguage() === 'en' ? 'zh' : 'en';
    navigate(pathForLanguage(target));
  });
  controls.insertBefore(button, controls.firstChild);

  let lastLanguage = null;

  /** 同步按钮、<html lang> 与主题按钮文案。 */
  function sync() {
    const lang = getLanguage();
    const meta = LANGUAGES[lang];

    document.documentElement.lang = meta.code;
    document.documentElement.dataset.lang = lang;
    button.textContent = meta.short;
    button.title = meta.switchLabel;
    button.setAttribute('aria-label', meta.switchLabel);

    if (lang !== lastLanguage) {
      lastLanguage = lang;
      document.dispatchEvent(
        new CustomEvent('docsify:i18n:change', { detail: { lang } }),
      );
    }
  }

  const docsify = (window.$docsify = window.$docsify || {});
  docsify.plugins = (docsify.plugins || []).concat([
    hook => {
      hook.doneEach(() => sync());
    },
  ]);

  window.$docsifyI18n = {
    get language() {
      return getLanguage();
    },
    t,
    pathForLanguage,
    switchTo(lang) {
      if (LANGUAGES[lang]) {
        navigate(pathForLanguage(lang));
      }
    },
  };

  sync();
})();
