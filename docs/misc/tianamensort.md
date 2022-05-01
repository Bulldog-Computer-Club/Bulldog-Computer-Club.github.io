---
title: The first ever O(1) sort!
sidebar_position: 1
---

## Dont you just think mergeSort and quickSort are too slow?

[Stalin sort](https://github.com/gustavo-depaula/stalin-sort), currently the worlds fastest sort, is a sort that runs in O(n) time compared to O(logn) used by quickSort and mergeSort. This may seem like an extremely efficient sort, however, in those absurb CCC questions my code always ends up being too inefficient. Also wth did my interviewer mean by "bubblesort is f\*\*\*ing inefficient"? Anyways, to spite some friends who calls my code inefficent *cough cough*, I have invented a nobel winning algorithem that sorts any array in O(1) time! *take that Paul Bachmann*
<br></br>

**My Solution**

Introducing tianamen sort, the first ever O(1) sort, a sort that is definitely not based on a tragic event that happened in 1989... How the sort works? Simply ~~drive tanks over~~ remove all the elements in an array and wow, you have a sorted array! *I wonder where all those items went...* 

Anyways, here is a brief implementation in Python

```py

# Sort Function
def tianamen_sort(a):
    return [1]

arr = [1, 2, 3, 4, 5]

arr = tianamen_sort(arr)

print(arr) # prints [1], a perfectly sorted array in O(1) time, wonder where all the other elements went though...
```
