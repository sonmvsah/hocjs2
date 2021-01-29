/**
 * FizzBuzz
 * Truyền vào parameter là 1 số nguyên n
 * chạy vòng lặp từ 1 đến n
 * Log ra Fizz nếu là bội của 3
 * log ra Buzz nếu là bội của 5
 * Lốc ra FizzBuzz nếu là bội của cả 3 và 5
 * 
 */

function fizzBuzz(n) {
    for (var i = 1; i <= n; ++i) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        }
        if (i % 3 !== 0 && i % 5 === 0) {
            console.log("Buzz");
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        if (i % 3 !== 0 && i % 5 !== 0) {
            console.log(i);
        }
    }

}

fizzBuzz(50);