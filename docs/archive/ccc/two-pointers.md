---
title: Two-Pointers on Sorted Sequences
sidebar_position: 8
---

An introduction to the extremely useful _two-pointers_ technique.

# What is the two-pointers technique?

The general idea between the two-pointers technique is simple. You have two variables pointing to elements within a sequence which you move around. Typically, the task is to search for some elements / subsequence that match some criteria.

# Two-Pointers on sorted sequences

Perhaps the most simple application of two pointers is to search for a pair of elements within an array/list matching some criteria -- for example, finding two elements that have a given sum.

Let's begin by reviewing some basic properties of sorted sequences.

## Properties of sorted sequences

Generally, when we refer to sorted sequences, we are talking about sequences sorted in ascending order. That is, the first element is the smallest, the second the second smallest, and so on. Thus,

```
[1, 3, 6, 6] => sorted
[6, 6, 3, 1] => sorted in reverse
```

To formalize this definition, we could say that a sorted sequence is one where each element is not less than the previous one, with the exception of the first element.

Based on the definition we can identify two basic properties, which directly follow from the definition.

1. Given an element, the previous element either does not exist or has a value **not greater** than the current element.
2. Given an element, the next element either does not exist or has a value **not less** than the current element.

Though these two properties may seem quite basic (and, in truth, they are basic), combining them can result in elegant and efficient programs that are not necessarily trivial.

## Problem: Two-Sum

Given a sorted list of integers $X$ and an integer $K$, determine whether there is a pair of elements that sum up to $K$.

#### Example 1

```
X = [1, 3, 6, 6, 7, 9, 13, 22, 25]
K = 12
```

There are multiple pairs that sum up to $12$ in $X$. Here is one:

```
[1, 3, 6, 6, 7, 9, 13, 22, 25]
       ^  ^
6 + 6 = 12
```

and here is the other:

```
[1, 3, 6, 6, 7, 9, 13, 22, 25]
    ^           ^
3 + 9 = 12
```

#### Example 2

```
X = [12, 17, 18]
K = 6
```

There is no pair of integers in $X$ that sum up to $6$.

**Can you come up with an efficient solution to this problem?**

<details><summary>Approach 1: Brute Force</summary>
<p>

We can go through all pairs in $X$ and see if they sum up to $K$. For example, given

```
X = [1, 3, 6, 6, 7, 9, 13, 22, 25]
K = 12
```

we would visit the pairs in the following order:

```
[1, 3, 6, 6, 7, 9, 13, 22, 25]
 ^  ^
[1, 3, 6, 6, 7, 9, 13, 22, 25]
 ^     ^

...

[1, 3, 6, 6, 7, 9, 13, 22, 25]
 ^                          ^

[1, 3, 6, 6, 7, 9, 13, 22, 25]
    ^  ^

[1, 3, 6, 6, 7, 9, 13, 22, 25]
    ^     ^

[1, 3, 6, 6, 7, 9, 13, 22, 25]
    ^        ^

[1, 3, 6, 6, 7, 9, 13, 22, 25]
    ^           ^
```

**Code**

```py
def solve(X, k):
	for i in range(len(X)):
		for j in range(i + 1, len(X)):
			if X[i] + X[j] == k:
				return True
	return False
```

**Time & Space Complexity**

There are $n \choose 2$ distinct pairs in a sequence of length $n$, which is in $O(n^2)$. Thus our solution takes quadratic time.
As we only need a few integer values, the time complexity is $O(1)$.

This is the easiest approach, but as our analysis shows, it is not efficient for large inputs.
If we got a sequence of length $100,000$, for example, our code would spend a lot of time working before outputting an answer.

</p>
</details>

<details><summary>Approach 2: Hash Sets</summary>
<p>

Let's take a step back and look at the problem. We are looking for a pair of elements $(x, y)$ such that $x + y = K$.

We can rewrite this equation as $y = K - x$, which is clearly equivalent. The benefit of this form is that given a value $x$
we know that the value that completes the pair must be $K - x$.

Given this insight, we can consider a different approach: instead of going through all pairs, let's just go through all elements one by one.
Then, for each element, we can search for the value that completes the pair.

One way to do this is to maintain an auxiliary set of values that we have seen before. That is, after we go through an element, we add it to a set.
Then, instead of explicitly searching for a value that completes the pair, we can query the set.
This is much faster as sets are implemented using a data structure called hash tables, which provide constant time lookups on average.

**Code**

```py
def solve(X, k):
	seen = set()
	for x in X:
		if k - x in seen:
			return True # we currently have value x and we know that we've previously seen the value k - x; these add up to k.
		seen.add(x)
	return False
```

**Time & Space Complexity**

`set`s are implemented as hash tables which provide $O(1)$ lookups on average. Thus the time complexity is $O(n)$.

Sadly, to improve our time complexity, we had to use an auxiliary set of elements. In the worst case, `seen` will contain all the elements
in `X`, meaning that our time complexity is also $O(n)$.

