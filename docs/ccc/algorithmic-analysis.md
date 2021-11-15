---
title: Algorithmic Analysis
sidebar_position: 5
---

Rather than diving into algorithmic analysis immediately, let's instead start with why it's useful for competitive programming.
After all, it's rather easy to get into the mindset of considering algorithmic analysis as an obscure technique only useful for
CS classes.

Let's start with a simple example. You wrote a program for a CCC question, say J5. It runs nicely on the sample input, but when you
submit it you notice that it TLEs; that is, it is too slow. What do you do? (In other words, how do you optimize your code in this scenario?)

The answer lies in algorithmic analysis. Though it is not perfect, it gives you a good idea of which operations are relatively computationally
expensive in addition to an idea of how many operations your program will take in the worst case. This can help you pinpoint the issue - is
some part of your algorithm too slow, or is your general approach flawed?

Now, you hopefully have an idea as to why algorithmic analysis is a useful tool. Let's actually get to what it is.

# What is algorithmic analysis?

Algorithmic analysis provides an estimate as to **how many resources a program will use to solve a problem as the input size scales**.
The primary resources that we are concerned about are **time** and **space**.

As, generally, space will not be a concern on the CCC, unless you are doing something crazy, we will focus on **time complexity** for this article.

## Big O notation

**Big O notation** is a notation used to describe how an algorithm scales with the input size.
An informal definition of Big O notation is that it correlates the input size with the number of operations the program will take.

It's written as $O(f(n))$ where $f$ is a function (the Math kind) that describes the number of operations that the program would take for an input of size $n$.

For example, $O(n^2)$ means that the program has quadratic time complexity. In other words, if the input size is $n$, the
number of operations will be approximately $n^2$. For example, if the input size was $10$, then we would expect approximately $10^2 = 100$ operations.

## Finding the Big O of a program

An informal way of finding the Big O of a program, is to go through all the smaller parts of the program, find their Big O, and then add them up.
To find the Big O of a part of the program, you can use the following heuristics.

- Most mathematical operations on numbers are $O(1)$ time (addition, subtraction, multiplication, etc.) For example, all of the following operations:

  ```py
  1 + 1
  2 * 7
  n / 4
  ```

  ...are $O(1)$.

- Built-in syntax and functions - you have to remember the big O of these.
  For example, indexing into an array is $O(1)$, finding an element in a linked list is $O(n)$, and looking up a key in a hash table is expected $O(1)$.
- Loops have a big O of `number of iterations * big O of each iteration`. For example:

  ```py
  for i in range(n):
     1 + 1
  ```

  ...is $O(n)$, as there are $n$ iterations where $O(1)$ work is done each iteration yielding a total time complexity of $O(n * 1) = O(n)$.

  You can apply this heuristic multiple times in the case of nested loops. For example:

  ```py
  for i in range(n):
    for j in range(n):
  	  1 + 1
  ```

  The outer loop runs $n$ times. In each iteration, the inner loop runs $n$ times. In each iteration of the inner loop, $O(1)$ work is being done.
  Thus the big O of the inner loop is $O(n)$. The big O of the whole program is then $O(n * n) = O(n^2)$ as there are $n$ iterations where $O(n)$ work is being
  done each iteration.

These three rules, when put together, actually cover a wide range of programs.
The exception is recursive functions -- none of the rules can be applied to calls of recursive functions (indirect or otherwise). We won't discuss them here,
as analyzing recursive functions is more complex than a short article like this could possibly do justice to.

### "Adding up" Big-O's

Originally, we stated that to obtain the big O of a program, you add up the big O's of its constituent parts.
Unfortunately that is a bit of a simplification, as will be proven by the following example.

**Question:** What is the Big-O of the following program?

```py
for i in range(n):
	1 + 1
for i in range(n):
	1 + 1
1 + 1
for i in range(n * 2):
	for j in range(n):
		1 + 1
```

Let's start with analyzing the time complexity of individual parts of this program. We will label it as follows:

```py
# 1)
for i in range(n):
	1 + 1
# 2)
for i in range(n):
	1 + 1
# 3)
1 + 1
# 4)
for i in range(n * 2):
	# 4a)
	for j in range(n):
		1 + 1
```

1\) is clearly $O(n)$, as is 2). Similarly, 3) is $O(1)$.

As for 4), the outer loop runs $2n$ times. The inner loop, 4a), runs $n$ times and does $O(n)$ work.
Thus we have that 4) is $O(2n * n) = O(2n^2)$.

Summarizing, we have:

1. $O(n)$
2. $O(n)$
3. $O(1)$
4. $O(2n^2)$

If we add that up, we get $O(n + n + 1 + 2n^2) = O(2n^2 + 2n + 1)$.

So is that the Big O of the program?
The answer is... technically yes, $O(2n^2 + 2n + 1)$ is accurate, but in practice generally it is considered just $O(n^2)$.

Why? The reason is that **constants are discarded in Big-O notation.**

### Discarding constants

Let's start with explaining what "discarding constants" mean, and then move on to why.

TODO

## List of common Big O's

- **Constant time:** $O(1)$ means that the program takes 1 operation no matter what the input size is.
  Most mathematical operations are considered $O(1)$ (addition, subtraction, multiplication, etc.), in addition to a handful of common operations such as
  appending to lists (technically amortized constant time, but we won't get into that), popping from the end of a list and indexing into an array.

- **Logarithmic time:** $O(\log n)$ means that the program takes $\log n$ operations for an input of size $n$. The base of the logarithm is typically not shown in Big O notation, but
  the most common base is $2$.

  Assuming that the base of the logarithm is $2$, here are some examples:

  - $n = 10$ => $log_2 8 \approx 3$ operations
  - $n = 1000$ => $log_2 1024 \approx 10$ operations
  - $n = 1,000,000$ => $log_2 1,000,000 \approx 20$ operations

  As you can see, $\log n$ grows relatively slowly.
  Generally you get $O(\log n)$ time if

- **Linear time:** $O(n)$ means that the program takes

## Comparison of Big O's

TODO
