# Getting started

This is a minimal English example. The main documentation is in Chinese at the repository root.

## Where English pages live

All English Markdown files live under `en/`, mirroring the root structure:

- `en/README.md` → `#/en/`
- `en/guide/start.md` → `#/en/guide/start`

When you add a Chinese page, add its English counterpart under `en/` and link it in `en/_sidebar.md`.

## Interface strings

Path-keyed UI strings in `index.html` use `/en/` for English:

```js
search: {
  placeholder: {
    '/en/': 'Search',
    '/': '搜索',
  },
},
```

## Notes

- If language switching is enabled, the bottom-right button switches between the `/` and `/en/` home pages.
- If `fallbackLanguages: ['en']` is enabled, missing English pages fall back to the Chinese page.
- See the root [README](../../README.md) for the full Chinese documentation.
