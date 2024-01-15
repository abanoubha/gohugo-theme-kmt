+++
title = 'كيف تظهر المقالات الخاصة بـ ثيم هوجو في موقع الثيم دون أن تظهر هذه المقالات في المواقع التي تستخدم الثيم ؟'
date = 2024-01-15T20:49:30+02:00
lastmod = 2024-01-15T20:49:30+02:00
draft = true
categories = [
    'شروحات'
    ]
tags = [
    'كيف'
    ]
featured_image = ''
description = ''
+++
أريد أن أنشر شروحات ومقالات خاصة بـ ثيم كِمْت ، وأريد أن أضع هذه الشروحات في مشروع الثيم نفسه. ولكن عندما يستخدم موقع آخر الثيم ، تظهر هذه المقالات في موقعه! أنا أريد ألا تظهر هذه المقالات في موقعه؟

أريد أن تظهر هذه المقالات في موقع الثيم فقط.

## عمل مشروع منفصل لإستعراض الثيم والشروحات

أستطيع أن أنشئ مشروع منفصل عن مشروع تطوير ثيم كِمْت وأضيف به المقالات ، واستخدم فيه ثيم كمت. ولكن أريد أن أستخدم نفس المشروع للتسهيل عليَّ وعلى مستخدمي الثيم.

## نشر المسودات

هناك طريقة أخرى أسهل استخدمتها؛ وهي السماح للموقع الخاص بإستعراض الثيم وشروحاته أن يُظهر المسودات (drafts). وهذه هي خطوات هذه الطريقة.

### كل المقالات والشروحات عبارة عن مسودات

تغيير كل المقالات من حالة النشر إلى حالة المسودة.

```diff
title = 'some title'
date = 2024-01-15T20:49:30+02:00
lastmod = 2024-01-15T20:49:30+02:00
- draft = false
+ draft = true
```

### السماح بظهور المسودات على موقع استعراض الثيم

أنا أستخدم [نتليفاي](https://gohugo-theme-kmt.netlify.app/) لإستضافة موقع استعراض ثيم كمت ، لذلك أنا أضفت `-D` إلى الأوامر في ملف `netlify.toml` داخل المشروع بهذا الشكل.

```diff
[build]
    publish = "public"
-    command = "hugo --gc --minify"
+    command = "hugo -D --gc --minify"

[context.production.environment]
    HUGO_VERSION = "0.120.4"
    HUGO_ENV = "production"
    HUGO_ENABLEGITINFO = "true"

[context.split1]
-    command = "hugo --gc --minify --enableGitInfo"
+    command = "hugo -D --gc --minify --enableGitInfo"

[context.split1.environment]
    HUGO_VERSION = "0.120.4"
    HUGO_ENV = "production"

[context.deploy-preview]
-    command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"
+    command = "hugo -D --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"

[context.deploy-preview.environment]
    HUGO_VERSION = "0.120.4"

[context.branch-deploy]
-    command = "hugo --gc --minify -b $DEPLOY_PRIME_URL"
+    command = "hugo -D --gc --minify -b $DEPLOY_PRIME_URL"

[context.branch-deploy.environment]
    HUGO_VERSION = "0.120.4"

[context.next.environment]
    HUGO_ENABLEGITINFO = "true"
```

أما إن كنت تستخدم خدمة استضافة أخرى مثل كلاود فلير أو جت-هب ، أضف `-D` إلى أمر إنشاء/توليد ملفات الموقع قبل نشر موقع استعراض الثيم.
