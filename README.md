# Kmt

Kmt is the [ancient name of Egypt](https://en.wikipedia.org/wiki/Egypt#Names) (my home country). See [the demo here](https://abanoubhanna.com/).

## Features

- __speed page loading__: surf the web at the speed of thought
- __related posts__: show 'read more' section with a list of related posts
- minimal user interface
- __multilingual__: currently support Arabic and English (a.k.a Bilingual)
- lazyloading images with browser-native API
- show last modification/update date of each post
- __featured posts__: show featured posts pinned on top of index page

## Installation

Install via git submodule

Run this command while you are inside the folder of your Hugo site:

```sh
git submodule add  -b main --depth 1 https://github.com/abanoubha/gohugo-theme-kmt.git themes/kmt
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

- [How to install Hugo theme Kmt ?](https://abanoubhanna.com/posts/install-hugo-theme-kmt/)
- [Social Media Buttons in Kmt Theme](https://abanoubhanna.com/posts/social-media-buttons-in-kmt/)
- [Why I Migrated KMT Hugo theme from Tailwind CSS to Vanilla/Pure CSS ?](https://abanoubhanna.com/posts/why-migrate-tailwind-pure-css/)
- [SEO optimization in Kmt Theme](https://abanoubhanna.com/posts/kmt-theme-for-seo/)
- [Why I migrated my website to Hugo?](https://abanoubhanna.com/posts/why-hugo/)
- [Why Markdown for Content?](https://abanoubhanna.com/posts/why-markdown-for-content/)
- [Does Kmt Theme Support Google Analytics?](https://abanoubhanna.com/posts/is-kmt-hugo-theme-support-google-analytics/)
- [Is Kmt Hugo Theme Support Adsense ?](https://abanoubhanna.com/posts/is-kmt-hugo-theme-support-adsense/)
- [Why Another Hugo Theme?](https://abanoubhanna.com/posts/why-another-hugo-theme/)
- [Why The Hugo Theme is Named Kmt?](https://abanoubhanna.com/posts/why-kmt-name/)
- [How to update Hugo Theme Kmt in my website ?](https://abanoubhanna.com/posts/update-hugo-theme-kmt/)
- [How to effectively delete a git submodule ?](https://abanoubhanna.com/posts/delete-git-submodule/)
- [Recreated the Website to be futureproof](https://abanoubhanna.com/posts/recreated-the-website/)

\* all above posts have Arabic translations.

## Resources & Referrals

- <https://gohugo.io/content-management/multilingual/>
- <https://www.freepik.com/icon/investment_3358944>

## Documented Code Problems

- [support multilingual tags/categories url](multilingual_tags_categories.md)

## Source Code

- GitHub: <https://github.com/abanoubha/gohugo-theme-kmt>
- GitLab: <https://gitlab.com/abanoubha/gohugo-theme-kmt>
- CodeBerg: <https://codeberg.org/abanoubha/gohugo-theme-kmt>

## Roadmap & Tasks

- Previous (v1.0.0 , v1.1.0 , v1.2.0)
  - ~~use tailwind css~~ (use minimal native CSS)
  - setup a [demo](https://AbanoubHanna.com/)
  - SEO meta tags
  - generate sitemap(s)
  - link to translation of current page
  - custom rendering for heading with anchor link
  - custom rendering for image to set the alt text
  - support image caption via `p > img + em {}` in CSS
  - mobile-first, responsive layout
  - web native __lazy loading__ for images
  - show lastmod/updated_at datetime if exists
  - show pinned/featured posts upfront
  - show only posts in feed/index
  - show pages links in the footer
  - support multilanguage in links of tags and categories
  - add keyboard key by kbd shortcode `{{< kbd command >}}`.
  - add abbr shortcode `{{< abbr SEO "Search Engine Optimization" >}}`.
  - ability to show ad banner in homepage and post page
- v1.3.0
  - search box: search via Google simply using `keywords site:<domain-name>`
  - redesign UI
- v1.4.0
  - breadcrumb & easy navigation
  - remove ad
  - redesign UI of search form
- v1.5.0
  - better looking blockquote and content headers
- v1.6.0
  - support posts series via `series = "xyz seris"` in the frontmatter
- v1.7.0
  - styling the tag titles, capitalize initial letters of the tag titles
  - add a specific layout for tags
  - make the tag title a link
  - show ONLY 200 characters maximum as a post summary in plain text (not styled)
  - show count of posts associated with each tag
- v1.8.0
  - redesign tag titles on the homepage with a butterfly style
  - ui: use better font families
- Next
  - ability to set accent color in config.toml
  - ability to set link color in config.toml
  - ability to set darkmode background color in config.toml
  - ability to set lightmode background color in config.toml
  - [submit the theme](https://gohugo.io/contribute/themes/)
  - RSS
  - web native __lazy loading__ for iframes
  - use WebP image to speed up the page load time
  - feature: 'read aloud' or 'read for me' (text to speech)

This HUGO theme is open source. Feel free to send [pull requests](https://github.com/abanoubha/gohugo-theme-kmt/pulls) and/or write [issues](https://github.com/abanoubha/gohugo-theme-kmt/issues).
