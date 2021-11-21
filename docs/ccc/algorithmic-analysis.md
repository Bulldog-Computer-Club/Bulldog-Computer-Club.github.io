---
title: Algorithmic Analysis
sidebar_position: 5
---

:::note

If you already feel familiar with algorithmic analysis, skip to [the exercises](#exercises).

:::

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

It's written as $O(f(n))$ where $f$ is a function that describes the number of operations that the program would take for an input of size $n$.

For example, $O(n^2)$ means that the program has quadratic time complexity. In other words, if the input size is $n$, the
number of operations will be approximately $n^2$. For example, if the input size was $10$, then we would expect approximately $10^2 = 100$ operations.

## Finding the Big O of a program

A way of finding the Big O of a program is to go through all the smaller parts of the program, find their Big O, and then add them up.

- Most mathematical operations on numbers are $O(1)$ time (addition, subtraction, multiplication, etc.) For example, all of the following operations:

  ```py
  1 + 1
  2 * 7
  n / 4
  ```

  ...are $O(1)$.

- Built-in syntax and functions - you have to remember the big O of these.
  For example, indexing into an array is $O(1)$, finding an element in a linked list is $O(n)$, and looking up a key in a hash table is expected $O(1)$.
  Reading input is considered $O(1)$ as well.

- Loops have a big O of `number of iterations * big O of each iteration`. For example:

  ```py
  for i in range(n):
     1 + 1
  ```

  ...is $O(n)$, as there are $n$ iterations where $O(1)$ work is done each iteration yielding a total time complexity of $O(n * 1) = O(n)$.

  You can apply this rule multiple times in the case of nested loops. For example:

  ```py
  for i in range(n):
    for j in range(n):
  	  1 + 1
  ```

  The outer loop runs $n$ times. In each iteration, the inner loop runs $n$ times. In each iteration of the inner loop, $O(1)$ work is being done.
  Thus the big O of the inner loop is $O(n)$. The big O of the whole program is then $O(n * n) = O(n^2)$ as there are $n$ iterations where $O(n)$ work is being
  done each iteration.

These three rules, when put together, cover a wide range of programs.
The primary exception is recursive functions -- none of the rules can be applied to calls of recursive functions (indirect or otherwise).

### "Adding up" Big-O's

Originally, we stated that to obtain the big O of a program, you add up the big Os of its constituent parts.
Unfortunately that is a bit of a simplification:

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

Generally speaking, constants and lower factors are omitted in Big-O notation. In $O(2n^2 + 2n + 1)$, $2n^2$ is the "biggest" term
and thus is the only one that is shown. Moreover, the constant factor $2$ is removed, leaving $n^2$.

The primary reasons for this are:

1. It simplifies the notation. $O(n^2)$ is much simpler to look at compared to $O(2n + 2n^2 + 1)$.
2. It still gets the main idea across -- e.g. the algorithm is linear / quadratic / so on.
3. As the input size grows, constants and lower factors become more and more irrelevant.
   For example, in $n + 1$, if $n$ is very large (i.e. $10^6$), the difference between $10^6$ and $10^6 + 1$ is irrelevant.

## List of common Big Os

Listed from fastest to slowest.

- **Constant time $O(1)$:** Most mathematical operations are considered $O(1)$ (addition, subtraction, multiplication, etc.), in addition to a handful of common operations such as
  appending to lists, popping from the end of a list and indexing into a list.

- **Logarithmic time $O(\log n)$:** Among other operations, programs that halve the input size each iteration are logarithmic time, such as binary search.

  Logarithms grow fairly slowly: assuming that the base of the logarithm is $2$, here are some examples with various input sizes:

  - $n = 10$ => $log_2 8 \approx 3$ operations
  - $n = 1000$ => $log_2 1024 \approx 10$ operations
  - $n = 1,000,000$ => $log_2 1,000,000 \approx 20$ operations

- **Linear time $O(n)$:** Arguably the most common time complexity, showing up basically everywhere: for example, a loop over a list is $O(n)$.

- **Linearithmic time $O(n \log n)$** Primarily shows up when sorting is involved, as most efficient sorting algorithms are $O(n \log n)$ (e.g. quicksort, mergesort, timsort).

- **Quadratic time $O(n^2)$:** Two nested loops (e.g. looping over all pairs in an array).

- **Exponential time $O(2^n)$:** Occurs when ealing with subsets -- the number of subsets of a set with cardinality $n$ is $2^n$.

- **Factorial time $O(n!)$:** Occurs when dealing with permutations -- the number of permutations of a list of size $n$ is $n!$.

## What time complexities will pass for certain inputs

While reading a problem, you can often predict what time complexity your program should have based off the problem constraints.
For example, if you needed to do some operations on a list of size $n$ where $n$ could be up to a million, you can rule out anything above quadratic time.
Similarly, if the input size is small (e.g. $n <= 10$), brute force (all subsets / permutations) should be the first thing that comes to mind.

Below is a short table with different input sizes and possible time complexities. Note that this is not extremely exact -- treat it as a heuristic.

| $n$             | Upper bound on time complexities |
| --------------- | -------------------------------- |
| $n <= 10$       | $O(n!)$                          |
| $n <= 20$       | $O(2^n)$                         |
| $n <= 400$      | $O(n^3)                          |
| $n <= 5000$     | $O(n^2)$                         |
| $n <= 5 \* 10^5 | $O(n \log n)$                    |
| $n <= 5 * 10^6$ | $O(n)$                           |
| Other           | $O(\log n)$, $O(1)$              |

## Exercises

For each program, work out its time complexity.
Feel free to look up time complexities of syntax/functions if needed (e.g. "what is the time complexity of taking a substring of a string?")

**Question 1**

```py
# Input: one integer N.
n = int(input())
print(n + n)
```

<details><summary>Solution</summary>
<p>

**Answer:** $O(1)$.

**Explanation:**
`input` is constant time, so the first line is $O(1)$.
Adding two integers is also constant time, so the second line is also $O(1)$.
$O(1 + 1) = O(2) = O(1)$ -- remember to discard constant factors.

</p>
</details>

**Question 2**

```py
# Input: two integers N and M.
n = int(input())
m = int(input())
counter = 0
for i in range(n):
  for j in range(m):
    counter += 1
print(counter)
```

<details><summary>Solution</summary>
<p>

**Answer:** $O(nm)$.

**Explanation:**
`input` is constant time, so the two lines are $O(1)$.

We now have a nested loop, where the outer loop goes from $0..n$ (which is $n$ iterations):

```py
for i in range(n):
  for j in range(m):
    counter += 1
```

If we examine the inner loop, we see that it goes from $0..m$ (which is $m$ iterations):

```py
for j in range(m):
  counter += 1
```

Thus the overall time complexity of the loop is $O(n * m) = O(nm)$.
As lower factors are discarded, $O(nm)$ is also the time complexity of the program.

</p>
</details>

**Question 3**

```py
# Input: an integer N.
n = int(input())
while n > 0:
  for j in range(1000):
    print(j)
  n //= 2
```

<details><summary>Solution</summary>
<p>

**Answer:** $O(\log n)$.

**Explanation:**
Observe that the loop halves $n$ every iteration until it reaches $0$, which means that the number of iterations is $\approx \log_2 n$.

```py
while n > 0:
  for j in range(1000):
    print(j)
  n //= 2
```

The inner loop over `j` may look like it contributes to the time complexity, but since the number of iterations is constant (1000) it does not
actually contribute to the time complexity.

</p>
</details>

**Question 4**

```py
# Input: a string of length N.
s = input()
for i in range(1, len(s) + 1):
  print(s[:i]) # Note: s[:i] creates a new string from the first i characters of s
```

<details><summary>Solution</summary>
<p>

**Answer:** $O(n^2)$.

**Explanation:**
Taking a substring of a larger string `s[:i]` takes $O(i)$ time. As `i` changes each iteration though, the time complexity of each iteration is not the same.
However, if we consider the loop as a whole, we see that the time complexity of the first iteration is $O(1)$, the second iteration $O(2)$, the third $O(3)$ and the $n^{th}$ $O(n)$.

Then, the total time complexity across all iteration is:

$$
O(1 + 2 + 3 + ... + n)
$$

and by the formula for the sum of an arithmetic progression

$$
a_1 + a_2 + a_3 + a_4 + a_n = \frac{n(a_1 + a_n)}{2}
$$

we have that

$$
O(1 + 2 + 3 + ... + n) \\
= O(\frac{n(n + 1)}{2}) \\
= O(\frac{n^2 + n}{2}) \\
= O(\frac{n^2}{2} + \frac{n}{2}) \\
= O(\frac{n^2}{2}) \\
= O(n^2)
$$

</p>
</details>

**Question 5**

```py
# Input: a list of numbers of length N and a target number T.
nums = []
n = int(input())
for i in range(n):
  num = int(input())
  nums.append(num)
t = int(input())
counter = 0
for i in range(n):
  for j in range(0, i):
    if nums[i] + nums[j] == t:
      counter += 1
print(counter)
```

<details><summary>Solution</summary>
<p>

**Answer:** $O(n^2)$.

**Explanation:**
The loop to read in `nums` requires $n$ iterations and is thus $O(n)$.

The main loop is very similar to the previous problem, and can be analyzed in the exact same way.

```py
for i in range(n):
  for j in range(0, i):
    # ...
```

The outer loop features $n$ iterations.
In the first iteration, we see that the inner loop loops $0$ times; in the second, it loops $1$ time; in the third, $2$ times, and so on.

By the exact same method presented for Question 4, we obtain that the loop is $O(n^2)$ overall.

**Unrelated note:** This is the brute-force solution for the famous Two-Sum problem.

</p>
</details>

**Question 6**

```py
# Input: a list of numbers of length N.
nums = []
n = int(input())
for i in range(n):
  num = int(input())
  nums.append(num)

i = 0
while i < len(nums):
  run_len = 1
  cur = nums[i]
  i += 1
  while i < len(nums) and nums[i] == cur:
    i += 1
    run_len += 1
  print(run_len)
```

<details><summary>Solution</summary>
<p>

**Answer:** $O(n)$.

**Explanation:**
The loop to read in `nums` requires $n$ iterations and is thus $O(n)$.

Though there are two nested loops, we observe that they share the same condition `i < len(nums) => i < n`. This means that `i` can only be incremented `n` times before the loops break.
Moreover, observe that in each iteration of the inner loop:

```py
while ...:
  i += 1
  run_len += 1
```

`i` is incremented by `1`. As noted previously, only `n` increments can occur before the loops break; thus, the overall time complexity is $O(n)$.

</p>
</details>

**Question 7 (Bonus)**

```py
# Input: an integer N.
def fac(n):
  if n <= 1:
    return n
  return n * fac(n - 1)
n = int(input())
print(fac(n))
```

<details><summary>Solution</summary>
<p>

**Answer:** $O(n)$.

**Explanation:**
Every time the recursive procedure `fac` executes, it calls itself with a decremented value of $n$. When $n$ reaches $1$ or less, the recursion stops.
Thus `fac(n)` will result in $n$ recursive calls of itself, and as multiplication is constant time we obtain an overall time complexity of $O(n)$.

</p>
</details>

**Question 8 (Bonus)**

```py
# Input: an integer N.
def fib(n):
  if n <= 1:
    return 1
  return fib(n - 1) + fib(n - 2)
n = int(input())
print(fib(n))
```

<details><summary>Solution</summary>
<p>

**Answer:** $\approx O(2^n)$ (more precisely, [$O(\phi^n)$](https://stackoverflow.com/questions/360748/computational-complexity-of-fibonacci-sequence)).

**Explanation:**
Consider the recursion tree of calling `fib(n)`. For example, if we have $n = 5$:

![fib(5) recursion tree visualization](/img/fib_recursion_tree.png)

_Visualization courtesy of [VisuAlgo](https://visualgo.net/en/recursion)_

In each level of the recursion tree other than the very last one, node has $2$ child nodes.
Thus, if the number of nodes in the $l^{th}$ level $N_{l}$ is $k$, the number of nodes in the next level $N_{l+1} = k^2$.
Given that the first level of the recursion tree has $1$ node, the second level should have $2$ nodes, the third $4$ and so on until the last level.
If we look at the recursion tree, this generally seems to hold.

As there are $\approx n - 1$ complete levels in the recursion tree for `fib(n)`, the number of nodes is then:

$$
\approx 2^{n-1} + 2^{n-2} + ... + 2^0
$$

by the formula for the sum of a geometric progression

$$
a + ar + ar^2 + ar^3 + ar^n = a \frac{1 - r^{n+1}}{1 - r}
$$

we have that

$$
2^{n-1} + 2^{n-2} + ... + 2^0 \\
= 1 \frac{1 - 2^n}{1 - 2} \\
= 1 * (2^n - 1) \\
= 2^n - 1
$$

...which is in $O(2^n)$.

</p>
</details>
