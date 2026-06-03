---
title: kimball-ch-1
date: 2026-05-30
description: ""
tags: []
image: ""
imageAlt: ""
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: ""
draft: true
---
# Data Warehousing, Business Intelligence and Dimension Modeling

## Different Worlds of Data Capture and Data Analysis

Data is captured and processed to inform and support decisions. When considering how information assets are managed, the Kimball Group (Kimball) isolates data input from output as two independent systems:

👷🏾 **Operational systems** log transactions by constantly recording actions taken within an organization.

🕵🏾‍♀️ **Analytics systems** observe and maintain a history of operational records to measure the performance of an organization.

This book is Kimball's solution to the problem of copying operational records directly data analytics systems. 

## Goals of Data Warehousing and Business Intelligence

Kimball provides a list of concepts for how developers respond to the needs, clients, structures, and rhythms of DW/BI systems. This includes:

- Accessibility
- Consistency
- Adaptability
- Timeliness
- Security
- Authority & Trust
- Acceptance 

Kimball's list reflects other software frameworks, like Amazon's Well-Architected Framework. Importantly, they make a point that DW/BI is optional. Arguably, acceptance from users should be considered first and the other areas can be used to improve upon the relationship between developers and business users.

### Publishing Metaphor for DW/BI Managers

The magazine example feels outdated in a world of on-demand news and entertainment. Even streaming serves adhere to publishing standards, as their platforms are built upon the legacy of architectures by Kimball and other dimensional modeling researchers. 

The goals of developers across industries are emphasized in the book with real-world examples related to:

- *understand*ing users 
- *deliver*ing quality work
- *sustain*ing environments with credit and trust

Revisit this section for a deeper dive into soft-skills for data roles.

## Dimensional Modeling Introductions

Having the goals of data management in mind, you can restructure data from its transactional form to something more optimized for quick access and readability.   

**ME: How do you start the transformation process?**

You can use graphic design tools like Excalidraw or Lucid to create *Entity-relationship Diagrams* (ERD) to visualize the shape of the data.

Most operational systems are optimized for updates and inserts in a shape called *Third Normal Form* (3NF). This removes redundancies but is terribly slow and complicated.

### Star Schema Versus OLAP Cubes

After mapping an operational system in an ERD, you can simplify it down to a dimensional model. Kimball focuses on two types of dimensional models: 

- Star schemas in relational databases
- OLAP cubes in multidimensional databases

OLAP refers to Online Analytical Processing systems that store and index data for fast retrieval. Although he never addresses how online gets abbreviated to 'OL', Kimball recommends loading data into a star schema and then transforming the data into a OLAP Cube format.

%% TODO: This section lacks details on what is meant by 'store and index'. %%

The best visual I found for OLAP Cubes came from Excel OLAP tutorials that used multiple spreadsheet tabs separated by a date or category.

![[olap-cube.excalidraw]]

Kimball uses star schemas as a foundation for building OLAP cubes. In general, The Kimball Method refined how structures and relationships are communicated in a schema layer before calculations and aggregations. The rest of the book establishes some of the best practices used by modern data systems, like the Medallion Architectures popularized by [[Databricks]] and YAML files supported by [[dbt]].

#### *OLAP Deployment Considerations*

In practice, schemas and analytical processing are abstracted away in the interfaces we use to present data to the business. The BI interfaces of today, like Looker and Tableau, present dimensions and measures in a way that reflects the OLAP cubes of the 90s. The problem with OLAP cubes is that the higher the dimensionality, the more time is spent pre-calculating.

