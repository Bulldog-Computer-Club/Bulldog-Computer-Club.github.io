---
title: Joe's Water Corperation
sidebar_position: 2
---

# Joe’s Doubling Points

Joe's Water Corporation is a company that sells bottled water. However, it has competition that also sells bottled water, sometimes at a cheaper price.

If your price is lower, then you get to sell at that store. If not, you lose the chance to sell your water at that store. In the case of a tie, the competition always wins.

You, as the manager of Joe's Water Corporation, can choose to lower the price of water for every single store you own by $M$ dollars. This could lead to higher revenue (if the discount results in your water being sold at more stores) or lower revenue (if the lower prices outweigh the higher number of locations the water is sold in.) You should print out `YES` if it makes you more revenue, or `NO` if it makes you less revenue / same revenue.

:::note

The revenue is defined as the sum of the prices at the stores at which your company sells water at a lower price than that of the competitor.

::::

### Input

- On the first line, a list of integers delimited by spaces, representing the prices at your stores.
- On the second line, a list of integers delimited by spaces, representing the prices at your competitor's stores.
- On the third line, an integer $M$ indicating a discount you can apply to the prices at your own stores.

### Output

Output a single string denoting whether applying the discount would result in higher profits: either `YES` or `NO`.

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

:::note

`X`s indicate that you cannot sell at the given location, due to your prices being higher than that of the competitor's.

:::

```
3 X X 2 5 X = 10 total revenue
4 2 2 3 6 5
```

by reducing the price by $2$, we get

```
1 X X 0 3 4 = 8 total revenue
X 2 2 X X X
```

As $8 <= 10$, applying the discount results in lower profit overall. Thus, the output is `NO`.

## TODO

- Add another example
- Model Solution
- Fix wording
