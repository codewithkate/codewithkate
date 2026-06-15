---
title: incremental models
description: "Required course objectives"
category: dbt
order: 5
version: 0.40.17
lastModified: 2026-06-10
image: ""
imageAlt: ""
hideCoverImage: false
hideTOC: false
draft: true
featured: false
---

# Configuration

Explain use cases for incremental models
    append new rows to large tables
    as runtime increases config from view to table to incremental

Identify the 3 required configurations for incremental models
    config materialization as increment
    config incremental_strategy
    is_incremental() conditional block
Identify and explain the 4 required conditions for a model to be built incrementally.
    the model exists in the database
    not passing the `--full-refresh` flag
    model configured as 'incremental'
    is_incremental evaluates to true or false
# Strategy

Explain a potential strategy for accommodating late-arriving data in incremental models, and the trade-offs that late-arriving data introduce.
    confige a unique key
    get data arrival time
    get latest date required
    cutoff is between arribal and latest date
    performe full-refresh once a week
Explain each of the 5 incremental strategies and a potential use case for each.
    *append* immutable events
    *merge* runs a full table scan to update by unique_key
    delete+insert runs a full table scan to add new data and update old rows
    insert_overwrite replaces and adds by partitions rather than doing a merge scan
    *microbatch large time series and handle late arriving data by compiling a filter based on a defined time range. supports lookback from latest batch size (date part)
        --event-time-start: "" --event-time-end: ""
- [ ] [create diagrams](https://medium.com/@hugolu87/dbt-%EF%B8%8F-incremental-models-cookbook-merge-vs-insert-overwrite-bq-a4c453f926c0)
*must use with other strategies

# Use Cases

Using incremental models with CI jobs
    1. Clone all of the pre-existing incremental models that have been modified or are downstream of another model that has been modified:

    dbt clone --select state:modified+,config.materialized:incremental,state:old
    2. Build all of the models that have been modified and their downstream dependencies:

    dbt build --select state:modified+
    Because of your first clone step, the incremental models selected in your dbt build on the second step will run in incremental mode.
Dealing with schema changes
    on_schema_change config
        ignore: new columns will not be in the target table and and if you remove a column it will fail
        fail: trigger error message if anything changes
        append_new_columns: add new columns and deleted columns are filled with nulls but still appear in the table
        sync_all_columns: and and remove columns

