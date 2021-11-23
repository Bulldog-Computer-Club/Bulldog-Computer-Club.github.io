---
title: Repeated String Transformation
sidebar_position: 4
---

# Repeated String Transformation

A character-to-character mapping defines a transformation from a character $c_1$ to a character $c_2$.
For example, $a \to b$ denotes that the character $a$ should be transformed to the character $b$.
Note that transformations are directed: $a \to b$ is different from $b \to a$.

A transformation $c_1 \to c_2$ can be applied to a string, which results in a new string where all $c_1$s are replaced
with $c_2$s. For example, applying the transformation $h \to c$ to `hello world` results in `cello world`.

Given a set of transformations, repeatedly apply them to a string $S$ until it is no longer possible to apply any more transformations.

For example, if we have two transformations $\{h \to c, c \to b\}$, the output for `hello world` should be `bello world`:
the first `h` becomes `c` which then turns into a `b`.

It is guaranteed that the set of transformations will not contain a cycle, direct or indirect (i.e. $\{a \to b, b \to a\}$).

## Input Specification

- The first line will contain an integer $T$, denoting the number of transformations.
- The next $T$ lines will each contain two lowercase characters $c_1$ and $c_2$, denoting a character-to-character mapping from $c_1$ to $c_2$.
- The final line will contain a string $S$, which is guaranteed to only contain lowercase characters.

## Output Specification

Output the result of repeatedly applying the set of transformations to $S$.

# Examples

## Example 1

### Input

```
5
a b
b c
c d
d e
e f
abcdefg
```

### Output

```
ffffffg
```

### Explanation

The set of transformations looks like a chain, as follows:

$$
a \to b \to c \to d \to e \to f
$$

It is clear that all of the characters along the chain will be transformed to `f`.
Thus, `a`, `b`, `c`, `d`, `e`, and `f` all become `f`. The final `g` is left as is.

## Example 2

### Input

```
2
h f
f k
hiss
```

### Output

```
kiss
```

### Explanation

The $h$ turns into a $f$ which then turns into a $k$.

## Example 3

### Input

```
2
c a
b c
b
```

### Output

```
a
```

## Example 4

### Input

```
2
a c
b a
bbbb
```

### Output

```
cccc
```

# Model Solutions

**Note:** Weak test data caused several unintended solutions (which should not have passed) to get through. (Those who solved the problem at our meeting will get points regardless of the correctness of their solution this week.) We apologize for the confusion!

<details><summary>Solution 1: Brute Force</summary>
<p>

## Intuition

Just do as the problem states: apply each transformation repeatedly in a loop, until none of the transformations have any effect.

## Code

```py
t = int(input())
transformations = []
for _ in range(t):
	a, b = input().split()
	transformations.append((a, b))

s = input()
while True:
	changed = False
	for a, b in transformations:
		replaced = s.replace(a, b)
		if s != replaced:
			changed = True
		s = replaced
	if not changed:
		break
print(s)
```

## Implementation Details

`changed` keeps track of whether any transformation has resulted in the string changing in the current iteration. To replace the characters, we use [`str.replace`](https://docs.python.org/3/library/stdtypes.html#str.replace).

## Example

```
2
h f
f k
hiss
```

1. First iteration.
   1. Apply the first transformation, $h \to f$, resulting in `fiss`.
   2. Apply the second transformation, $f \to k$, resulting in `kiss`.
   3. As the string changed, the loop continues.
2. Second iteration.
   1. Apply the first transformation, $h \to f$. No effect.
   2. Apply the second transformation, $f \to k$. No effect.
   3. As the string did not change, break the loop.
3. Output `kiss`.

## Time Complexity

About $O(|Z|tn)$ where $Z$ is the alphabet. Each iteration of the `while` loop attempts to apply all $t$ transformations on the string of length $n$. Thus the time complexity of each iteration is $O(tn)$.
The number of iterations is probably correlated to the size of the alphabet, but I don't have a formal proof.

</p>
</details>

<details><summary>Solution 2: Hash Tables</summary>

## Intuition

The key insight here is to apply transformations character-by-character rather than on complete strings. That is, to obtain the transformed string for $S$, go through each character of $S$ and find the character that it resolves to rather than transforming all of $S$ at once.

We can do this with a dictionary that maps a character $c$ to what character it resolves to. For example, given the following input:

```
5
a b
b c
c d
d e
e f
abcdefg
```

We would have the following dictionary:

```py
{
	"a": "b",
	"b": "c",
	"c": "d",
	"d": "e",
	"e": "f",
}
```

To look up what a character resolves to, it suffices to look it up in the dictionary repeatedly as long as there is an entry for it. For example, to resolve the character $a$, we perform the following steps:

1. Check if there is an entry for $a$.
   1. Yes; so set the current character to $b$ and continue.
2. Check if there is an entry for $b$.
   1. Yes; so set the current character to $c$ and continue.
3. Check if there is an entry for $c$.
   1. Yes; so set the current character to $d$ and continue.
4. Check if there is an entry for $d$.
   1. Yes; so set the current character to $e$ and continue.
5. Check if there is an entry for $e$.
   1. Yes; so set the current character to $f$ and continue.
6. Check if there is an entry for $f$.
   1. No; so stop here.

This eventually resolves to $f$, which indicates that $a$ should become $f$ which is correct.

## Code

```py
resolves_to = {}
t = int(input())
for _ in range(t):
	a, b = input().split()
	resolves_to[a] = b

s = input()
output = []
for c in s:
	while c in resolves_to:
		c = resolves_to[c]
	output.append(c)
print("".join(output))
```

## Time Complexity

$O(|Z|n)$. Consider the following loop:

```py
while c in resolves_to:
	c = resolves_to[c]
```

At worst this runs $|Z|$ times.
First, observe that as there are no loops, $c$ changes each iteration.
$Z$ is the alphabet, there are $|Z|$ possible characters, so `resolves_to` can have at max $|Z|$ keys.
Thus the loop has a maximum number of $|Z|$ iterations.

As there are $n$ iterations where $O(|Z|)$ work is being done in each, the overall time complexity is $O(|Z|n)$.

</details>
