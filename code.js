// COSC3020 Fibonacci Invariants
// Noah Mulvaney
// 5 Apr 2024

function fibr(n, arr) {
    if (n <= 0) {
        arr[0] = 0;
        return 0;
    }
    
    if (n <= 2) {
        arr[n] = 1;
        return 1;
    }
    
    arr[n] = fibr(n - 1, arr) + fibr(n - 2, arr);
    return arr[n];
}

function fib(n) {
    return fibr(n, []);
}

/* Debug Code
for (let i = 0; i < 10; ++i)
    console.log(fib(i));
*/
