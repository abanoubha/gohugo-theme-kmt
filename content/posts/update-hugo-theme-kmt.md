+++
title = 'How to update Hugo Theme Kmt in my website ?'
date = 2024-01-15T01:20:37+02:00
lastmod = 2024-01-15T01:20:37+02:00
draft = false
tags = [
    'docs'
    ]
featured_image = ''
description = ''
+++
If you installed the KMT theme into your blog/website HUGO project via GIT, just use this command.

```sh
git submodule update --remote
```

This command will update all the submodules in your git project. But if you need to update kmt theme only, use this command instead.

```sh
git submodule update --remote themes/kmt
```
