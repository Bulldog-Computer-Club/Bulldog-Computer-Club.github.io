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

- On the first line, a list of integers delimited by spaces, representing the prices you set for each store.
- On the second line, a list of integers delimited by spaces, representing the prices the manager of Eo's Dihydrogen Monoxide Syndicate set for each store.
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


## Model Solution 

<details><summary>Click to reveal</summary>
<p>

```py
joes_prices = input().split(' ')
competitions_prices = input().split(' ')
discount = int(input())

original_profit = 0
discounted_profit = 0

for i in range(len(joes_prices)):
    cur_joe_price = int(joes_prices[i])
    cur_competitor_price = int(competitions_prices[i])
    # These conditionals check for 
    if cur_joe_price < cur_competitor_price:
        original_profit += cur_joe_price
    if cur_joe_price - discount < cur_competitor_price:
        discounted_profit += cur_joe_price - discount

print('YES' if discounted_profit > original_profit else 'NO')
```
### Step-by-step tutorial

Let's begin by reading in the input.
```py
joes_prices = input().split(' ')
competitions_prices = input().split(' ')
discount = int(input())
```
    
:::tip

Since each number in a row of input is delimited by a single space, we can use `.split(' ')` to create a new list that separates all of them by spaces.

:::

```py 
discount = int(input())
 ```

Since we need `discount` to make calculations, we'll need to parse it into an integer. For everything else, we'll parse it later in the loop.

```py 
original_profit = 0
discounted_profit = 0
```

Here are the counts for the profit made without the discount applied and the profit made with it applied. This will allow us to compare the original profit to the discounted profit once we're done our calculations.

```py
for i in range(len(joes_prices)):
    cur_joe_price = int(joes_prices[i])
    cur_competitor_price = int(competitions_prices[i])
```

For each iteration, we'll need to store both Joe's and the competitor's price and
parse them into integers in order to make comparisons below:

```py
    if cur_joe_price < cur_competitor_price:
        original_profit += cur_joe_price
    if cur_joe_price - discount < cur_competitor_price:
        discounted_profit += cur_joe_price - discount
```

The first conditional checks **whether or not Joe's price without the discount applied
is less than the competitor's price**; if so, it counts as profit made without the discount applied to `original_profit`. Then, **if the difference of Joe's price and the discount is lower than the competitor's price**, we'll count that towards the `discounted_profit`.
 
```py 
print("YES" if discounted_profit > original_profit else "NO")
```

Finally, after we've compared their prices with and without Joe's discount applied,
we can see whether or not it made a difference. 

:::tip
    
```if discounted_profit > original_profit else``` is a tenerary if statement, allowing
simple conditionals to be more concise or "elegant", if you're into that.

Compare this to if we wrote it normally:
```
if discounted_profit > original_profit:
    print('YES')
else:
    print('NO')
```
    
:::

</p>
</details>
