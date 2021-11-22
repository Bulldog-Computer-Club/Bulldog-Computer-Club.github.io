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
