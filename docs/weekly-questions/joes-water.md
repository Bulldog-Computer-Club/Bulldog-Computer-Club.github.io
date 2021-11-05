---
title: Joe's Water Corperation
sidebar_position: 2
---

# Joe’s Doubling Points

Joe's Water Corporation is a company that sells bottled water. However, he has competition that also sells bottled water, sometimes at a cheaper price.

If your price is lower, then you get to sell at that store. If not, you lose the chance to sell your water at that store. In the case of a tie, the competition always wins.

You, as the manager of Joe's Water Corporation, can choose to lower the price of water for every single store by M dollars. You should print out 'YES' if it makes you more revenue, or 'NO' if it makes you less revenue. (revenue = sum of prices at stores sold)

### Input

- Int K All the prices at joe's store
- Int N All the prices at the competition's store
- Int M Price to be discounted by

### Output

A string either 'YES' or 'NO'

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

The 'X's mean the store cannot sell

```
3 X X 2 5 X = 10 total revenue
4 2 2 3 6 5
```

by reducing the price by $2$, we get

```
1 X X 0 3 4 = 8 total revenue
X 2 2 X X X
```

8 is smaller than 10 so we dont lower the price, and return 'NO'

## TODO

- Add another example
- Model Solution
- Fix wording
