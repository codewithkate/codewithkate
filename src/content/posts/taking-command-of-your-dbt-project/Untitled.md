---
title: Taking Command of Your dbt Project
posted_on: 2026-06-09
description: When and how to use dbt commands in your data workflow
tags:
  - DES6
  - dbt
image: "[[cover-image.png]]"
imageAlt: How to structure a dbt command with the commit name, command, flags, and arguments.
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: ""
draft: false
---
## Building a dbt Workflow

You can run dbt commands from the Studio IDE or install [dbt CLI](https://docs.getdbt.com/docs/platform/dbt-cli-installation?version=2.0&name=Fusion) to use them locally. Although dbt maintains a comprehensive doc site and forum, I wanted to bring together the most common commands into a semi-chronological order to help understand when and how to interact with the platform.

### **To Create A dbt Project**

These commands are most likely ran once, at the start of the project.

- `dbt init` - Prompts you to setup your profile and connection.
- `dbt login` - Unlock features, like [dbt Fusion in VS Code](https://docs.getdbt.com/docs/fusion/fusion-availability?version=2.0&name=Fusion#dbt-vs-code-extension-features).
- `dbt env show` - Shows configurations for your local, cloud, and connection details.

### **To Load Data Into Your Connected Database**

- `dbt seed --select` - Loads CSV files in the database as tables.
- `dbt run --select` - Connects to database and executes compiled SQL.

### **To Run Tests**

you must dbt run before trying to test.

- `dbt test --select` - Tests SQL models by name or test type.

### To Orchestrate a Project

- `dbt build --select` - Run SQL models, tests, snapshots, seeds, and functions in DAG order.

### **To Create Documentation**

- `dbt docs generate` - Create metadata to power [dbt Catalog](https://docs.getdbt.com/docs/explore/explore-projects?version=2.0).
- `dbt build --write-catalogue` - Create [catalog.json](https://docs.getdbt.com/reference/artifacts/catalog-json?version=2.0) file. Fusion only.
- `dbt build --write-index` then `dbt docs serve` - Generate HTML docs on your local machine.

### **To Maintain Production Environments**

- `dbt source freshness --select` - Check max loaded at time based on a freshness block in your [sources.yml](https://docs.getdbt.com/docs/build/sources?version=2.0&name=Fusion) file.
- `dbt snapshot --select` - Only run the configuration in the [_snapshot.yml](https://docs.getdbt.com/docs/build/snapshots?version=2.0#add-a-snapshot-to-your-project) for a SCD-2 table.

### **To Use Jinja & Macros**

- `dbt deps` - Install the most recent version from your [packages.yml](https://docs.getdbt.com/docs/build/packages?version=2.0) file.
- `dbt run-operation [macro] --args '{key:arguments}'` - Run a macro with optional arguments
- `dbt run-operation --sql "SELECT * FROM table1"` - Run an inline SQL query for grants, dropping tables, or fixing data

### To Validate/Troubleshoot Your Project

- `dbt parse` - Check for Jinja or YAML syntax errors without using a connection.
- `dbt compile --select` - Requires data platform connection to generate executable SQL.
- `dbt debug` - Test the database connection, project setup, and any dependencies.
- `dbt version` - Shows which version of dbt you have installed.
- `dbt retry` - Fix errors then run the last command from the point of failure.

### **To Navigate The dbt CLI**

- `dbt help` - Use as a command or subcommand to display documentation in the CLI.
- `dbt ls --select` - Show a list of resources.

To learn more about dbt commands, like flags and node selection, read the docs: [https://docs.getdbt.com/reference/dbt-commands?version=2.0](https://docs.getdbt.com/reference/dbt-commands?version=2.0)

Happy coding!