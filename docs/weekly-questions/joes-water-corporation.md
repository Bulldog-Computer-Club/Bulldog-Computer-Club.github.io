---
title: Joe's Water Corporation
sidebar_position: 2
---

# Joe’s Water Corporation

Joe's Water Corporation is a company that sells bottled water. However, it has competition that also sells bottled water, sometimes at a cheaper price.

If your price is lower, then you get to sell at that store. If not, you lose the chance to sell your water at that store. In the case of a tie, the competition always wins.

You, as the manager of Joe's Water Corporation, can choose to lower the price of water for every single store you own by $M$ dollars. This could lead to higher revenue (if the discount results in your water being sold at more stores) or lower revenue (if the lower prices outweigh the higher number of locations the water is sold in.) You should print out `YES` if it makes you more revenue, or `NO` if it makes you less revenue / same revenue.

:::note

The revenue is defined as the sum of the prices at the stores at which your company sells water at a lower price than that of the competitor.

:::

### Input

- On the first line, a list of integers delimited by spaces, representing the prices you set for each store.
- On the second line, a list of integers delimited by spaces, representing the prices the competing company set for each store.
- On the third line, an integer $M$ indicating a discount you can apply to all your prices.

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

Originally, in the $1^{st}$, $4^{th}$, and $5^{th}$ stores we have strictly lower prices than our competitor.
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

We have lower prices than our competitor in the $1^{st}$ and $3^{rd}$ stores. Thus our profit after applying the discount is $3 + 8 = 11$ dollars.
As $11 > 4$, the output is `YES`.

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

<!--
## Model Solution

<details><summary>Click to reveal</summary>
<p>

```py
def compute_total_profit(prices, competitors_prices):
    return sum(
        price
        for price, competitors_price in zip(prices, competitors_prices)
        if price < competitors_price
    )

prices = list(map(int, input().split()))
competitors_prices = list(map(int, input().split()))
discount = int(input())

original_profit = compute_total_profit(prices, competitors_prices)
prices = [price - discount for price in prices]
after_discount_applied = compute_total_profit(prices, competitors_prices)

print("YES" if after_discount_applied > original_profit else "NO")
```

### Step-by-step tutorial

Let's begin by reading in the input.

```py
prices = map(int, input().split())
competitors_prices = map(int, input().split())
discount = int(input())
```

:::tip

If you are confused about how `map` is being used above, take a look at the model solution for [Joe's Doubling Points](joes-doubling-points#model-solution)!

:::

Now, we need to calculate the original profit.

#### Calculating the profit

We can sell our water at a store if our price is strictly less than that of the competitor.

Based on this information we can write a procedure `compute_total_profit(prices, competitors_prices)` that calculates the total profit we can make given our prices and our competitors' prices:

```py
def compute_total_profit(prices, competitors_prices):
	profit = 0
	for i in range(len(prices)):
		if prices[i] < competitors_prices[i]:
			profit += prices[i]
	return profit
```

:::tip

We can write this more compactly using the `zip` built-in, which allows one to loop in parallel over several lists.
For more information, take a look at [this article on `zip`](https://realpython.com/python-zip-function/) from Real Python.

```py
def compute_total_profit(prices, competitors_prices):
	profit = 0
	for price, competitors_price in zip(prices, competitors_prices):
		if price < competitors_price:
			profit += price
	return profit
```

We can write this _even more compactly_ using the `sum` built-in and a generator comprehension.
Again, for more explanation, refer to [this article on the aforementioned topic](https://realpython.com/list-comprehension-python/) from Real Python.

```py
def compute_total_profit(prices, competitors_prices):
    return sum(
        price
        for price, competitors_price in zip(prices, competitors_prices)
        if price < competitors_price
    )
```

:::

---

If `compute_total_profit` is properly defined, then we can simply write:

```py
original_profit = compute_total_profit(prices, competitors_prices)
```

Now we need to get the profit after the discount is applied. First, apply the discount:

```py
for i in range(len(prices)):
	prices[i] -= discount
```

:::tip

We can again write this more compactly using a list comprehension.

```py
prices = [price - discount for price in prices]
```

:::

Now, we can compute the profit after the discount is applied.

```py
after_discount_applied = compute_total_profit(prices, competitors_prices)
```

Finally, we can use a conditional statement to output the answer.

```py
print("YES" if after_discount_applied > original_profit else "NO")
```

</p>
</details>
-->
