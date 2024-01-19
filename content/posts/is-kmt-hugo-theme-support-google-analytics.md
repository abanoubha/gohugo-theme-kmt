+++
title = 'Does Kmt Theme Support Google Analytics?'
date = 2024-01-15T16:36:21+02:00
lastmod = 2024-01-15T16:36:21+02:00
draft = true
tags = ['features']
featured_image = ''
description = ''
+++
Yes, KMT theme supports Google Analytics and gtag. Kmt theme is a hugo theme developed mainly for my bilingual website.

You just need to add the google analytics / gtag id in `hugo.toml`.

```diff
[services]
  [services.googleAnalytics]
-    ID = 'G-xxxxxxxxxx'
+    ID = 'G-XHQY258XEF'
```

Make sure you use your own gtag which is like this `G-XHQY258XEF`.
