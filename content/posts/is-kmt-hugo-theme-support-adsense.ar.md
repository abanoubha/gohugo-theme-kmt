+++
title = 'هل ثيم كمت يدعم عرض إعلانات أدسنس ؟'
date = 2024-01-15T16:36:09+02:00
lastmod = 2024-01-15T16:36:09+02:00
draft = true
tags = [
    'الرد على الأسئلة المتكررة'
    ]
featured_image = ''
description = ''
+++
نعم، ثيم كمت يدعم أدسنس لعرض الإعلانات على موقعك. كل ما عليك هو أن تغير معرّف أدسنس في ملف إعدادات المشروع `hugo.toml` كما يلي.

```diff
[params]
  founded = 2023
- adsense = 'ca-pub-xxxxxxxxxxxxxxxx'
+ adsense = 'ca-pub-yyyyyyyyyyyyyyyy'
```

تأكد أنك غيرت معرف أدسنس (AdSense Publisher ID) إلى المعرف الصحيح لك.
