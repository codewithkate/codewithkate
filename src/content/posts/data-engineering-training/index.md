---
title: "Reflective Log: Data Engineering Training"
posted_on: 2026-06-09
description: Chronicle of My DES Experience
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
**tldr;** This spring, I welcomed the opportunity to complete a month long study of data engineering in TIL’s London office. In this post, I reflect on what it took to get there, what I did when I got there, and what I’m doingn now that I’m back home.

## What I Learned Before Training

My first time interviewing for DES was Summer 2025. I was coming off my P2, after a year with the same company. Most of my work could be described as server administration where I was focused on data governance and Tableau enablement. During this time, I studied and passed the Alteryx Advanced Certification where I learned more advanced data modeling techniques. I was keeping up with SQL skills using HackerRank. The morning of the interview, I reviewed the interview data schema and rehearsed why I wanted to do the training.

Six months passed by and I had not given up on gaining experience in data engineering concepts. My P3/P4 client was more data visualization focused. Still, I found an opportunity to practice SQL and collaborate with Data Engineers by testing Dremio connections using a product I was lifting and shifting. One of the goals was to improve performance, so I started with the data model. Over many months, I presented SQL scripts to the engineering team on selecting only necessary fields, optimize joins with filtered CTEs, and migrating flags and calculations from the workbook to the database view. In the end, more than one of my scripts was pushed straight to a production view.

During this time, the coaches had created a <page title> on Notion. I completed all of the recommended SQL challenges which helped me to grasp SQL Joins and window calculations. More than grasping topics, these challenges helped me to build a daily routine and speed when answering complex data questions. My first programming language was Python, so I only spent a few days working through the first part of the recommended Python MOOC.

A few weeks before the interview, we were given the interview data. The topic was F1. @TK had recommended using AI to come up with interview questions in the expected basic-intermediate-advanced structure. Whenever involving AI in my work process, I also try to consider where humans would be involved. I used my years of analytics consulting to gather requirements from interviewing an F1 fan (my mom) to create a list of questions that would yield interesting answers. Then, I asked Claude to classify the questions by SQL skill level and gave them a try in the TIL Playground on Snowflake.

The final interview for DES6 was a success and a few folks form the UK office noted that they had seen my name before on the Snowflake usage boards. This tracks as Michal had ranked our snowflake usage data and I was sitting at the top for most of training. I think my interview prep mostly contributed to that.

One thing I wish I would have done differently during the interview was to be unafraid to identify errors in the Python code. I had seen the funky formatting but only talked about the intentions of the script. During training, the most helpful interactions happened when one of my peers were able to **call out one-off-errors and broken code**.

### Before diving into the week-by-week content highlights…

**The Good**: Training in the UK office meant there is a community of engineers. Having five prior cohorts and a group of core consultants who built this side of the business from scratch really set the scene for onboarding to a new area part of the data lifecycle.

**The Bad**: Time. Time. And, time, again. I felt like I didn’t have enough time to absorb all the content crammed into four weeks. We lost a whole day of training due to a bank holiday and there was half a day without API access for the main project. I’m grateful to have a set of projects which @Rosh has already proven to be good talking points for future data engineering interviews, but I still feel like a lot of them are incomplete. This was especially true for the last day which we spent with completely new data. As someone who knows they need a few days if not weeks to let learnings digest, I was impressed that I could even produce a full pipeline in a day. But, I don’t believe it’s realistic to do so without completely stressing out under the extreme time pressure.

## What I Learned During Training (+ blogs)

### Week 1:

@James stepped up to the plate to deliver the hundreds of Data Engineering Funamentals slides. I most appreciated his anecdotes from Pret.

We were also introduced to how this side of the business came to be…and each other. S/o to @DES6 (The Seven Deadly Sixes).

@Ed hosted a lunch and learn as an extension of . This included a great demo on Iceburg tables and a Kahoot quiz where TK and I took home the crown. And, I also took a lot of notes that inspired me to complete [A Short History of SQL].

Another great session happened in the classroom with Alex Antonison, one of the first dbt Champions. He expertly crafted the slide+repo on [Gitting Good at Git], and I shared my notes and digital doodles [in my own post].

### Week 2:

When we were introduced to github actions for orchestration that’s when we started seeing that checkout was being used in multiple places. That’s how I wrote [Checkout What?: The many meanings of git checkout].

We went from loading data to transforming data with the [BikePoint project].

I also was introduced to Snowflake’s tools for orchestration which I documented in [this list of references].

### Week 3:

At this point, I felt like I was in a tornado of topics. But they were all wrapping up to be a good foundation for dbt. I found myself building a framework for learning the platform through its available commands. I have shared that in [Taking Command of Your dbt Project: Understanding when to use common dbt commands].

### Week 4:

We had three presentations in this one [week.](http://week.It) This is how it wrapped up:

- [Amplitude project]
- [Lever (LUH-veer, LEH-vair) project]

## What I’m doing after training

I hope to put all this theory and learning to practice on a client placement or SIB, soon. Until then, I’m on bench, but with many goals:

- **Short-term (1 month): dbt Certifications** I have the dbt developer certification scheduled for next Monday morning. If I don’t pass the first time, I’ll plan to try again immediately after the week long waiting period. Fingers crossed it doesn’t take me more tries than that. I’ll move onto the dbt Architect path after that.
- **Mid-term goal (3-6 months): The Data Warehouse Toolkit** On my eight hour flight back from London, I did some active reading with the first chapter of The Data Warehouse Toolkit by The Kimball Group. With training fresh in my mind, I tried to contextualize the info in the modern ELT process with this post. After I pass the dbt cert, I plan to go through relevant dimensional modeling techniques from chapter two in a series of posts to experiment with my current [Data Stack].
- **Long-term goal (+1 year): Machine Learning Ops AWS Certification Path]** It’ll probably take the full-year extensions (and maybe some change). I see it as a culmination of learning the foundations of machine learning during my Data Science certifciation, the operations skills picked up during the DS, solidifying my current role as a Data Engineer, and meeting the demands of AI investments.
- **Ongoing**: [codewithkate.com](http://codewithkate.com) After holding onto the domain for over five years, I finally published a site that I promise not to immediately take down. In addition to my blog posts, there is a curated list of notes, projects, and resources. You can also leave comments!