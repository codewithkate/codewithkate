---
title: "dbt Hooks: Manage Schema Changes"
posted_on: 2026-06-09
description: Macros to manage column and data type changes
tags:
  - dbt
image: "
imageAlt: How to structure a dbt command with the commit name, command, flags, and arguments.
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: ""
draft: true
aliases:
---

## About Hooks

Use hooks and operations to write custom DDL commands to handle schema changes in your database and run at different times:

- **Pre-Hooks**: Before the resource is built
- **Post-Hooks**: After the resource is built

## Usage

- Automatically add new columns
- Prevent ambiguity
- Future-proof column order
- Change data types
- Rename database resources

```sql
dbt_utils.union_relations -- fill with null
```
