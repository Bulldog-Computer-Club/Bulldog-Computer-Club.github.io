---
title: Rotating Array
sidebar_position: 6
---

# Rotating Array

You are given a $N$ by $M$ two-dimensional array, and $K$ sets of instructions, which describe a set of rotations on the array.
You are to apply these rotations to the array and print out the result.

## Input Specification

- The first line will contain $N$ and $M$, the number of columns and rows in the array respectively.
- The next $N$ lines will each contain $M$ space-delimited integers, where the first line denotes the first row, the second denotes the second, and so on.
- The next line will contain an integer $K$, the number of instructions.
- The next $K$ lines will each contain two values: an angle $A_i$ in degrees to rotate the array by, and a string $D_i$ denoting the direction of rotation,
  where `cw` means clockwise, and `ccw` means counterclockwise.

  It is guaranteed that $A_i$ will be a multiple of $90$.

## Output Specification

Output each row of the rotated array on a separate line.

# Examples

## Example 1

### Input

```
3 3
1 2 3
4 5 6
7 8 9
5
90 cw
90 cw
180 ccw
270 ccw
90 cw
```

### Output

```
9 8 7
6 5 4
3 2 1
```

### Explanation

The array is rotated $180$ degrees clockwise, but then it is rotated back to its original state.
It is then rotated counterclockwise by $270$ degrees but is rotated back by $90$ degrees.
Thus it is rotated $180$ degrees in the end.

## Example 2

### Input

```
4 3
1 2 3 4
5 6 7 8
9 10 11 12
3
90 cw
90 cw
90 cw
```

### Output

```
4 8 12
3 7 11
2 6 10
1 5 9
```

## Example 3

### Input

```
1 1
205
3
90 cw
570 ccw
180 cw
```

### Output

```
205
```

## Example 4

### Input

```
4 2
5 4 3 2
1 6 7 8
1
90 cw
```

### Output

```
1 5
6 4
7 3
8 2
```

## Example 5

### Input

```
7 5
1 2 3 4 5 6 7
8 9 10 11 12 13 14
15 16 17 18 19 20 21
5 3 4 8 102 43 2
85 3 124 558 96 1 5
15
2025233010 cw
1816225740 ccw
2114686620 cw
1979507610 cw
1324526490 ccw
1294906950 ccw
1887788970 cw
1250661870 cw
1288339470 cw
2133116910 ccw
1843650090 ccw
2107287900 cw
1242288810 ccw
1637390790 ccw
1452006540 cw
```

### Output

```
85 5 15 8 1
3 3 16 9 2
124 4 17 10 3
558 8 18 11 4
96 102 19 12 5
1 43 20 13 6
5 2 21 14 7
```

### Explanation

If you are finding that your solution is taking a long time to run, you need to optimize your code.
The optimal solution for this problem outputs the answer for this test case instantly.

# Model Solution

<details><summary>Click to reveal</summary>
<p>

We begin by considering how to apply a $90\degree$ clockwise rotation to a matrix.

When dealing with transformations on matrices, it is often good to begin by considering an example matrix and seeing where different elements go:

$$
  \left[ {\begin{array}{cc}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
    7 & 8 & 9 \\
  \end{array} } \right]
$$

After rotating the above matrix $90\degree$ clockwise, we obtain:

$$
  \left[ {\begin{array}{cc}
    7 & 4 & 1 \\
    8 & 5 & 2 \\
    9 & 6 & 3 \\
  \end{array} } \right]
$$

Immediately, some patterns should become obvious just from looking at this.
In particular, we see that the first row has became the last column, the second row the second column, and the third row the first column.

Based on this insight, it is trivial to write a procedure that rotates an input matrix $90\degree$ clockwise:

```py
def rot90(matrix):
    m, n = len(matrix), len(matrix[0])
    rot = [[0] * m for _ in range(n)]
    for i in range(m):
        for j in range(n):
            rot[j][-i - 1] = matrix[i][j]
    return rot
```

**Lemma 1:** An arbitrary rotation on a matrix can be equivalently expressed as a repeated application of a $90\degree$ clockwise rotation.

**Proof:** The proof for this is trivial. Below we provide two representative examples:

- A clockwise rotation of $180\degree$ is equivalent to two $90\degree$ clockwise rotations.
- A counterclockwise rotation of $90\degree$ is equivalent to a clockwise rotation of $270\degree$ and is therefore equivalent to three $90\degree$ clockwise rotations.

---

**Lemma 2:** Rotating a matrix by $N\degree$ is equivalent to rotating it by $(N \mod 360)\degree$.

**Proof:** Trivial. An intuitive explanation is that rotating the matrix $360\degree$ has no effect, and thus any full rotations can be discarded.

---

Putting together this information we obtain the following solution:

```py
def rot90(matrix):
    m, n = len(matrix), len(matrix[0])
    rot = [[0] * m for _ in range(n)]
    for i in range(m):
        for j in range(n):
            rot[j][-i - 1] = matrix[i][j]
    return rot

n, m = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(m)]
k = int(input())
total_rots = 0
for _ in range(k):
    deg, typ = input().split()
    rots = (int(deg) // 90) % 360
    if typ == "ccw":
        rots = 4 - rots # 1 rotation counterclockwise = 3 rotations clockwise, and so on
    total_rots = (total_rots + rots) % 4

for _ in range(total_rots):
    matrix = rot90(matrix)
print("\n".join(" ".join(map(str, row)) for row in matrix))
```

**Time Complexity:** $O(K + NM)$ -- we process each rotation in $O(1)$ by deferring the actual rotations until the end. Since we operate on rotations modulo $4$, there are at most $3$ rotations to apply leading to $O(NM)$ work performing the actual rotations at the end.

</p>
</details>
