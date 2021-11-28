---
title: Lists, Stacks, and Queues
sidebar_position: 6
---

An overview of three common data structures.

## Lists

Lists are ordered collections of values. Accessing and writing to elements by their position is very fast ($O(1)$), as is appending elements (amortized $O(1)$). However, deleting elements takes more time -- to delete the $k^{th}$ element from the end, $k - 1$ elements need to be moved.

For example, to delete an element from the beginning of a list, all the elements have to be moved down.
Consider removing the `1` from `[1, 2, 3, 4, 5]` -- the `2` has to be shifted down to the place that the `1` used to be, the `3` has to be shifted down to the place that the `2` used to be, and so on.

If deletion from the beginning of the list is an operation you plan on performing often, lists are likely **the wrong collection type**. However, in most other cases lists should be the first collection type you reach for as they are extremely versatile.

### List Usage Example

```py
fruits = ["banana", "pineapple", "apple"] # declare a list using []
fruits.append("grape") # add an element to the back using append()
# now fruits = ["banana", "pineapple", "apple", "grape"]

last_fruit = fruits.pop() # remove and return the last element in the list; in this case last_fruit = "grape"
# now fruits = ["banana", "pineapple", "apple"] again

print(fruits[0]) # use [] to index into a list; 0 refers to the first element, 1 to the second element, etc.
print(fruits[-1]) # negative indices are supported as well: -N refers to the Nth element from the back of the list: -1 refers to the last element, -2 to the second last, etc.

# loop over the list using `for item in list`
for fruit in fruits:
	print(fruit)
```

## Stacks

Stacks are collections of values that allow you to **retrieve and remove the last element added** and **add a new element to the end**.

In Python, a stack can be implemented efficiently via a list:

- `list.append` operation adds an element to the end;
- `list[-1]` retrieves the last element added;
- `list.pop()` removes and returns the last element addded.

```py
stack = []
stack.append(1)
stack.append(2)
assert stack[-1] == 2 # last element added was 2
stack.pop() # remove 2
assert stack[-1] == 1 # now the last element is 1
```

### Exercise 1

Solve the "balanced brackets" problem using a stack.

More formally, given a string with round `()`, curly `{}` and square `[]` brackets, determine whether all brackets are balanced.
In other words, ensure that all open brackets have a matching close bracket in the proper position.

**Balanced:**

```
([])
(([[{{}}]]))
[]{}()
[[{}]()]
```

**Unbalanced:**

```
[{]}
[[[]]
(){{})
```

<details><summary>Solution</summary>
<p>

We can go through the string character-by-character, maintaining a stack of open brackets that we have seen. Upon seeing a close bracket,
we check whether the last open bracket we saw matches it. If so, pop the stack; otherwise, we know that the brackets are not balanced.

At the end of iteration, if the stack is not empty, the brackets are also unbalanced (as there were more open brackets than close).

```py
def is_balanced(s):
	stack = []
	for c in s:
		if c in ("(", "[", "{"):
			stack.append(c)
		else:
			if not stack:
				return False
			open_bracket = stack.pop()
			if (
				(open_bracket == "(" and c != ")") or
				(open_bracket == "[" and c != "]") or
				(open_bracket == "{" and c != "}")
			):
				return False
	return not stack

s = input()
print(is_balanced(s))
```

</p>
</details>

### Exercise 2

Solve [CCC '15 S1 - Zero that Out](https://dmoj.ca/problem/ccc15s1) using a stack.

## Queues

Queues are collections of values that allow you to **retrieve and remove the first element added** and **add a new element to the end**.

They can be a bit more confusing to grasp than stacks, so here is an example to help you understand.

```py
queue = Queue()
queue.push(1) # queue = [1]
queue.push(2) # queue = [1, 2]
queue.push(3) # queue = [1, 2, 3]
front = queue.pop() # front = 1, queue = [2, 3]
next_front = queue.pop() # next_front = 2, queue = [3]
```

In other words, queues support adding elements to the end and removing elements from the front.

Unfortunately, queues cannot be implemented efficiently using lists in Python as removing an element from the front of a list requires shifting all the elements after it forward, as discussed previously. However, in the `collections` module there is a `deque` class which can be used as a queue:

```py
import collections

queue = collections.deque([1, 2, 3])
queue.append(4)
queue.append(5)
queue.popleft() # 1 (the first element); queue = [2, 3, 4, 5]
queue.popleft() # 2 (the new first element); queue = [3, 4, 5]
```
