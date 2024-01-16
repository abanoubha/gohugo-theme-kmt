+++
title = 'كيف تثبت ثيم كِمْت ؟'
date = 2024-01-14T15:46:46+02:00
lastmod = 2024-01-14T15:46:46+02:00
draft = true
tags = ['شروحات']
featured_image = ''
description = ''
+++
كِمْت هو ثيم بسيط لـ هوجو ، قام بإنشائه [أبانوب حنا](https://fb.me/AbanoubHannaDotCom). سميته على اسم بلدي - مصر. مصر اسمها كِمْت باللغة المصرية القديمة.

## تثبيت الثيم من خلال جِت صب-موديول | git submodule (أنصح بها)

1. داخل مجلد مشروع هوجو الخاص بك، نفذ هذا الأمر

    ```sh
    git submodule add https://github.com/abanoubha/hugo-theme-kmt.git themes/kmt
    ```

2. حدد الثيم المُستخدَم في ملف الإعدادات `config.yaml` كالتالي:

    ```yaml
    theme: kmt
    ```

    أو في ملف الإعدادات `config.toml`:

    ```toml
    theme = kmt
    ```

## تثبيت الثيم من خلال هوجو صب-موديول | Hugo submodule

1. داخل مجلد مشروع موقعك، انشئ موقعك بإستخدام هوجو لو كنت لسه لم تُنشأه:

    ```sh
    hugo mod init github.com/<your_user>/<your_project>
    ```

2. أضف رابط ثيم كمت في ملف الإعدادات `config.yaml` كالتالي:

    ```sh
    theme:
        - github.com/abanoubha/hugo-theme-kmt
    ```
