/**
 * Dãy fibonacci 
 * Nhập vào số n, trả về giá trị n trong dãy Fibonacci
 *  --> 0 1 1 2 3 5 8....
 *      | | | | | | |
 *      . . . . . . . 
 *      0 1 2 3 4 5 6
 * fib(3) = 2
 * fib(5) = 5
 */

function fib(n) {
    var arrFib = [0, 1];
    for (var i = 2; i <= n; i++) {
        arrFib[i] = (arrFib[i - 1] + arrFib[i - 2]);
    }
    return arrFib[n];
}
console.log(fib(3)); // ouput = 2
console.log(fib(5)); // ouput = 5
/**
 * Đây có thể ko phải là cách làm hay nhưng là 2 cách có thể sử dụng cơ bản dễ hiểu.
 */