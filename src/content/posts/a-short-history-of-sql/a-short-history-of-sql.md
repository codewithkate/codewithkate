---
title: "A Short History of SQL: The Language Of Your Data Stack"
posted_on: 2026-06-09
description: History of SQL as a framework for learning about your data stack
tags:
  - DES6
  - dbt
image: "[](../a-short-history-of-sql/330px-IBM_Yorktown_Heights.jpg)"
imageAlt: Watson Research Center in Yorktown Heights, N.Y.
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: sql history
draft: false
---
**tldr;** Sankofa is a Twi word meaning "go back and get it." This philosophy encourages us to learn about our collective past when shaping the future. This is also why I start with the names and faces behind the unspoken languages we use to interact with machines. Read on for a short reflection on the history of SQL and it’s abstractions to help you build your tech stack.

## Where it all began

The Standard Query Language is often credited to a guy from Portland. Not Washington. The Isle in the county of Dorset in Southeast England. 

That guy was [Edgar F Codd](https://www.ibm.com/history/edgar-codd). In 1970, he proposed the relational model as a logical approach to database management. He was working at IBM at the time and published “A Relational Model of Data for Large Shared Data Banks” in CACM. [^1] Of the paper, one of his teammates recalled:

> At least back then, it seemed like a very badly written paper: some industrial motivation, and then right into the math.
> 
\- Irv Traiger, [1995 SQL Reunion](https://www.mcjones.org/System_R/SQL_Reunion_95/sqlr95-Prehisto.html)

Despite the difficulty of his proposal, the work broke ground, won a Turing Award, and influenced many others from the US and UK to try their hand at creating their own query language.

Codd stayed in the world of [semantics](https://www.google.com/books/edition/The_Relational_Model_for_Database_Manage/ZZckAQAAIAAJ?hl=en&gbpv=1&bsq=syntax), but made space for those who wanted to create syntax. He set up a symposium at IBM’s Yorktown labs where a team formed to work on a project called System R. By 1974, this produced Don Chamberlain and Ray Boyce’s presentation of SEQUEL: A Structured English Query Language. [^2] 

Their proposed set of operations are the same clauses we use today:

- SELECT
- FROM
- WHERE
- GROUP BY

Along with these were functions, including SUM, COUNT, AVG, MAX, and MIN. All to access basic data types like strings, numbers, and boolean values.

Codd later put forth 13 rules, known as [Codd's 12 Rules](https://en.wikipedia.org/wiki/Codd%27s_12_rules#:~:text=Rule%205:%20The%20comprehensive%20data%20sublanguage%20rule:) because, of course, as a programmer, he numbered them zero through twelve. Arguably, the most prevalent Rule is number 5 on sub-languages which suggests that “a relational system may support several languages and various modes of terminal use,” such as:

1. Data definition.
2. View definition.
3. Data manipulation (interactive and by program).
4. Integrity constraints.
5. Authorization.
6. Transaction boundaries (begin, commit and rollback).

This list nearly matches this familiar diagram found in so many beginner SQL tutorials.

[](https://app.notion.com)

## Where we are today

This history of SEQUEL, obviously renamed SQL, tells the story of problems we still face in database management. Namely, lowering software costs and allowing users to communicate with their data. In the pursuit of a solution, thousands of software companies have leveraged SQL and vied for developer attention in a billion dollar landscape. 

How can we determine the value of each software in our stack? 

When it comes to computer science, the answer is usually abstraction.

Most of today’s most popular database companies offer tools that are abstractions of foundational SQL sub-languages. Apache Iceberg tables handle transactions without users writing TCL. dbt uses open-source software and Jinja templates to compile DDL and DML commands. Snowflake surfaces DCL permissions through a friendly user interface called the Trust Center. Now, LLMs can generate DQL from natural language. [^3]

Each layer removing friction from a different part of the stack.

Happy coding!

[1]: [https://dl.acm.org/doi/10.1145/362384.362685](https://dl.acm.org/doi/10.1145/362384.362685)

[2]: [https://dl.acm.org/doi/epdf/10.1145/800296.811515](https://dl.acm.org/doi/epdf/10.1145/800296.811515)

[3]: [https://aws.amazon.com/blogs/machine-learning/enterprise-grade-natural-language-to-sql-generation-using-llms-balancing-accuracy-latency-and-scale/](https://aws.amazon.com/blogs/machine-learning/enterprise-grade-natural-language-to-sql-generation-using-llms-balancing-accuracy-latency-and-scale/)
