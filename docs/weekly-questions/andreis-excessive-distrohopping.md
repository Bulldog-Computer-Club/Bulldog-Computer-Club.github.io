---
title: Andrei's Excessive Distrohopping
sidebar_position: 3
---

# Andrei's Excessive Distrohopping

As a Linux user, Andrei enjoys trying out new distros regularly. After trying out a new distro, Andrei gives it a rating.

Andrei's rating of a distro depends on two things: the number of key features that he likes and the dankness of its name. For example, Andrei might find a distro to be _simple_ (good) yet _slow_ (bad). Good features increase the distro's rating by $1$ point, while bad ones decrease it by $0.5$ points.

To determine the dankness of a distro's name, Andrei uses the following criteria, in order.

1. If there are at least 3 occurrences of the same letter in the distro name, it is **very dank**, which increases the distro's rating by $3$ points.
2. If the distro name contains a digit (`0-9`), it is **somewhat dank**, which increases the distro's rating by $1$ point.
3. Otherwise, it is **undank**, which decreases the distro's rating by $1$ point.

Write a program to determine Andrei's highest rated distro and its rating.

### Input Specification

- The first line of input is an integer $N$ denoting the number of distros Andrei has tried.
- The second line of input contains a list of features Andrei deems good, separated by spaces. Features are guaranteed to be lowercase strings, each under $80$ characters.
- The third line of input contains a list of features Andrei deems bad, separated by spaces.
- The next $N$ lines of input each contain a distro name, then a list of features, separated by spaces. Distro names are guaranteed to be strings under $80$ characters, not containing spaces.

### Output Specification

The output will consist of two lines.

- On the first line, output the name of the distro that has the highest rating according to Andrei. If there is a tie, output the distro that appeared first.
- On the second line, output the rating of the highest-rated distro.

# Examples

## Example 1

### Input

```
5
speedy simple cool elegant sleek customizable
slow boring complex uncustomizable
Kali cool elegant complex
Kubuntu sleek customizable slow
Debian simple boring
OpenSUSE speedy sleek uncustomizable
Mint simple boring uncustomizable
```

### Output

```
Kubuntu
4.5
```

### Explanation

`Kubuntu` contains $3$ `u`s, which makes it **very dank**, which increases its score from $0$ to $3$. As `sleek` and `customizable` are good features, its score further increases to $3 + 1 + 1 = 5$, but as `slow` is a bad feature its score decreases to $4.5$.

## Example 2

### Input

```
2
fast
slow
Arch fast
Manjaro fast
```

### Output

```
Arch
0.0
```

### Explanation

`Arch` and `Manjaro` both have undank distro names but are fast, resulting in a score of $-1 + 1 = 0$. Despite the tie in score, Arch came first, and is thus outputted.

## Example 3

### Input

```
2
cool
warm
Debian cool
Q4OS cool
```

### Output

```
Q4OS
2.0
```

### Explanation

`Q4OS` has a digit in its name, making it somewhat dank. Moreover, it is cool, resulting in a score of $2$ points.

## Model Solution

<details><summary>Click to reveal</summary>
<p>

This problem is a fairly straightforward implementation problem; one simply has to read the problem statement carefully.

```py
from collections import Counter
import math

n = int(input())
good_features, bad_features = set(input().split()), set(input().split())
max_name, max_score = "", -math.inf
for _ in range(n):
	name, *features = input().split()
	score = 0.0
	if any(count >= 3 for count in Counter(name).values()):
		# at least one character with >= 3 occurrences => very dank
		score += 3
	elif any(c.isdigit() for c in name):
		# at least one character is a digit => somewhat dank
		score += 1
	else:
		score -= 1
	for f in features:
		if f in good_features:
			score += 1
		else:
			score -= 0.5
	if score > max_score:
		max_name, max_score = name, score
print(max_name)
print(max_score)
```

To simplify (and speed up) the implementation, we use a couple of Python built-ins / features.

## Tuple unpacking

Each line of the input contains a distro name and then a list of features. If we want to handle the distro name and the list of features separately, we could write the following:

```py
parts = input().split() # "Kubuntu sleek customizable slow" => ["Kubuntu", "sleek", "customizable", "slow"]
name = parts[0] # "Kubuntu"
features = parts[1:] # ["sleek", "customizable", "slow"]
```

If you check the model solution above, though, that is not what is used. Instead, there is the following line:

```py
name, *features = input().split()
```

It turns out that this has essentially exactly the same effect as writing out the assignment manually, but is a lot more succinct.

This particular Python feature is called _iterable unpacking_, and can be useful in cases like the above once you get used to it.
Its name comes from the fact that it allows one to _unpack_ an iterable into individual variables;
for example, `a, b = [1, 2]` results in `a = 1` and `b = 2`.

To unpack an unknown number of values, one can use the wildcard `*`, which results in a list. For example:

```py
a, *b = [1, 2, 3, 4] # a = 1, b = [2, 3, 4]
```

## Sets

Sets are unordered collections of unique elements. In the model solution, we use them for keeping track of good and bad features.

They can be declared using the literal syntax `{a, b, c}` or using the `set()` function.

The main strength of sets is their very fast membership checks.
In other words, sets are fast at determining whether they include some element.

To demonstrate this, here is a quick benchmark comparing the performance of the `in` operator for sets and lists:

```py
>>> def in_test(iterable):
...     for i in range(1000):
...         if i in iterable:
...             pass
...
>>> from timeit import timeit
>>> timeit(
...     "in_test(iterable)",
...     setup="from __main__ import in_test; iterable = set(range(1000))",
...     number=10000)
0.5591847896575928
>>> timeit(
...     "in_test(iterable)",
...     setup="from __main__ import in_test; iterable = list(range(1000))",
...     number=10000)
50.18339991569519
```

_(taken from this [StackOverflow answer](https://stackoverflow.com/questions/2831212/python-sets-vs-lists/17945009#17945009))_

As you can see, `set` is essentially an order of magnitude faster than `list` when using `in`.

## `any()`

`any()`, as its name suggests, checks whether _any_ elements of a sequence satisfy some predicate.
To understand what this means, consider the expression:

```py
any(c.isdigit() for c in name)
```

You can probably guess what it does just by reading it (such is idiomatic Python), but if you can't, read it as "if any character in name is a digit".

It is equivalent to:

```py
any_digit = False
for c in name:
	if c.isdigit():
		any_digit = True
		break
```

...but evidently a lot shorter.

## `collections.Counter`

The last interesting part of the model solution is the usage of `collections.Counter` to determine whether any character occurs at least 3 times.

Though we will talk about it and more generally dictionaries in-depth in future meetings, in brief, a `Counter` allows one to track the number of occurrences of elements.

A self-explanatory example can be found in the Python documentation for it:

```py
>>> # Tally occurrences of words in a list
>>> cnt = Counter()
>>> for word in ['red', 'blue', 'red', 'green', 'blue', 'blue']:
...     cnt[word] += 1
>>> cnt
Counter({'blue': 3, 'red': 2, 'green': 1})
```

For more information, take a look at [this article](https://realpython.com/python-counter/) from Real Python.

</p>
</details>
