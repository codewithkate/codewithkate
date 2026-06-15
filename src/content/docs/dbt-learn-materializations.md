---
title: materializations
description: "Required course objectives"
category: dbt
order: 2
version: 0.40.17
lastModified: 2026-06-10
image: ""
imageAlt: ""
hideCoverImage: false
hideTOC: false
draft: true
featured: false
---
- Explain the three main types of materializations in dbt.
	- all of these can be configured in dbt_project.yml or wiht a config block.
	- tables
		- data is stored in the warehouse
		- fast and consistent queries for bi applications
		- slow to build
	- views
		- query is stored in the warehouse
		- reruns everytime
		- always gets the latest records
	- ephemeral models
		- reusable code snippet or CTE
		- light transformations
		- no direct queries
	- incremental models?
	- materialized views?
- Configure materializations in configuration files and in models.

layer 1 (bottom) - ./dbt_project.yml
```yaml
models:
	amc:
		# Always get the latest data from models/staging/
		staging:
			+materialized: view
			base:
			+materialized: ephemeral
		# Data for applications in models/marts/
		marts:
			+materialized: table
```

layer 2 - models/.../\_.yml

layer 3 (top) - models/.../\_.sql
```sql
{{
	config(
		materialized='table'
	)
}}
```
	  
- Explain the differences and tradeoffs between tables, views, and ephemeral models.