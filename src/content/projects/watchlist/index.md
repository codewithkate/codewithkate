---
title: Vault CMS
description: Use Obsidian as a content management system for your Astro website.
date: 2025-08-25
categories:
  - Obsidian
  - Astro
  - Vault
  - Template
repositoryUrl:
projectUrl: https://github.com/davidvkimball/vault-cms
status: in-progress
image: "[[glacier.png]]"
imageAlt: Blue glaciers and mountains.
hideCoverImage: false
hideTOC: false
draft: false
featured: true
aliases:
  - obsidian-astro-suite
---
## Project Overview


## Plan

```mermaid
---
title: Watchlist
---
erDiagram
    erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
```


## Key Features


## Default Settings

- Markdown links used in favor of wikilinks
- Default location for new notes set per-vault
- Indentation guides disabled
- Custom hotkeys optimized for Astro workflows

## Technical Implementation

The suite is built on Obsidian's plugin ecosystem and designed to work with Astro's content collections system. It provides a complete development environment for content creators who want to use Obsidian as their primary writing tool, with seamless integration that requires no link conversion or manual configuration.

## Installation & Setup

1. Clone or download your Astro theme of choice
2. Clone or download Vault CMS repository
3. Open the folder of the version you want (Default, Minimal, or Docs)
4. Copy the contents into your Astro project's `src/content` folder
5. Open Obsidian and select "Open folder as vault", choosing the folder with the `.obsidian` directory

## Project Status

This project is actively maintained and provides a complete solution for Obsidian-based content management with Astro publishing workflows. The suite is designed to work seamlessly with the above examples and [Astro Modular](https://github.com/davidvkimball/astro-modular) but can be integrated into any Astro project.

<a href="https://github.com/davidvkimball/vault-cms" class="no-styling no-underline" target="_blank"><button class="btn btn-primary w-full">  
    View Project  
  </button></a>
