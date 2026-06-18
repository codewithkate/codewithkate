---
title: dbt-learn-advanced_testing
description: ""
category: ""
order:
version: ""
lastModified: 2026-06-18
image: ""
imageAlt: ""
hideCoverImage: false
hideTOC: false
draft: false
featured: false
aliases:
  - dbt-learn-advancedtesting
---

# Overview

- Explain the types of testing that are possible in dbt
- Explain what makes a good test
- Explain what to test and why
- Ensure proper test coverage with `dbt_meta_testing` package

Technically, you run a test everytime you run SQL and expect it to retrieve data from the warehouse. But, *ad hoc queries* are not scalable. Frequently run queries can be *standalone tests* filtered to expected results. *Automated*. *Fast*. *Reliable*. *Informative* in a way that tells you how to fix an error. *Focused* on a single assumption.

Analytics Engineers have detailed their five maturity levels related to testing as: (1) infancy - no tests, (2) toddlerhood - primary keys, (3) childhood - model tests, (4) adolescence - tests from packages, and (5) adulthood - advanced strategies

*Manual Tests* by type:

- `dbt test --select test_type:generic` - Tests SQL models by name or [test types](../dbt-expectations/index.md).

*Development*, *Deployment*, and *QA*:

- `dbt build` - Create resources in DAG order and skip building failed resources 

*Governance*:

Use the dbt_meta_testing package to check that all models have their required tests. Define the meta tests in the project file:

```yaml
models:
  project:
    +meta:
      required_docs: true
    staging:
      +meta:
        required_tests: {"unique.*|not_null": 1}
```

Then use this command:

- `dbt run-operation required_test` - Run an custom test

*CI / Pull Requests*:

- `dbt build -s select:modified+` - Use slim CI to only run modified resources and their downstream models

# Deployment

- Understand when in the life cycle of your project to run different types of tests
    Development, deployment, pull requests, and qa.     
- Run tests on subsets of your DAG using node selector syntax and test specific flags
    [Choose subsets of your DAG](../posts/dbt-commands/index.md#node-selector-methods)
- How to take action on your test failures
    fix buts and run `dbt test` or `dbt build`
- Enable testing to store test failures in the database for record keeping
    `--store-failures` to store a view of the test in the dw to view results

[Continue reading](../posts/dbt-commands/index.md#run-tests)

# Custom Tests 

Write and execute a singular test in your dbt project (overlap from dbt fundamentals)
Promote a singular test to a reusable generic test
Override an existing test in the dbt global project or a package

# Packages

Import packages and add tests to a dbt project from dbt_utils and dbt_expectations
    add to `packages.yml` then run `dbt dep` int he CLI
Understand what is happening under the hood of underlying source code for a test
    view source code on github
Use the audit_helper package for testing refactors of model code
    migrating to dbt and want to compare to former db
    improving logic

# Configurations

Configure various test overrides including severity, thresholds, where and limit
Enable testing to store failures in the database for quick investigation for tests running in production
## More on Testing
https://docs.getdbt.com/blog/test-smarter-not-harder?version=2.0&name=Fusion

**Test Prioritization Framework**
only breadth and severity columns don't align with each other

| Identify Issue                                                                           | Breadth of Impact                                                    | Severity |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------- |
| **data hygiene**<br>- granularity<br>- completeness<br>- formatting                      | - customer-facing<br>- financial decisions<br>- executive-facing<br> | fail     |
| **business-focused**<br>- expectations<br>- delta<br>- thresholds                        | - nice-to-know                                                       | warn     |
| **stats-focused**<br>- volume anomalies<br>- dimensional anomalies<br>- column anomalies |                                                                      |          |
|                                                                                          |                                                                      |          |
### debugging steps
Once prioritized, it's time for debugging. 

  ```yaml
  models:
	  ...
	  data_tests:
		  - name: my_test_name
		    description: "This test checks...If it fails, talk to the team." 
  ```
[test descriptions](https://discourse.getdbt.com/t/is-it-possible-to-add-a-description-to-singular-tests/5472/4)

## Layers

| Layer   | Transformations                                                                                         | Tests                                                                                                               | Materialization                                                                          | Naming                                                              |
| ------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| staging | rename<br>type cast<br>basic conversions<br>categorize with booleans<br>NO joins<br>NO aggregations<br> | nulls<br>accepted range<br>numeric signs (+/-)<br>volume count                                                      | view                                                                                     | source/<br>stg_source__entities                                     |
| int     | simplify structure by bringing together entities<br>re-graining<br>isolate complex operations<br>       | primary key<br>accepted_values<br>mutually_exclusive_ranges<br>not_constant<br>unit_testting                        | NO end users<br>ephemerally<br>views<br>custom_schemas                                   | dept/<br>int_entities_verbs                                         |
| marts   | Minimize joins<br>thoughtful                                                                            | unit tests<br>primary key<br>singular tests (i.e. fuzzy matching, variance, compare running total to yesterday)<br> | tables<br>incremental models<br>wide and denormalized<br>temp tables for troubleshooting | dept/ or area/<br>entities<br>NO building for diff teams they share |
|         |                                                                                                         |                                                                                                                     |                                                                                          |                                                                     |
