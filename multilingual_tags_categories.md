# support multilingual tags and categories URLs

old tags list:

```hugo
{{ with .Params.tags }}
  <div class="tags">
    {{ T "tags" }}:
    {{ range . }}
    <a href="{{ "tags/" | relURL }}{{ . | urlize }}">{{ . }}</a>
    {{ end }}
  </div>
  {{ end}}
```

old categories list:

```hugo
  {{ with .Params.categories }}
  <div class="categories">
    {{ T "categories" }}:
    {{ range . }}
    <a href="{{ "categories/" | relURL }}{{ . | urlize }}">{{ . }}</a>
    {{ end }}
  </div>
  {{ end}}
```

a manual fix:

```hugo
{{ printf "%s/%s" .Lang "tags" | absURL }}{{ . | urlize }}
```

but i wanna auto-fix supported by HUGO to simplify things.

Here it is:

```hugo
  {{ range .GetTerms "tags" }}
     <a href="{{ .RelPermalink }}">
       {{- .LinkTitle -}}
     </a>
  {{ end }}

    {{ range .GetTerms "categories" }}
     <a href="{{ .RelPermalink }}">
       {{- .LinkTitle -}}
     </a>
  {{ end }}
```
