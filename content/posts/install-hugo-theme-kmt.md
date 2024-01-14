+++
title = 'How to install Hugo theme Kmt ?'
date = 2024-01-14T15:46:46+02:00
lastmod = 2024-01-14T15:46:46+02:00
draft = false
categories = ['docs']
tags = ['docs']
featured_image = ''
description = ''
+++
Kmt is a minimal Hugo theme created by [@AbanoubHA](https://x.com/abanoubha), and named after the name of Egypt in the ancient egyptian language.

## Install via git submodule (recommended)

1. Inside the folder of your Hugo site run:

    ```sh
    git submodule add https://github.com/abanoubha/hugo-theme-kmt.git themes/kmt
    ```

2. Add the theme's directory to your `config.yaml`:

    ```yaml
    theme: kmt
    ```

    or `config.toml`:

    ```toml
    theme = kmt
    ```

## Install via Hugo submodule

1. From your project's root directory, initiate the hugo module system if you haven't already:

    ```sh
    hugo mod init github.com/<your_user>/<your_project>
    ```

2. Add the theme's repo to your `config.yaml`:

    ```sh
    theme:
        - github.com/nodejh/hugo-theme-mini
    ```