Rather than reflect the data model in the reporting layer, business needs should shape how information is presented. Ben Stancil, Chief Analytics Officer, emphasized this in an AI Council talk on the importance of having Analytics Engineers tailoring models to multiple business needs, from digestible metric views to explorable data sets [(Stancil 2022)](https://youtu.be/xrC-izSUEBU?si=_knrFRS5r7A6vS-P).  

[[Personal reflections on deploying dimensional models in OLAP systems]]

### Fact Tables for Measurements

We can further consider the components of a dimensional model. 

Facts are the foundation of dimensional modeling. It's often noted that every row in a fact table has a one-to-one relationship with some action in the real world. The Kimball Method categorizes the granularity of fact tables to be a:

- [[Retail_Sales|Transaction]]
- [[Inventory|Periodic snapshot]]
- [[Inventory|Accumulating snapshot]]

Most fact tables are long and only contain true activity, not inactivity.

### Dimension Tables for Descriptive Context

Rather than storing text directly in fact tables, dimensional keys relate descriptive text to each fact. Smaller, continuous numeric values are stored in fact tables, while shorter discrete numbers and non-redundant attributes exist in dimension tables.

### Facts and Dimensions Joined in a Star Schema

The two components are brought together by labeling and grouping facts by dimensions.

![[star_schema.excalidraw]]
These building blocks can be used in the most basic SQL.

```sql
select
	artist.name
	, count(stream.id)
from artist
join stream
group by artist.name
```

For example, the number of streams per artist can be found by selecting the name from the artist table and count of ids per artist in the stream table using a sql join.

## Kimball’s DW/BI Architecture

We can continue to build up  entire architectural models based on the building blocks of facts and dimensions. Having understood that the function of facts is to measure and the role of dimensions are to describe.

### Operational Source Systems

Any data outside of the data storage solution are considered sources. They keep track of things happening in the world, while the analytical system keeps a historical record.

### Extract, Transformation, and Load Systems

The latest edition of this book is over a decade old. It's from a moment in computing history was storage was not cheap. Many processes were adapted to do basically the same thing:

![[Screenshot 2026-05-24 at 9.26.14 PM.png]]

- Extract data from a source
- Transform data into simple models
- Load data into a BI and reporting tools

Today, we can extract and load endless amounts of data through distributed systems. Compute is still expensive, so concepts around quick access still apply and are reflected in modern ELT.

### Presentation Area to Support Business Intelligence
 
 As mentioned during the discussion of [[ch_1_DW_BI_Dimension_Modeling#OLAP Deployment Considerations|OLAP Deployment Considerations]], data is structured based on a list of business processes.  across a number of shared dimensions.

At the time of publishing, Kimball acknowledges their winning alliance with arguments for storing data in relational and OLAP schemas. They stake their claim that additional work should be done to support ad-hoc queries and drill down scenarios. 

In practice, this may look like data marts with friendly shapes and vocabulary for business applications.

### Business Intelligence Applications

This is the 'front room' and final step in the Kimball Architecture. Data is parameterized and placed into easy-to-use templates that abstract away the need for complex code queries to access data.

#TODO![Table from Dawn on bi app selection with added natural language dimensions]

### Restaurant Metaphor for the Kimball Architecture

🧑🏾‍🍳 ETL/ELT processes happen in the kitchen. 
🍽️ Data is served in a welcoming area, like a dining room.

Similar to a restaurant, if the order is wrong it is fixed in the kitchen. 

## Alternative DW/BI Architectures

#TODO Dimensional modeling is widely accepted and there are many ways to go about making simple OLAP systems.

### Independent Data Mart Architecture
### Hub-and-Spoke Corporate Information Factory (CIF) Inmon Architecture

> [!Note] 
> Technically, physical tables can be created from the integration of multiple data sources without normalization.
  
> [!Note] 
> CIF architecture locks the atomic data in difficult-to-query normalized structures, while delivering departmentally incompatible data
### Hybrid Hub-and-Spoke and Kimball Architecture


## Dimensional Modeling Myths


### Myth 1: Dimensional Models are Only for Summary Data

It is impossible to know every question. It's better to build facts that can be rolled up and expanded upon with dimensions.

### Myth 2: Dimensional Models are Departmental, Not Enterprise

There's a reason why tools like dbt have [a feature to share models and other assets across project environments]. All this information only has value if it can be shared.

### Myth 3: Dimensional Models are Not Scalable

Storage is cheap. Billions and trillions of records are being kept in fact tables. Dimensional models support humans in understanding what information they have to make decisions and to instruct machines on how to access that data. 

### Myth 4: Dimensional Models are Only for Predictable Usage

Although most consulting work involves translating existing data models into new systems, one of the main reasons migrations can exist is that dimensional modeling is conceptual. Detailed fact tables and defined relationships make for flexible systems. 

### Myth 5: Dimensional Models Can’t Be Integrated

There are plenty of data governance strategies to establish standards for shared dimensions, such as people or sales data. 

## More Reasons to Think Dimensionally

%% TODO: This would make a good introduction to the myth section %%

> When specifying the project’s scope, you must stand firm to focus on a single business process per project and not sign up to deploy a dashboard that covers a handful of them in a single iteration.

%% TODO: add reference for this quote from page 32. %%

Requirements gathering shouldn't focus on the next report. Traditional departmental approaches to IT silos data resources and is feuled by ad-hoc solutions. I've seen first-hand how department-led data intitiatives lead to inconsitent metric definitions, ownership and responsibility debates, and long reconciliation processes. 

Kimball applies dimensional thinking to enterprise planning through cross-departmental collaborations. He specificially mentions these roles:

- DW/BI Teams consider business processes as their 'unit of work' rather than products.
- **Business Management** funds IT projects with broad-scale impact related to KPIs.
- **Subject Matter Experts** describe the business process to guide data stewardship and governance. 

On an individual level, developers can keep the goals of business intelligence in mind. If they find themselves falling into a cycle of ad-hoc requests or even disappointment then it's time to take the data model back to the drawing board. 
## Agile Considerations

Some of the most popular boards are found in the Agile framework. It' sbeen well over a decade since Kimball published this edition and mentioned the 'interest' that the DW/BI industry has had in Agile workflows.

Basic components of the Agile framework include:

- Iterative, incremental work
- Frequent stand-ups and retrospectives
- Close business partnerships

In a later chapter, Kimball introduces the bus matrix to remedy other problems teams have with Agile work. 