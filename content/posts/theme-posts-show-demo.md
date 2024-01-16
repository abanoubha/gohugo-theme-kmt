+++
title = "How to show posts of my kmt theme on demo but not on others' websites"
date = 2024-01-15T20:49:30+02:00
lastmod = 2024-01-15T20:49:30+02:00
draft = true
tags = [
    'tutorials'
    ]
featured_image = ''
description = ''
+++
I want to create documentation and tutorials about my Hugo theme KMT, but I want to simplify my setup by adding them inside the theme itself. But if I added the posts in kmt theme, they'll show up on all websites that use the Kmt theme!

## Another project for demo

I can use another instance/project that uses kmt theme, and add posts in it, and deploy it as the kmt theme demo. But.. but this is more complicated.. I think.

## Published drafts

There is a simpler strategy I used. Just let the deployed version of my kmt theme demo include _draft posts_. Here are the steps.

### All posts of the kmt theme demo are drafts

I just made all posts as drafts in each post frontmatter.

```diff
title = 'some title'
date = 2024-01-15T20:49:30+02:00
lastmod = 2024-01-15T20:49:30+02:00
- draft = false
+ draft = true
```

### Include draft posts in the generated website before deployment

I use [Netlify](https://gohugo-theme-kmt.netlify.app/) to demo my kmt theme, so I just need to include `-D` argument in all Hugo commands in `netlify.toml` like this.

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

If you are using another hosting service such as _cloudflare pages_ or _github pages_, set the deploy command to include `-D` argument and you'll be fine.
