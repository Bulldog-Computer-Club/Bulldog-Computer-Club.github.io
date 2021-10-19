---
title: What is the CCC?
sidebar_position: 1
---

The CCC (**C**anadian **C**omputing **C**ompetition) is a computer science competition organized by the University of Waterloo, taking place sometime in February each year. You have 3 hours to complete 5 questions with increasing difficulty.

There are two levels which you can participate in: Junior and Senior.

:::note

The official page for CCC information can be found [here](https://cemc.uwaterloo.ca/contests/computing.html), on the CEMC website.

:::

## Which level should I participate in?

To start off, here's a table from the official CCC page:

| Question | Description                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- |
| J1, J2   | Straightforward, e.g. basic loops and conditions                                            |
| J3, J4   | More challenging, e.g. some combination of loops, conditions, and counting                  |
| J5       | Some advanced material, e.g. recursion, two-dimensional arrays, efficient/clever algorithms |
| S1, S2   | Basic algorithms, e.g. sorting and searching                                                |
| S3, S4   | More advanced algorithms, e.g. careful counting, some mathematical reasoning                |
| S5       | IOI level question                                                                          |

:::tip

Generally, if you have not participated in the CCC previously you should prepare for the Junior division.

:::

The best way to figure out which division to participate in is to simply check out some of the past contests, though.
Past contests can be found at the bottom of [this page](https://cemc.uwaterloo.ca/contests/past_contests.html).

In most years, the J5 question is similar in difficulty to the S2 question. Thus, if you find yourself struggling on J5 questions, it is likely that doing Junior would be a better choice than Senior for you.

## How should I prepare?

**If you are planning on participating in the Junior contest**, the main advice is to _practice, practice, and practice even more._ Generally speaking, J1-J4 are simple implementation questions (that is, if you read the question carefully you should be able to have an idea of how to answer it), so all you need to do is to practice your implementation skills. This requires a fair knowledge of your programming language.

J5 is more difficult, though practice will also help. Based on the previous years, it's very likely that J5 will be a graph theory problem (see, for example, [CCC 2020 J5](https://dmoj.ca/problem/ccc20s2), [CCC 2019 J5](https://dmoj.ca/problem/ccc19j5), and [CCC 2018 J5](https://dmoj.ca/problem/ccc18j5)). However, simple dynamic programming has also appeared in the past in addition to hard ad-hoc problems.

**If you are planning on participating in the Senior contest**, again, practice doesn't hurt. However, knowing common techniques will also be very helpful: to be more specific, all the topics on the [IOI Syllabus](https://ioinformatics.org/files/ioi-syllabus-2019.pdf) have traditionally been fair game.

### The role of mathematics in the CCC

You may have heard, from your parents or others, that mathematics is required to be a good programmer. In general, this is not true. The vast majority of programming-related fields do not require any significant knowledge of mathematics. However, it is generally accepted that in algorithmic contests like the CCC, a mathematical background assists in solving questions. If you are not math-inclined, though, do not worry - Math has not been directly tested on the CCC for almost a decade now (with [CCC 12 S1](https://dmoj.ca/problem/ccc12s1), a combinatorics problem, being the most recent occurrence I can think of.)

However, it is not uncommon for mathematics to be indirectly useful for solving problems efficiently. Generally speaking, it is not uncommon that mathematical insights are useful in obtaining an efficient solution.

In any case, if you have time, it doesn't hurt to brush up on your Math; participating in mathematics competitions is a good way of doing that.

## What languages can I use?

The big 3 languages that are permitted on the CCC are **Python 3**, **Java 8**, and **C++ 14**.

If you know none of the languages on the list but still wish to participate, it would be prudent to begin learning the basics of programming in any of them.
For the most part, knowledge of advanced language features has never been required and rarely results in a huge advantage. In most cases, a basic knowledge of syntax and standard library usage is all that is needed.

### What language _should_ I use?

If you know two or more of the aforementioned languages, you should prefer using **C++ 14**, then **Java 8**, and finally **Python 3**.
The main reason for this is performance. Being an AOT (ahead-of-time) compiled language, C++ is by far the fastest language of the 3, typically being several times faster than Java, which can itself be several _hundred_ times faster than Python (an interpreted language).

To my knowledge, it is always possible to write AC solutions in C++. This guarantee does not hold for Java or Python. Thus, if you have the choice (or time), you should prefer to use C++.

## How can the content posted here help me?

An outline of the topics we plan to cover can be found in the [introductory page](./introduction.md). The topics are targeted towards those who are able to solve most problems in the Junior Division / are beginning to solve problems in the Senior Division, though we envision the content to be helpful to contestants of all levels.

---

That's about all I wanted to cover in this very first article. I look forward to seeing you around, and please feel free to ask any questions you have in the CCC channel when they come up.
