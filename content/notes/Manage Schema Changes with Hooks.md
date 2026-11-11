---
tags: budding, dbt
title: "dbt Hooks: Manage Schema Changes"
description: Macros to manage column and data type changes
image: "[[image.png]]"
imageAlt: Default Image
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
