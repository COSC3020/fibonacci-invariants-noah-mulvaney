// COSC3020 Fibonacci Invariants
// Noah Mulvaney
// 5 Apr 2024

function fibr(n, arr) {
    if (n < 2) {
        arr[0] = 0;
        if (n == 1) arr[1] = 1;
        return n;
    }
    
    arr[n] = fibr(n - 1, arr) + fibr(n - 2, arr);
    return arr[n];
}

function fib(n) {
    let arr = [];
    fibr(n, arr);
    return arr;
}

/* Debug code
for (let i = 0; i < 10; ++i)
    console.log(fib(i));
*/
