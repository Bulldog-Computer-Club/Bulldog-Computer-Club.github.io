---
title: Algorithmic Analysis
sidebar_position: 6
---

**Algorithm analysis** provides an estimate as to how much time or space your program will take to run.
Knowing basic algorithm analysis can aid in quickly determining whether possible solution approaches are viable and in optimizing solutions that are too slow.

## Big O notation

**Big O notation** shows how an program scales with the input size.
Informally, we say that a program has a time complexity of $\mathcal{O}(f(n))$ if it performs around $f(n)$ operations for an input of size $n$.

For example, if a program is $\mathcal{O}(n^2)$, then it performs around $n^2$ operations for an input of size $n$.
Using this fact, we can predict that -- given an input of size $100$ -- the program in question will perform on the order of $100^2 = 10000$ operations.

:::info Constant Time Complexity

A special time complexity is $\mathcal{O}(1)$, often referred to as _constant time._
Programs that are $\mathcal{O}(1)$ take the same amount of time regardless of the input size.

:::

:::warning

It's important to keep in mind that Big O notation can only give you a general idea of how a program will perform _from a purely theoretical standpoint_; do not take it as gospel.
In practice, there are a myriad of factors affecting the performance of programs that Big O does not take into account.

For example, as we will see in the following section, Big O treats addition and division as having the same complexity,
which is inaccurate -- on most processors, integer addition takes 1 cycle while division takes upward of 20.

:::

## Complexities of Common Programming Constructs

In the previous section, we provided an abstract introduction to the Big O concept.
Here, we give the complexity of various built-in operations and constructs, which will help us analyze more complex programs later on.

### Mathematical Operations

Mathematical operations are $\mathcal{O}(1)$. Below are some examples:

```py
1 + 1
2 * 7
n / 4 # where n is a variable
```

### I/O Operations

Reading a line of input using `input` is $\mathcal{O}(1)$.
Likewise, writing a line of output using `print` is $\mathcal{O}(1)$.

### List Operations

| Operation                             | Time Complexity         |
| ------------------------------------- | ----------------------- |
| `list[...]` (accessing by index)      | $\mathcal{O}(1)$        |
| `list[...] = ...` (updating by index) | $\mathcal{O}(1)$        |
| `list.append(...)`                    | $\mathcal{O}(1)$\*      |
| `list.pop()`                          | $\mathcal{O}(n)$        |
| `len(list)`                           | $\mathcal{O}(1)$        |
| `list.sort()`                         | $\mathcal{O}(n \log n)$ |

