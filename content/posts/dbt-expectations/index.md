---
title: "dbt Tests: Setting Great Expectations for Your Data"
posted_on: 2026-06-09
description: Customize data quality checks from your data.
tags:
  - dbt
image: "[[cover-image.png]]"
imageAlt: 
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: "dbt tests"
draft: true
aliases:
---

Trust is one of the most important qualities to have in a data ecosystem. People who use data expect it to be accurate and up to date with enough uniqueness and volume to have a significant impact on decision making. Data Platforms, like Snowflake, offer [system data metric functions](https://docs.snowflake.com/en/user-guide/data-quality-system-dmfs) to perform the data quality checks that support a trusted data environment. These functions check for:

- Freshness
- Nulls
- Uniqueness
- Accepted Values
- Volume
- Blanks
- Statistics

dbt offers built-in and packaged testing to support data quality checks.

```packages.yaml
packages:
  - package: dbt-labs/dbt_utils
    version: 1.3.3
  - package: dbt-labs/audit_helper
    version: 0.14.0
  - package: dbt-labs/dbt_project_evaluator
    version: 1.3.0
  - package: metaplane/dbt_expectations
    version: 0.10.10
  - package: Divergent-Insights/dbt_dataquality
    version: 0.3.5
```

[Check the hub for the latest version](https://hub.getdbt.com)

# Types of Tests

## Freshness Tests

*Where*: staging/*_sources.yml
*What*: expect data table should arrive within time measured by timestamp
*When*:
*How*:


## Generic Tests

### Nulls

*Where*: 
*What*: expect the count of nulls in col should be equal or equal or less than.
*When*:
*How*:

### Uniqueness

*Where*: 
*What*: expect col values to be unique with a duplicate count equal or less than.
*When*:
*How*:

### Accepted Values

*Where*: 
*What*: expect col values to match one of the accepted values, as determined by a list, numeric range, or regex pattern
*When*:
*How*:

## Custom Tests

### Volume

*Where*: 
*What*: custom test; row count should equal, less, greater, or between.
*When*:
*How*:

### Blanks

*Where*: 
*What*: custom test; count or percent of blanks in col equal or less than.
*When*:
*How*:


### Statistics


## Bonus: Unit Testing


