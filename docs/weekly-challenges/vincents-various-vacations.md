---
title: Vincent's Various Vacations
position: 3
---

# Vincent's Various Vacations

Vincent has recently retired from the position of Supreme Leader of the Bulldog Computer Club after 80 long years of hard work and dedication.

During this time, he has accumulated a large amount of cash, and now wishes to spend his remaining days traveling.
Every month, he plans to visit a number of cities around the world.

As he wishes to visit as many cities as he can, Vincent does not want to visit any city more than once in a single month. (Visiting the same city in different months is still acceptable.)

However, Vincent is growing forgetful with old age, and has therefore enlisted your assistance.
Given his travel plan for each month, help Vincent determine the total number of cities he visits more than once in a single month.

## Input Specification

The first line contains a single integer $N$ indicating the number of months Vincent will travel for.

Each of the next $N$ lines contain an integer $M_i$, corresponding to the number of cities Vincent visits during month $i$, followed by $M_i$ spaced-separated city names.
City names will be no longer than $20$ characters in length and will consist of lowercase alphabet characters.

## Output Specification

The output will be one line, containing an integer $K$, which is the total number of cities he visits more than once in a single month.

## Sample Data

### Sample Input 1

```
2
2 vancouver beijing
3 washington vancouver washington
```

### Sample Output 1

```
1
```

### Explanation for Sample Output 1

In the first month, Vincent visits `vancouver` and `beijing`, which are two different cities.

In the second month, Vincent visits `washington`, `vancouver`, and `washington` again; `washington` is duplicated.

Note that though Vincent visits `vancouver` in both month $1$ and month $2$, he does not visit it more than once in a single month.

### Sample Input 2

```
4
5 montreal ottawa montreal edmonton montreal
1 calgary
10 cairo dallas madrid guelph london dallas chicago barcelona dallas barcelona
2 montreal calgary
```

### Sample Output 2

```
3
```

### Explanation for Sample Output 2

Vincent visits `montreal` twice in the first month, `dallas` thrice in the third month, and `barcelona` twice in the third month as well.
