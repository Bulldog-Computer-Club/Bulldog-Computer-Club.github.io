---
title: Vincent's Profitable Lemonade
# TODO: Change before merge if other question is used instead of this one for next meeting
sidebar_position: 2
---

:::warning

This is a harder problem meant for more advanced members; if you're just starting you may wish to look at another question.

:::

# Vincent's Profitable Lemonade

Last summer, Vincent spent several weeks selling some lemonade. This summer, Vincent wants to do the same, but as selling lemonade is hard work, following the time-honored tradition of programmers everywhere, he decided to automate it.

That is, this summer, Vincent has written a bot to sell lemonade for him! Each glass of lemonade nets $P$ dollars of profit for Vincent.

There are $N$ people who wish to purchase lemonade from Vincent. However, they don't necessarily just want to buy one glass of lemonade each; some of they wish to buy multiple glasses of lemonade. Moreover, being lazy people, they wish to have the lemonade delivered to them instead of having to retrieve it.

Hearing this, Vincent added the ability for his bot to deliver lemonade, but as he was in a rush the bot has a flaw: it can only travel $M$ kilometers before breaking down. Due to this, Vincent may not be able to sell lemonade to everyone.

As Vincent is a capitalist, he wishes to maximize his profits. You are to figure out, given a list of requests and the distances to the requesters, what the maximum profit is. Note that you cannot partially fulfill a request; if someone orders 7 glasses of lemonade you must either send them the full 7 glasses or nothing at all.

### Input

- The first line of input contains an integer $P$, the profit that Vincent makes from selling a single glass of lemonade.
- The second line of input contains an integer $N$, the number of orders there are.
- The third line of input contains an integer $M$, the maximum distance Vincent's bot can travel before it breaks down.
- The next $N$ lines of input each contain two integers $O_{i}$ and $D_{i}$ where $O_{i}$ is the number of glasses of lemonade the $i^{th}$ person ordered and $D_{i}$ is the distance the bot has to travel to deliver the lemonade to that person.

### Output

Output a single integer, indicating the maximum profit that Vincent can obtain.

# Examples

## Example 1

### Input

```
5
3
8
3 1
2 3
4 2
```

### Output

```
45
```

### Explanation

Vincent can fulfill all the orders (the total distance is $1 + 3 + 2 = 6$ and $6 <= 8$). Thus the maximum profit is $(3 + 2 + 4) * 5 = 45$.

## Example 2

### Input

```
1
4
3
6 1
7 3
8 2
10 2
```

### Output

```
16
```

### Explanation

This time, Vincent cannot fulfill all the orders (the total distance is $1 + 3 + 2 + 2 = 8$ and $8 > 3$).
By fulfilling the 1st and 4th offers, though, Vincent sells $10 + 6 = 16$ glasses of lemonade netting him $16 * 1 = 16$ dollars of profit.

## Example 3

### Input

```
17
2
5
9 7
5 6
```

### Output

```
0
```

### Explanation

Vincent cannot fulfill any of the orders.

## Example 4

### Input

```
3
3
5
10 5
9 4
8 1
```

### Output

```
51
```

### Explanation

Vincent can fulfill the 2nd and 3rd orders, which results in $(9 + 8) * 3 = 51$ dollars of profit.
