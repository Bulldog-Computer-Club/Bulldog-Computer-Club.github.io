---
title: Nov 1 Question
sidebar_position: 2
---

# Joe’s Doubling Points

The Cooldog Programming Club is a club that hosts a programming competition each week. Each member of the Cooldog Programming Group starts out in the year with $K$ points. Each week during their meeting, the Cooldog Programming Group organizes a competition, where members can gain points if they are the first to solve the question.

More specifically, in a competition, the member(s) that receive the highest score have their points doubled and everyone else gets $3$ participation points.

The organizers would like to keep track of Joe’s points, but as they suck at math, they have enlisted you to assist them.

### Input

- The first line of input is an integer $K$ denoting the initial number of points that the members have.
- The second line of input is an integer $N$ denoting the number of competitions held.
- The next $N$ lines contain several numbers which represent the scores that members received on a competition.
- The first number is always the score that Joe received.

### Output

A single integer: Joe's points after all competitions have been held.

# Examples

## Example 1

### Input

```
5
1
5 3 4 2
```

### Output

```
10
```

### Explanation

Joe initially has $5$ points. After the first competition, he scores the highest out of all members, so his points double to $5 * 2 = 10$.

## Example 2

### Input

```
3
2
7 7 4 5
5 1 9 3
```

### Output

```
9
```

### Explanation

Joe initially has $3$ points. After the first competition, Joe is tied for first place, meaning he still gets his points doubled ($3 * 2 = 6$). The second competition, Joe doesn't win, but he gets $3$ participation points ($6 + 3 = 9$).

# Model Solution

<details><summary>Click to reveal</summary>
<p>

Joe's points double iff there were no members that scored higher than him; in other words, iff the number of points Joe received is the maximum score.
Based on this insight, we can construct the following solution, which utilizes the `max()` function to obtain the maximum value in a list.

```py
k = int(input())
n = int(input())
for _ in range(n):
	scores = list(map(int, input().split()))
	if scores[0] == max(scores):
		k *= 2
	else:
		k += 3
print(k)
```

:::tip Using `map` to parse input

`map` is a built-in function that applies a transformation to its input.

The following programs are roughly equivalent:

**Using `map()`**

```py
strs = ["1", "2", "3", "4", "5"]
ints = map(int, strs)
# ints = [1, 2, 3, 4, 5]
```

**Using a loop**

```py
strs = ["1", "2", "3", "4", "5"]
ints = []
for s in strs:
	ints.append(int(s))
# ints = [1, 2, 3, 4, 5]
```

In this case, we use it to succinctly parse the input scores, by splitting the input by whitespace and then using the `int()` conversion function to cast each item to an integer.

:::

</p>
</details>
