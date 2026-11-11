---
title: YAML Basics
description: ""
category: ""
order:
version: ""
lastModified: 2026-06-15
image: ""
imageAlt: ""
hideCoverImage: false
hideTOC: false
draft: false
featured: false
---

YAML is text file containing key-value pairs. 

## Maps

Nest pairs inside one another with a new line and indentation:

```yaml
name: Map
  type: string
```

## Arrays

Pass multiple values into the pair:

```yaml
name: Map
  type: string
  files:
    - a.txt
    - b.md
    - c.py
```

## Dictionaries

Use curly brackets or a simple `key:value` form :

```yaml
person: {name: Kate, tool: dbt}
company:
  name: til
  location: nyc
```
