+++
title = 'هل ثيم كمت يدعم جوجل أناليتكس ؟'
date = 2024-01-15T16:36:25+02:00
lastmod = 2024-01-15T16:36:25+02:00
draft = true
tags = ['مزايا']
featured_image = ''
description = ''
+++
نعم، ثيم كِمْت يدعم جوجل أناليتكس (Google Analytics). ثيم كمت هو ثيم مكتوب لنظام هوجو؛ صممته خصيصاً [لموقعي](https://abanoubhanna.com).

كل ما عليك هو أن تضيف الرقم التعريفي لـ Google Analytics (gtag) في ملف الإعدادات `hugo.toml`.

```diff
[services]
  [services.googleAnalytics]
-    ID = 'G-xxxxxxxxxx'
+    ID = 'G-XHQY258XEF'
```

تأكد من كتابة الرقم التعريفي لجوجل أناليتكس الخاص بك؛ مثل هذا `G-XHQY258XEF`.
