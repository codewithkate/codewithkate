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
# **Where to Use Commands**

You can run dbt commands from the Studio IDE or install [dbt CLI](https://docs.getdbt.com/docs/platform/dbt-cli-installation?version=2.0&name=Fusion) to use them locally. Although dbt maintains a comprehensive doc site and forum, I wanted to bring together the most common commands into a semi-chronological order.

---
## **When to Use Commands**

Most commands are run after changes to configuration files and resource objects:

- [x] analyses
- [ ] macros
- [x] models
- [x] seeds
- [ ] snapshots
- [ ] tests
- [ ] exposures

These are developed and scheduled for automatic deployment.

---
### **Create a Project**

These commands will 🚀 launch your project from the CLI. 

- `dbt init` - Prompts you to setup your profile and connection.
- `dbt login` - Unlock features, like [dbt Fusion in VS Code](https://docs.getdbt.com/docs/fusion/fusion-availability?version=2.0&name=Fusion#dbt-vs-code-extension-features).

This adds the [dbt project template](https://docs.getdbt.com/best-practices/how-we-structure/1-guide-overview?version=2.0&name=Fusion#guide-structure-overview) to your repository. Setup your [project file](https://docs.getdbt.com/reference/dbt_project.yml?version=2.0#example) for [[materializations]].

---
### **Verify Connection**

 Create a connection on the dbt Cloud site under Orchestration > Environments. Or, with a [.dbt/profiles.yml](https://docs.getdbt.com/docs/local/profiles.yml?version=2.0&name=Fusion) file.

Display connection details with:

- `dbt env show` - Shows configurations for your local, cloud, and connection details.
- `dbt debug` - Tests the database connection, project setup, and any dependencies.

---
### **Install Packages**

Create a `./packages.yml` file:

```yaml
packages:
  - package: dbt-labs/dbt_utils
    version: 1.3.3
    
  - package: dbt-labs/codegen
    version: 0.14.1

  - package: tnightengale/dbt_meta_testing
    version: 0.4.0
```

Run this command:

- `dbt deps` - Install code from your [packages.yml](https://docs.getdbt.com/docs/build/packages?version=2.0) file.
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
### **Add Sources**

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
### **Generate Docs**

Keep your project DRY by editing source and model descriptions from a single `models/.../docs.md` file:

```markdown
# Source Name

{% docs source_description%}
This is markdown.
{% enddocs %}
```

Reference source and column descriptions in the `doc()` functions in the `sources.yml` file:

```yaml
sources:
  - name: fresh
    description: "{{ doc('source_description') }}"
```

Finally, use this command to create an interactive data Catalog:

- `dbt docs generate` - Create metadata to power [dbt Catalog](https://docs.getdbt.com/docs/explore/explore-projects?version=2.0).

---
### **Develop Models**

Start with by generating code for base models to perform light transformations that keep the source granularity:

```sql
{{ codegen.generate_base_model(
    source_name=''
    , table_name=''
	, leading_commas= true
    , materialized=''
) }}
```

No data is stored on dbt. You must run models so they exist in the warehouse:

- `dbt run --select +path/to/model` - Connects to database and executes compiled SQL.

Continue to use `dbt run` when you create a model.

---
### **Run Tests**

Store failed tests by adding the `--store-failures` flag
In development, it is critical to test your changes to modeling logic while you make changes. This can help individual developers find bugs before opening a pull request.

In production, it is important to continue testing your code to catch failures when they happen. This can empower the data team to catch data quality issues well before stakeholders are impacted.

When proposing changes / opening a pull or merge request, we can run automated tests against our proposed changes to catch any issues that may not have been caught in the development cycle mentioned above.

On a middle / qa branch, it can be helpful to test a batch of changes that have been made in an isolated testing environment before then merging the code to the main / production branch.
---
### **Navigate the DAG**

- `dbt build --select` - Run SQL models, tests, snapshots, seeds, and functions in DAG order.
- `dbt run --select state:modified+` - Build only new or modified models

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


---
## **How to Use Commands** 



### **Command arguments**

Select a subset:
*--select*

*--exclude*

*--defer*
Access resources in other environments. The benefit of dbt is that you join a project using your own schema. It's a similar priniciple to git in that you can develop resources wihtout interferring with others' work. The cost is that you are using more storage and compute to maintain multiple environments connecting to your warehouse.

You could `dbt clone` another environment's resources to bring them into your local environment. It's more cost efficient if you can reference another environment that already has manifested those resources. For example, you can fix a bug in one model and build it using upstream resources from production:

- `dbt build -s "+int_model" --defer --state models/`

[Learn more](https://medium.com/@meagsp/using-defer-in-dbt-to-save-time-and-money-26c860cfb7dc)

*--resource-type*

*--inline*

## **Quick References**

| argument | --- | --- |
| --- | --- | --- |
| --- | --- | --- |

### **Node Selector Methods**

| method | commands | values |
| --- | --- | --- |
| access | ls | --- |
| config | run, ls | --- |
| exposure | test, run, ls | --- |
| file | run, build | --- |
| fqn | run | --- |
| group | run | --- |
| metric | build, ls | --- |
| package | run | --- |
| path | run, build | --- |
| resource_type | build, ls | --- |
| result | seed, run, test, build | --- |
| saved_query | ls | --- |
| selector | run, build | --- |
| semantic_model | ls | --- |
| source | run | --- |
| source_status | build, source freshness | --- |
| state | run, test, ls | --- |
| tag | run | --- |
| test_name | test | --- |
| test_type | test | --- |
| unit_test | ls | --- |
| version | ls | --- |



### Graph operators

> You exist in the context...
---
Read the docs
[Commands](https://docs.getdbt.com/reference/dbt-commands?version=2.0)
[Node Selection](https://docs.getdbt.com/reference/node-selection/methods?version=2.0&name=Fusion)

Happy coding!

"This [website, program, service, application, product] uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB."