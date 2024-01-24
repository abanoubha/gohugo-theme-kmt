# Kmt

Kmt is the [ancient name of Egypt](https://en.wikipedia.org/wiki/Egypt#Names) (my home country). See [the demo here](https://abanoubhanna.com/).

## Features

- __speed page loading__: surf the web at the speed of thought
- __related posts__: show 'read more' section with a list of related posts
- minimal user interface
- __multilingual__: currently support Arabic and English (a.k.a Bilingual)
- lazyloading images with browser-native API

## Installation

Install via git submodule

Run this command while you are inside the folder of your Hugo site:

```sh
git submodule add  -b main --depth 1 https://github.com/abanoubha/hugo-theme-kmt.git themes/kmt
```

Add the theme’s directory to your `config.yaml` or `config.toml`:

- in config.yaml

```yaml
theme: kmt
```

- in config.toml

```toml
theme = kmt
```

That's it. You installed it successfully.

## Configuration

## Documentation & Posts about Kmt theme

- [How to install Hugo theme Kmt ?](https://abanoubhanna.com/posts/install-hugo-theme-kmt/) ([Read it in Arabic](https://abanoubhanna.com/ar/posts/install-hugo-theme-kmt/))

## Resources & Referrals

- <https://gohugo.io/content-management/multilingual/>
- <https://www.freepik.com/icon/investment_3358944>

## Source Code

- GitHub: <https://github.com/abanoubha/gohugo-theme-kmt>
- GitLab: <https://gitlab.com/abanoubha/gohugo-theme-kmt>
- CodeBerg: <https://codeberg.org/abanoubha/gohugo-theme-kmt>

## Tasks

- [x] ~~use tailwind css~~ (use minimal native CSS)
- [x] setup a [demo](https://gohugo-theme-kmt.netlify.app/) on netlify
- [x] SEO meta tags
- [x] generate sitemap(s)
- [x] link to translation of current page
- [x] custom rendering for heading with anchor link
- [x] custom rendering for image to set the alt text
- [x] support image caption via `p > img + em {}` in CSS
- [x] mobile-first, responsive layout
- [x] web native __lazy loading__ for images
- [ ] [submit the theme](https://gohugo.io/contribute/themes/)
- [ ] breadcrumb & easy navigation
- [ ] RSS
- [ ] web native __lazy loading__ for iframes ([can i use](https://caniuse.com/#feat=loading-lazy-attr))
- [ ] use WebP image to speed up the page load time ([can i use](https://caniuse.com/#feat=webp))
- [ ] feature: 'read aloud' or 'read for me' (text to speech)

This HUGO theme is open source. Feel free to send [pull requests](https://github.com/abanoubha/gohugo-theme-kmt/pulls) and/or write [issues](https://github.com/abanoubha/gohugo-theme-kmt/issues).
