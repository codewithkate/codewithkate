---
title: "Common dbt Commands: When to Run What"
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
aliases:
---
# **How to use Commands**

You can run dbt commands from the Studio IDE or install [dbt CLI](https://docs.getdbt.com/docs/platform/dbt-cli-installation?version=2.0&name=Fusion) to use them locally. Although dbt maintains a comprehensive doc site and forum, I wanted to bring together the most common commands into a semi-chronological order.

Most commands are run after changes to:

- `./dbt_project.yml`
- `properties.yml` (in root or nested folder)
- `./packages.yml`

Or resources, like analyses, macros, models, seeds, snapshots, and tests. 

---
## **When to Use Commands**

### **Create a Project**

These commands will 🚀 launch your project from the CLI. 

- `dbt init` - Prompts you to setup your profile and connection.
- `dbt login` - Unlock features, like [dbt Fusion in VS Code](https://docs.getdbt.com/docs/fusion/fusion-availability?version=2.0&name=Fusion#dbt-vs-code-extension-features).

The dbt template project will be added to your repository. Now, is a good time to setup your project file for [[materializations]].

---
### **Verify Connection**

 Create a connection on the dbt Cloud site under Orchestration > Environments. Or, with a [.dbt/profiles.yml](https://docs.getdbt.com/docs/local/profiles.yml?version=2.0&name=Fusion) file.

Display connection details with:

- `dbt env show` - Shows configurations for your local, cloud, and connection details.
- `dbt debug` - Tests the database connection, project setup, and any dependencies.

---
### **Add Sources**

Use [codegen](https://hub.getdbt.com/dbt-labs/codegen/latest/) macros to generate dbt source code that you can paste into the schema file.

- `dbt deps` - Install code from your [packages.yml](https://docs.getdbt.com/docs/build/packages?version=2.0) file.

Create a `generate_source.sql` file in your analyses folder:

```sql
{{ codegen.generate_source(
	schema_name= ''
	, database_name= ''
	, table_names = ['','']
	, generate_columns = true
	, include_descriptions = true
	, include_data_types = true
	, include_database = true
	, include_schema = true
	) 
}}
```

Compile the code to paste it into `models/.../sources.yml`:

- `dbt compile --select generate_source` - Render executable SQL.

---
### **Load data**

There are three places to set sources:

- dbt_project.yml 
- models/.../properties.yml
- from database.table 

Static references to dates and organizational information can be added from the code repo. Add the CSV files to the /seeds/ folder where dbt can compile and run a CREATE TABLE statement with:

- `dbt seed` - Each file in the directory
- `dbt seed --select "diary" --full-refresh` - Only the selected file

If the database returns a "SQL compilation error" then it is most likely a data type settings issue. Try adding [seed configurations](https://docs.getdbt.com/reference/seed-configs?version=2.0) in the project or properties files:

```yaml
seeds:
  <resource-path>:
	+enabled: true | false
	+full_refresh: true | false  
    +quote_columns: true | false
    +column_types: {column_name: datatype}
    +delimiter: <string>
    +tags: <string>
```

**NOTE**: By default, dbt inserts a .gitkeep file into the seeds folder. Add sub-folders to .gitignore if you do not want flat data files to appear in the remote repo. 

---
### **Run SQL**

No data is stored on dbt. You must run models so they exist in the warehouse:

- `dbt run --select` - Connects to database and executes compiled SQL.

---
### **Run Tests**

you must dbt run before trying to test.

- `dbt test --select` - Tests SQL models by name or test type.

---
### **Build DAG Resources**

- `dbt build --select` - Run SQL models, tests, snapshots, seeds, and functions in DAG order.
- `dbt run --select state:modified+` - Build only new or modified models

---
### **Create Documentation**

- `dbt docs generate` - Create metadata to power [dbt Catalog](https://docs.getdbt.com/docs/explore/explore-projects?version=2.0).

---
### **To Maintain Production Environments**

- `dbt source freshness --select` - Check max loaded at time based on a freshness block in your [sources.yml](https://docs.getdbt.com/docs/build/sources?version=2.0&name=Fusion) file.
- `dbt snapshot --select` - Only run the configuration in the [_snapshot.yml](https://docs.getdbt.com/docs/build/snapshots?version=2.0#add-a-snapshot-to-your-project) for a SCD-2 table.

---
### **To Use Jinja & Macros**

- `dbt run-operation [macro] --args '{key:arguments}'` - Run a macro with optional arguments
- `dbt run-operation --sql "SELECT * FROM table1"` - Run an inline SQL query for grants, dropping tables, or fixing data

---
### **To Validate/Troubleshoot Your Project**

- `dbt parse` - Check for Jinja or YAML syntax errors without using a connection.
- `dbt version` - Shows which version of dbt you have installed.
- `dbt retry` - Run the last command from the point of failure.

---
### **To Navigate The dbt CLI**

- `dbt help` - Use as a command or subcommand to display documentation in the CLI.
- `dbt ls --select` - Show a list of resources.

To learn more about dbt commands, like flags and node selection, read the docs: [https://docs.getdbt.com/reference/dbt-commands?version=2.0](https://docs.getdbt.com/reference/dbt-commands?version=2.0)

---
Happy coding!