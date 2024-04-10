[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

At the beginning of `fibr(n, arr)`, the value of `n` is always less than the `n` of the parent function call (i.e. the function call, a level of recursion above, which called itself). Since `n` is decreasing with each recursive call and our terminating base case is `n < 2`, this proves the function will terminate. Until the call of `fibr()` with `n < 2`, the `arr` will be empty. Once, the base case begins filling in the list and "trickles up" through the chain of recursive calls. Because the base case values are correct, and no other values can be calculated and placed in the array until those values have been entered, this helps prove the correctness of the algorithm. Each value is calculated using the previous two values in the array, which are guarenteed to be defined when computed.
