---
title: "Reflective Log: Data Engineering Training"
posted_on: 2026-06-09
description: Chronicle of My Data Engineering School Experience
tags:
  - DES6
  - dbt
image: "[[cover-image.jpeg]]"
imageAlt: View from under a Magnolia tree in Spring
imageOG: false
hideCoverImage: false
hideTOC: false
targetKeyword: data engineering school
draft: true
---

# Reflective Log: Data Engineering Training

**tldr;** In Spring 2026, I joined The Information Lab's sixth Data Engineering Cohort. We completed a month long study in TIL’s London office. In this post, I reflect on what it took to get in, what I did when I got there, and what I’m doing now that I’m back in the US.

## What I Learned Before Training

My first time interviewing for the Data Engineering School (DES) was Summer 2025. I was entering a liminal period, after spending a year at a big bank doing server administration during their migration from Tableau Server to Cloud. Most of my work focused on data governance and enablement. During this time, I also studied and passed the Alteryx Advanced Certification to learn more data modeling techniques. I was keeping up with my SQL skills using Leetcode and HackerRank. 

The morning of the interview, I reviewed the interview schema and rehearsed why I wanted to join the next cohort. Although I felt confident when speaking, I nervously fumbled through five of the seven SQL questions and read, rather than interpreted the example python script. I did not get in.

Six months passed by and I had not given up on gaining experience in data engineering concepts. My next client was still in banking, but I moved further down the data pipeline optimizing dashboards for their risk management department. Luckily, they were democratizing their analytics workflow by offering a new Lakehouse for analysts to develop the gold layer models directly. This allowed me to develop production-ready SQL and define ownership layers with Data Engineers. 

Data models were faster and cheaper when I changed models to: 

- Select fields for only defined metrics and categories
- Optimize joins with filtered CTEs
- Move flags and calculations from the workbook to the database view

Because of the relationships I developed with the internal engineering team to revise and review the code, all of my views were able to be pushed straight through to production.

During this time, DES coaches released a list of courses and challenges to practice SQL and Python. These were the ones I found most helpful:

| | |

More than grasping onto topics, these challenges developed a daily routine and increased my speed when answering complex data questions. 

A few weeks before the interview, we were given the Formula 1 (F1) dataset^[1] for the interview. At the recommendation of [TK Zellers](https://www.thedataschool.co.uk/blog/thomas-zellers/), who was also in my Data School cohort, I started exploring the data by asking AI to come up with basic, intermediate, and advanced questions. It was helpful, but I started loosing interest in going back and forth with Claude everyday. I decided to lean into my interviewing skills, from years of journalism and consulting, to gather requirements from interviewing a real F1 fan (my mom). Then, I asked Claude to classify the questions by SQL skill level and gave them a try in a [120-day Snowflake trial account](https://signup.snowflake.com/?trial=student).

After nearly a year of prep, my second interview for DES6 was a success.

One thing I wish I would have done differently during the interview was to be unafraid to identify errors in the Python code. I had seen the funky formatting but only talked about the intentions of the script. As it turned out, one of the most helpful interactions during training was having peers who could call out one-off-errors and broken code.

## What I Learned During Training (+ blogs)

### Week 1: Data Engineering Fundamentals

We started with literally hundreds of slides on Data Engineering Fundamentals. It was long, but not boring, since one of the staff engineers delivered the session and happily went off on tangents about seeing core concepts in the wild with clients.

We were also introduced to how the Engineering side of The Information Lab's business came to be, as well as a little about each other. S/o to The Seven Deadly Sixes.

Another engineer, Ed Hayter, hosted lunch and learn to demo Iceburg Tables and answer questions about his research for [Introduction to Open Table Formats](https://www.theinformationlab.co.uk/community/blog/tiluk-tip-of-the-iceberg/). There was Kahoot quiz where TK and I took home the crown. I also took a lot of notes which inspired me to write [[A Short History of SQL]].

One of the last sessions of the week happened in the classroom with Alex Antonison, one of the first dbt Champions and author of [Gitting Good at Git](https://github.com/alex-antonison/gitting-good-at-github). I was able to develop a few git seedlings into evergreen notes on why [[Git Is More Than Version Control].

### Week 2: Extract and Load

This was the shortest week with a bank holiday on Monday. That meant a four day weekend where I went off to Paris to celebrate my birthday. I came back with macarons, ready to extract and load!

We built two orchestrated runs:

1. Scheduled daily calls Transport for London's API to load `.json ` files into an S3 Bucket with Kestra. [View the code](https://github.com/codewithkate/tfl_bikepoint.git).
2. Scheduled hourly calls to Amplitudes API to load `.gz` files into an S3 Bucket with GitHub Actions. [View the code](https://github.com/codewithkate/tfl_bikepoint.git).

It was while learning GitHub Actions when we started seeing that checkout was being used in multiple places. That’s how I wrote [[Branching and File Changes with Git Checkout]].

We also completed several data modeling exercises. During training, I was reading The Data Warehouse Toolkit by Ross & Kimball, so started to develop a bit of a [[Dimensional Modeling|data modeling praxis]]. 

### Week 3: Transform

At this point, I felt like I was in a tornado of topics. But they were all wrapping up to be a good foundation for transforming data with Snowflake and dbt. I found that learning platform command-line tools served as a good entry point for understanding problems that could be solved. For example, [[Command-Line Tools for dbt Methods|Taking Command of Your dbt Project: Understanding when to use common dbt commands]].

### Week 4: Final Project

This is how it wrapped up:

- Introduced to data architecture and governance 
- Converted the Amplitude Snowflake project into a dbt project 
- Built a full ETL pipeline in a day using data from Lever (LUH-veer, LEH-vair)

And, of course, enjoyed a few farewell pints!

## What I’m doing after training

- **Short-term (1 month): dbt Certifications** I have the dbt developer certification scheduled for next Monday morning.**Update**: I passed the dbt developer cert! 

- **Mid-term goal (3-6 months): The Data Warehouse Toolkit** I plan to go through relevant dimensional modeling techniques from chapter two in a series of experiments.

- **Long-term goal (+1 year): Machine Learning Ops AWS Certification Path]** It’ll probably take the full-year extension (and maybe some change). I see it as a culmination of learning the foundations of machine learning during my Data Science certification, the operations skills picked up during the DS, solidifying my current role as a Data Engineer, and meeting the demands of AI investments.

- **Ongoing**: [codewithkate.com](http://codewithkate.com) After holding onto the domain for over five years, I finally published a site that I promise not to immediately take down. In addition to my blog posts, there is a curated list of notes, projects, and resources. You can also leave comments!

[1]: https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020