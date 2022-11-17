---
title: Andrei's Family
sidebar_position: 7
---

# Andrei's Family

An arithmetic sequence is a sequence in which the pairwise difference is constant.
For example $1, 4, 7, 10$ is an arithmetic sequence in which every number increases by $3$.

Andrei has three kids: Jerry, Vincent, and his eldest son, Chungus. Unfortunately, Andrei has forgotten Chungus' age.
Luckily, he remembers that the ages of his sons form an arithmetic sequence. Given the age of Jerry and Vincent, find Chungus' age.

## Input Specification

- The first line contains $V$, the age of Vincent (the **youngest child**.)
- The second line contains $J$, the age of Jerry (the **middle child**.)

## Output Specification

Output one integer: Chungus' age (the **eldest child**.)

# Examples

## Example 1

### Input

```
12
15
```

### Output

```
18
```

## Example 2

### Input

```
69
72
```

### Output

```
75
```

## Example 3

### Input

```
1
10
```

### Output

```
19
```

## Example 4

### Input

```
5
5
```

### Output

```
5
```

# Model Solution

<details><summary>Click to reveal</summary>
<p>

Let Chungus' age be $C$. Then we have the following sequence of ages:

$$
V, J, C
$$

From the problem statement, this sequence is guaranteed to be an arithmetic series.
By the definition of an arithmetic series, the pairwise difference is constant.
Furthermore, since we have two adjacent elements, we can compute the pairwise difference, which is $J - V$.

It follows that the desired value $C$ is equal to $J + J - V$.

```py
v = int(input())
j = int(input())
print(j + j - v)
```

</p>
</details>
