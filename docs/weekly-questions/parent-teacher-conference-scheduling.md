---
title: Parent-Teacher Conference Scheduling
sidebar_position: 5
---

# Parent-Teacher Conference Scheduling

Recently, the students of Sir Winston Churchill Secondary have been signing up for parent-teacher conferences. When signing up, students provide a _preferred start time_ for their conference, in addition to a _duration_ in minutes. End times are inclusive, so if the start time was $5$ minutes after midnight and the duration was $6$ the conference would still be going on at minute $11$.

You are to write a program that processes sign-ups. More specifically, given a list of sign-up information in chronological order, you should determine, for each sign-up, whether it conflicts with a previously successfully processed sign-up.

## Input Specification

- The first line will contain an integer $N$, denoting the number of sign-ups to process.
- The next $N$ lines will each contain an integer $T_i$ indicating the start time of the conference as minutes since midnight and an integer $D_i$ indicating the duration of the conference in minutes.

## Output Specification

Output $N$ lines, where each line corresponds to a sign-up in the order that they were given. Each line should contain either `GOOD`, if the corresponding sign-up does not conflict with any conference scheduled previously, or `BAD` otherwise.

# Examples

## Example 1

### Input

```
1
1 2
```

### Output

```
GOOD
```

### Explanation

There is only one conference scheduled.

## Example 2

### Input

```
2
1 5
2 4
```

### Output

```
GOOD
BAD
```

### Explanation

The first conferences runs from minute $1$ to $6$, while the second runs from $2$ to $6$, which conflicts with the first.

## Example 3

### Input

```
3
34 7
1 2
2 35
```

### Output

```
GOOD
GOOD
BAD
```

### Explanation

The first conference runs from minute $34$ to $41$. The second runs from minute $1$ to $2$. Finally, the third runs from $2$ to $35$. However, minute $2$ is reserved for the second conference.

## Example 4

### Input

```
4
1 4
2 1
2 7
6 1
```

### Output

```
GOOD
BAD
BAD
GOOD
```

### Explanation

The first conference runs from minute $1$ to $5$. The second runs from minute $2$ to $3$, and thus conflicts with the first. The third runs from minute $2$ to $9$, and also conflicts with the first. The last one runs from minute $6$ to $7$ which does not conflict with any successfully processed sign-up. Note that as the second and third sign-ups conflicted with the first they are not considered processed.

## Example 5

### Input

```
3
1 1
2 1
2 2
```

### Output

```
GOOD
BAD
BAD
```

## Example 6

### Input

```
8
7 6
1 2
10 15
18 6
24 3
33 1
13 3
5 3
```

### Output

```
GOOD
GOOD
BAD
GOOD
BAD
GOOD
BAD
BAD
```
