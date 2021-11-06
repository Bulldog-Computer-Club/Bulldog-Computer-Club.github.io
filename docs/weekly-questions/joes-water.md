---
title: Joe's Water Corporation
sidebar_position: 2
---

# Joe’s Doubling Points

Joe's Water Corporation is a company that sells bottled water. However, it has competition that also sells bottled water, sometimes at a cheaper price.

If your price is lower, then you get to sell at that store. If not, you lose the chance to sell your water at that store. In the case of a tie, the competition always wins.

You, as the manager of Joe's Water Corporation, can choose to lower the price of water for every single store you own by $M$ dollars. This could lead to higher revenue (if the discount results in your water being sold at more stores) or lower revenue (if the lower prices outweigh the higher number of locations the water is sold in.) You should print out `YES` if it makes you more revenue, or `NO` if it makes you less revenue / same revenue.

:::note

The revenue is defined as the sum of the prices at the stores at which your company sells water at a lower price than that of the competitor.

:::

### Input

- On the first line, a list of integers delimited by spaces, representing the prices at your stores.
- On the second line, a list of integers delimited by spaces, representing the prices at your competitor's stores.
- On the third line, an integer $M$ indicating a discount you can apply to the prices at your own stores.

The number of stores is guaranteed to be the same.

### Output

Output a single string denoting whether applying the discount would result in higher profits: either `YES` or `NO`.
If the profit does not change, output `NO`.

# Examples

## Example 1

### Input

```
3 4 6 2 5 6
4 2 2 3 6 5
2
```

### Output

```
NO
```

### Explanation

Originally, in the $1^{st}$, $4^{th}$, and $5^{th}$ we have strictly lower prices than our competitor.
Therefore our original profit is $3 + 2 + 5 = 10$ dollars.

By reducing the price by $2$, we get the following prices:

```
1 2 4 0 3 4
4 2 2 3 6 5
```

In the $1^{st}$, $4^{th}$, $5^{th}$ and $6^{th}$ stores we have strictly lower prices than our competitor.
Thus our profit after applying the discount is $1 + 0 + 3 + 4 = 8$ dollars.

As $8 <= 10$, applying the discount results in lower profit overall. Thus, the output is `NO`.

## Example 2

### Input

```
4 7 9 3
5 5 9 2
1
```

### Output

```
YES
```

### Explanation

Our original profit is $4$ dollars, as we only have lower prices than our competitor in the $1^{st}$ store.

By reducing the price by $1$, we get the following prices:

```
3 6 8 2
5 5 9 2
```

We have lower prices than our competitor in the $1^{st}$ and $3^{rd}$ stores. Thus our profit after applying the discount is $3 + 2 = 5$ dollars.
As $5 > 4$, the output is `YES`.

## Example 3

### Input

```
7
5
2
```

### Output

```
NO
```

### Explanation

There is only one store, where we have a higher price than our competitor. Thus we make $0$ profit in the beginning.
When we apply the discount, our price decreases to $5$. However, as our competitor wins in the case of a tie, we still make $0$ profit.
Therefore, as our profit did not change, the output is `NO`.