_\*Astute readers may note that this is not entirely accurate; appending to a dynamic array takes amortized constant time as opposed to constant time.
While this is technically correct, we gloss over the distinction in this introductory article for simplicity.
Interested readers may take a look at the [Wikipedia page on amortized analysis](https://en.wikipedia.org/wiki/Amortized_analysis)._

### Dictionary Operations

| Operation                              | Time Complexity  |
| -------------------------------------- | ---------------- |
| `dict[...]` (accessing by key)         | $\mathcal{O}(1)$ |
| `dict[...] = ...` (adding new element) | $\mathcal{O}(1)$ |
| `len(dict)`                            | $\mathcal{O}(1)$ |

### Loops

To determine the complexity of a loop, multiply the number of iterations by the complexity of the work performed in each one.
Concretely, consider:

```py
for _ in range(n):
  1 + 1
```

This code will loop $n$ times. In each iteration, one operation occurs, so the overall complexity is $\mathcal{O(n)}$.

Nested loops are similar:

```py
for _ in range(n):
  for _ in range(n):
    1 + 1
```

The outer loop runs $n$ times. In each iteration of the outer loop, the inner loop iterates $n$ times, performing one operation in each.
Hence, the overall complexity is $\mathcal{O}(n \cdot n) = \mathcal{O}(n^2)$.

### Sequences of Operations

Suppose we do not have a single mathematical operation or a single loop, but rather some combination of the two.
For example, consider:

```py
1 + 1
for _ in range(n):
  1 + 1
for _ in range(2 * n):
  1 + 1
```

In such a case, we can split the program into smaller parts (which we know the complexity of), analyze them individually, and sum everything at the end.

In particular, we know:

- The first addition contributes $1$ operation;
- The first loop contributes $n$ operations;
- The second loop contributes $2n$ operations.

It follows that the overall time complexity is $\mathcal{O}(3n + 1)$.

:::note Discarding Constants

In practice, we will often omit constant terms and lesser factors in Big O notation; that is, we would write $\mathcal{O}(n)$ instead of $\mathcal{O}(3n + 1)$.

The reasons for this are twofold:

- It conveys the same information using less space: both $\mathcal{O}(n)$ and $\mathcal{O}(3n + 1)$ tell us that our program runs in linear time with regard to the input size.
- As the input size grows, constant terms and lesser factors become increasingly irrelevant.

:::

## Analyzing a Simple Program

Now, let us try to determine how many operations a simple program takes (and hence find its Big O.)

```py
n = int(input())
total = 0
for k in range(1, n + 1):
  total += k
print(total)
```

This program accepts one integer input, $n$, and outputs the sum of all integers from $1$ up to $n$.

For example, if we input $n = 2$, $1 + 2 = 3$ would be outputted.
Further, if we consider the main loop in the program, as shown below,

```py
n = int(input())
total = 0
# highlight-start
for k in range(1, n + 1):
  total += k
# highlight-end
print(total)
```

we observe that $k$ will start at $1$ and go up to $3$, meaning that there will be a total of $3$ iterations.

Now, consider what happens as we increase $n$, say to $100$.
In that case, the output would be $1 + 2 + \dots + 100 = 5050$.
Again, if we consider the main loop, we see that $k$ will start at $1$ and go up to $100$, resulting in a total of $100$ iterations.

More generally, if we input $n$, then the program will loop $n$ times. Each iteration corresponds to $1$ operation, and thus there are a total of $\approx n$ operations performed.
Thus, we say that the program has a time complexity of $\mathcal{O}(n)$.

## Acceptable Complexities for Various Input Sizes

While reading a problem, you can often predict what time complexity your program should have based off the problem constraints.
For example, if you needed to do some operations on a list of size $n$ where $n$ could be up to a million, you can rule out any solutions with a complexity exceeding $\mathcal{O}(n \log n)$.
On the other hand, if the input size is small (e.g. $n <= 10$), brute force (all subsets / permutations) would suffice and should be the first thing that comes to mind.

Below is a table with different input sizes and acceptable time complexities.

| Bound on $n$          | Maximum acceptable time complexity      |
| --------------------- | --------------------------------------- |
| $n \le 10$            | $\mathcal{O}(n!)$                       |
| $n \le 20$            | $\mathcal{O}(2^n)$                      |
| $n \le 400$           | $\mathcal{O}(n^3)$                      |
| $n \le 5000$          | $\mathcal{O}(n^2)$                      |
| $n \le 5 \times 10^5$ | $\mathcal{O}(n \log n)$                 |
| $n \le 5 \times 10^6$ | $\mathcal{O}(n)$                        |
| Beyond                | $\mathcal{O}(\log n)$, $\mathcal{O}(1)$ |

## Exercises

For each program, work out its time complexity.
If needed, look up time complexities of syntax/functions (e.g. "what is the time complexity of taking a substring of a string?")

**Question 1**

```py
n = int(input())
print(n + n)
```

Provide your answer in terms of $n$.

<details><summary>Solution</summary>
<p>

**Answer:** $\mathcal{O}(1)$.

**Explanation:**
`input` is constant time, so the first line is $\mathcal{O}(1)$.
Adding two integers is also constant time, so the second line is also $\mathcal{O}(1)$.
$\mathcal{O}(1 + 1) = \mathcal{O}(2) = \mathcal{O}(1)$ -- remember to discard constant factors.

</p>
</details>

**Question 2**

```py
n = int(input())
m = int(input())
counter = 0
for i in range(n):
  for j in range(m):
    counter += 1
print(counter)
```

Provide your answer in terms of $n$ and $m$.

<details><summary>Solution</summary>
<p>

**Answer:** $\mathcal{O}(nm)$.

**Explanation:**
`input` is constant time, so the first two lines are $\mathcal{O}(1)$.

The main construct of interest is the nested loop ranging from $0$ to $n$ ($n$ iterations):

```py
for i in range(n):
  for j in range(m):
    counter += 1
```

Examining the inner loop, we see that it ranges from $0$ to $m$ ($m$ iterations):

```py
for j in range(m):
  counter += 1
```

Thus the overall time complexity is $\mathcal{O}(n \times m) = \mathcal{O}(nm)$.

</p>
</details>

**Question 3**

```py
n = int(input())
while n > 0:
  for j in range(1000):
    print(j)
  n //= 2
```

Provide your answer in terms of $n$.

<details><summary>Solution</summary>
<p>

**Answer:** $\mathcal{O}(\log n)$.

**Explanation:**
Observe that the loop halves $n$ every iteration until it reaches $0$, which means that the number of iterations is $\approx \log_2 n$.

```py
while n > 0:
  for j in range(1000):
    print(j)
  n //= 2
```

The inner loop over $j$ may look like it contributes to the time complexity, but since the number of iterations is constant it ends up discarded.

</p>
</details>

**Question 4**

```py
s = input()
for i in range(1, len(s) + 1):
  print(s[:i])
```

Provide your answer in terms of $n = |s|$, the length of string `s`.

<details><summary>Solution</summary>
<p>

**Answer:** $\mathcal{O}(n^2)$.

**Explanation:**
Taking a substring of a larger string `s[:i]` takes $\mathcal{O}(i)$ time.
As $i$ changes each iteration, so the time complexity of each iteration is not the same.
However, considering we consider the loop as a whole, we see that the time complexity of the first iteration is $\mathcal{O}(1)$, the second iteration $\mathcal{O}(2)$, the third $\mathcal{O}(3)$ and the $n$-th $\mathcal{O}(n)$.

Then, the total time complexity across all iteration is:

$$
\mathcal{O}(1 + 2 + 3 + ... + n)
$$

and by the formula for the sum of an arithmetic progression

$$
a_1 + \dots + a_n = \frac{n(a_1 + a_n)}{2}
$$

we have

$$
\begin{align*}
  \mathcal{O}(1 + 2 + 3 + ... + n) &= \mathcal{O}(\frac{n(n + 1)}{2}) \\
  &= \mathcal{O}(\frac{n^2 + n}{2}) \\
  &= \mathcal{O}(\frac{n^2}{2} + \frac{n}{2}) \\
  &= \mathcal{O}(\frac{n^2}{2}) \\
  &= \mathcal{O}(n^2)
\end{align*}
$$

</p>
</details>

**Question 5**

```py
nums = []
n = int(input())
for i in range(n):
  num = int(input())
  nums.append(num)
t = int(input())
counter = 0
for i in range(n):
  for j in range(i):
    if nums[i] + nums[j] == t:
      counter += 1
print(counter)
```

Provide your answer in terms of $n$.

<details><summary>Solution</summary>
<p>

**Answer:** $\mathcal{O}(n^2)$.

**Explanation:**
The loop to read in `nums` requires $n$ iterations and is thus $\mathcal{O}(n)$.

The main loop is very similar to the previous problem, and can be analyzed in the exact same way.

```py
for i in range(n):
  for j in range(0, i):
    # ...
```

The outer loop features $n$ iterations.
In the first iteration, we see that the inner loop loops $0$ times; in the second, it loops $1$ time; in the third, $2$ times, and so on.

By the same method presented for Question 4, we obtain that the loop is $\mathcal{O}(n^2)$ overall.

</p>
</details>

**Question 6**

```py
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

Provide your answer in terms of $n$.

<details><summary>Solution</summary>
<p>

**Answer:** $\mathcal{O}(n)$.

**Explanation:**
The loop to read in `nums` requires $n$ iterations and is thus $\mathcal{O}(n)$.

Though there are two nested loops, we observe that they share the same condition `i < len(nums)`. This means that $i$ can only be incremented $n$ times before the loops break.
Moreover, observe that in each iteration of the inner loop:

```py
while ...:
  i += 1
  run_len += 1
```

$i$ is incremented by $1$. As noted previously, only $n$ increments can occur before the loops break; thus, the overall time complexity is $\mathcal{O}(n)$.

</p>
</details>

**Question 7 (Bonus)**

```py
def fac(n):
  if n <= 1:
    return n
  return n * fac(n - 1)

n = int(input())
print(fac(n))
```

Provide your answer in terms of $n$.

<details><summary>Solution</summary>
<p>

**Answer:** $\mathcal{O}(n)$.

**Explanation:**
Every time `fac` is called, it recurses with a decremented value of $n$. When $n$ reaches $1$ or less, the recursion stops.
Thus `fac(n)` will result in $n$ recursive calls, and as multiplication is constant time we obtain an overall time complexity of $\mathcal{O}(n)$.

</p>
</details>
