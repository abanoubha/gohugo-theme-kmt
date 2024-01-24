+++
title = 'Why I Migrated KMT Hugo theme from Tailwind CSS to Vanilla/Pure CSS ?'
date = 2024-01-15T19:21:20+02:00
lastmod = 2024-01-15T19:21:20+02:00
draft = false
tags = ['docs']
featured_image = ''
description = ''
+++
I created a theme for my bilingual website called [kmt](https://gohugo-theme-kmt.netlify.app/). In the beginning, I designed the layout of the theme in [Tailwind CSS](https://tailwindcss.com/). After some time, I realized that tailwind is complicate things more for my simple theme.

Building and designing with tailwind CSS needs a build step before shipping, but native CSS doesn't.

Using tailwind CSS resets the default values set by web browsers, but I can use those defaults and change ONLY the things I need. So, the native CSS will be efficient and very small.

I need my theme to be blazingly fast to be perfect for huge content websites, and good for SEO (stands for Search Engine Optimization). So, using a minimal stylesheet will be great for SEO and webpages load time.

After I removed support to tailwind and added a stylesheet, it went great. The minimized stylesheet is [very small](https://github.com/abanoubha/gohugo-theme-kmt/blob/main/assets/css/style.css), so the webpages are blazingly fast.

You can see the source code on [GitHub](https://github.com/abanoubha/gohugo-theme-kmt), [GitLab](https://gitlab.com/abanoubha/gohugo-theme-kmt) and [CodeBerg](https://codeberg.org/abanoubha/gohugo-theme-kmt). This post is [already posted on my bilingual blog here](https://abanoubhanna.com/posts/why-migrate-tailwind-pure-css/).
