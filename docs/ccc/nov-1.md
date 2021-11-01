---
title: Nov 1 Question
sidebar_position: 2
---

Joe’s Doubling Points 
=====================

The Cooldog Programming Club is a club that hosts a programming competition each week. Each member of the Cooldog Programming Group starts out in the year with K points. Each week during their meeting, the Cooldog Programming Group organizes a competition, where members can gain points if they are the first to solve the question.

More specifically, in a competition, the member(s) that receive the highest score have their points doubled and the runner up(s) will get 3 points.The points of all other members remain unchanged.

The organizers would like to keep track of Joe’s points, but as they suck at math,, they have enlisted you to assist them.

### Input
- The first line of input is an integer K denoting the initial number of points that the members have.
- The second line of input is an integer N denoting the number of competitions held.
- The next N lines contain several numbers which represent the scores that members received on a competition.
- The first number is always the score that Chunky Cobra received.

### Output
A single integer: Joe's points after all competitions have been held.


Examples
========

### Example 1
**INPUT:**

5

1

5 3 4 2

**OUTPUT:**

10

**EXPLANATION:**

Joe initially has 5 points. After the first competition, he scores the highest out of all members, so his points double to 5 * 2 = 10.

### Example 2
**INPUT:**

3

2

7 7 4 5

5 1 9 3

**OUTPUT:**

9

**EXPLANATION:**

Joe initially has 3 points. After the first competition, Joe is tied for first place, meaning he still gets his points doubled (3 * 2 = 6). The second competition, Joe is the runner up, meaning he gets 3 points (6 + 3 = 9).