</p>
</details>

## Solving Two-Sum using Two Pointers

Above, we went through two different approaches to solve this problem. The first had a time complexity of $O(n^2)$ and a space complexity of $O(1)$, while
the second had a time complexity of $O(n)$ and a space complexity of $O(n)$.

**Can we do better?**

It turns out... we can. And, as you probably expect, the key lies in using the two-pointers technique.

Let's jump straight into an example. Let's again consider the first sample case of

```
X = [1, 3, 6, 6, 7, 9, 13, 22, 25]
K = 12
```

This time, let's start with a pointer to the first element and the last element:

```
[1, 3, 6, 6, 7, 9, 13, 22, 25]
 ^                          ^
```

$1 + 25 = 26$, which is greater than $12$. To get closer to $12$, we need to **decrease the sum of the pair of elements**.
We can do that by moving the right pointer one position left.

**Claim 1:** Moving the right pointer leftward is guaranteed to either 1) have no effect on the sum or 2) decrease the sum.<br />
**Proof:** Refer back to the properties of sorted sequences discussed earlier. We state:

> Given an element, the previous element either does not exist or has a value not greater than the current element.

Therefore, moving the right pointer leftward yields a value that is not greater than the current value.

After moving the right pointer leftward, we have:

```
[1, 3, 6, 6, 7, 9, 13, 22, 25]
 ^                      ^
```

$1 + 22 = 23 > 12$. Still too large, so let's continue moving it leftward.

```
[1, 3, 6, 6, 7, 9, 13, 22, 25]
 ^                  ^
[1, 3, 6, 6, 7, 9, 13, 22, 25]
 ^              ^
```

Now we've got $1 + 9 = 10$. This is less than $12$. Can you think of what we need to do now?

Indeed -- we need to **increase the sum of the pair of elements**. Similarly, we can do this by moving the left pointer one position right.

**Claim 2:** Moving the left pointer rightward is guaranteed to either 1) have no effect on the sum or 2) increase the sum.<br />
**Proof:** Again, refer to the properties of sorted sequences.

After moving the left pointer rightward, we have:

```
[1, 3, 6, 6, 7, 9, 13, 22, 25]
    ^           ^
```

$3 + 9 = 12$, so we're done.

**Code**

```py
def solve(X, k):
	lo, hi = 0, len(X) - 1
	while lo < hi: # stop once the two pointers meet
		s = X[lo] + X[hi]
		if s > k:
			hi -= 1 # if the sum is too large, move right ptr
		elif s == k:
			return True
		else:
			lo += 1 # if the sum is too small, move left ptr
	return False
```

**Time & Space Complexity**

Observe that in each iteration of the `while` loop, either `hi` or `lo` moves closer to the other by one.
As they start $n$ positions apart, there can only be $n$ iterations until they cross (and the loop breaks.)

Thus, the time complexity is $O(n)$ while the space complexity is $O(1)$, which is better than both of the solutions above -- as promised.

### Question

What happens if $X$ is not sorted? Does this algorithm still work?

<details><summary>Click to reveal</summary>
<p>

No, this algorithm will not work without modifications. This is because the properties of a sorted sequence only hold on, well, a sorted sequence.

Here is an example on which the algorithm above fails to find an answer:

```
X = [4, 1, -1, 3, 4, 3]
K = 6
```

Here is a visualization of the movement of the pointers:

```
[4, 2, -1, 3, 4, 3]
 ^               ^
[4, 2, -1, 3, 4, 3]
 ^            ^
[4, 2, -1, 3, 4, 3]
 ^         ^
[4, 2, -1, 3, 4, 3]
 ^      ^
[4, 2, -1, 3, 4, 3]
    ^  ^
[4, 2, -1, 3, 4, 3]
   (loop breaks)
```

_However_, there is a simple way to make it work on unsorted sequences. Can you think of it?

<details><summary>Click to reveal</summary>

Sort the sequence between running the two pointers algorithm on it! :)

</details>

</p>
</details>

## Related Problem

[Advent of Code 2020 Day 1: Report Repair](https://adventofcode.com/2020/day/1).

Try solving this problem using the two-pointers technique described above.

:::note

As with all AoC questions, there are two parts to this problem; the first is the two-sum problem discussed previously, while the
second is a variant of it which does not ask for a pair of numbers but rather a triplet.

:::

# Generalizing Two-Pointers

It's not difficult to "generalize" the two-pointers technique to other problems -- as it's really as simple as having two pointers
which move around.

Here is a problem to mull over before next week's content.

Given a list (not necessarily sorted) of integers $X$, compute the length of the longest contiguous subsequence which is comprised of distinct elements.

## Example

```
X = [5, 4, 2, 3, 4, 6, 7, 8, 9, 9]
```

The longest sequence that meets the criteria given is the following:

```
[5, 4, 2, 3, 4, 6, 7, 8, 9, 9]
       ^                 ^
```

...which has length $7$.
