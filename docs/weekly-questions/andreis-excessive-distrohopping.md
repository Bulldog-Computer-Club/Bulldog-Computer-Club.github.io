---
title: Andrei's Excessive Distrohopping
sidebar_position: 3
---

# Andrei's Excessive Distrohopping

As a Linux user, Andrei enjoys trying out new distros regularly. After trying out a new distro, Andrei gives it a rating.

Andrei's rating of a distro depends on two things: the number of key features that he likes and the dankness of its name. For example, Andrei might find a distro to be _simple_ (good) yet _slow_ (bad). Good features increase the distro's rating by $1$ point, while bad ones decrease it by $0.5$ points.

To determine the dankness of a distro's name, Andrei uses the following criteria, in order.

1. If there are at least 3 occurrences of the same letter in the distro name, it is **very dank**, which increases the distro's rating by $3$ points.
2. If the distro name contains a digit (`0-9`), it is **somewhat dank**, which increases the distro's rating by $1$ point.
3. Otherwise, it is **undank**, which decreases the distro's rating by $1$ point.

Write a program to determine Andrei's highest rated distro and its rating.

### Input Specification

- The first line of input is an integer $N$ denoting the number of distros Andrei has tried.
- The second line of input contains a list of features Andrei deems good, separated by spaces. Features are guaranteed to be lowercase strings, each under $80$ characters.
- The third line of input contains a list of features Andrei deems bad, separated by spaces.
- The next $N$ lines of input each contain a distro name, then a list of features, separated by spaces. Distro names are guaranteed to be strings under $80$ characters, not containing spaces.

### Output Specification

The output will consist of two lines.

- On the first line, output the name of the distro that has the highest rating according to Andrei. If there is a tie, output the distro that appeared first.
- On the second line, output the rating of the highest-rated distro.

# Examples

## Example 1

### Input

```
5
speedy simple cool elegant sleek customizable
slow boring complex uncustomizable
Kali cool elegant complex
Kubuntu sleek customizable slow
Debian simple boring
OpenSUSE speedy sleek uncustomizable
Mint simple boring uncustomizable
```

### Output

```
Kubuntu
4.5
```

### Explanation

`Kubuntu` contains $3$ `u`s, which makes it **very dank**, which increases its score from $0$ to $3$. As `sleek` and `customizable` are good features, its score further increases to $3 + 1 + 1 = 5$, but as `slow` is a bad feature its score decreases to $4.5$.

## Example 2

### Input

```
2
fast
slow
Arch fast
Manjaro fast
```

### Output

```
Arch
0.0
```

### Explanation

`Arch` and `Manjaro` both have undank distro names but are fast, resulting in a score of $-1 + 1 = 0$. Despite the tie in score, Arch came first, and is thus outputted.

## Example 3

### Input

```
2
cool
warm
Debian cool
Q4OS cool
```

### Output

```
Q4OS
2.0
```

### Explanation

`Q4OS` has a digit in its name, making it somewhat dank. Moreover, it is cool, resulting in a score of $2$ points.
