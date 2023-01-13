---
title: Childish Calendar Condition
position: 1
---

# Childish Calendar Condition

It is well known that $2$ is the best number. Thus, the folks running the Cooldog Computer Club have decided to only run meetings on dates where the sum of the month and the day of month is a multiple of $2$.

## Input Specification

The input consists of two lines.

- The first line contains an integer $M$, representing the month number.
- The second line contains an integer $N$, representing the day of month.

## Output Specification

Output `YES` if the Cooldog Computer Club might run a meeting on this date. Otherwise, output `NO`.

## Sample Data

### Sample Input 1

```
1
5
```

### Sample Output 1

```
YES
```

### Explanation of Output for Sample Input 1

The sum of the month and the day of month is $1 + 5 = 6$, which is a multiple of $2$.

### Sample Input 2

```
11
30
```

### Sample Output 2

```
NO
```

### Explanation of Output for Sample Input 1

$11 + 30 = 41$ is not a multiple of $2$.
