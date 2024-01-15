+++
title = 'Is Kmt Hugo Theme Support Adsense ?'
date = 2024-01-15T16:36:06+02:00
lastmod = 2024-01-15T16:36:06+02:00
draft = true
categories = [
    'FAQ'
    ]
tags = [
    'questions'
    ]
featured_image = ''
description = ''
+++
Yes, Kmt theme supports AdSense to display ads on your website. You just need to change the parameter of adsense in your project `hugo.toml` like this.

```diff
[params]
  founded = 2023
- adsense = 'ca-pub-xxxxxxxxxxxxxxxx'
+ adsense = 'ca-pub-yyyyyyyyyyyyyyyy'
```

Make sure you changed the AdSense ID to the correct one.
