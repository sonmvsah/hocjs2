/**
 * Viết hàm truyền vào 2 chuỗi
 * trả về giá trị true nếu chuỗi này là đảo của chuỗi kia
 * trả về false nếu không phải
 * checkString('finder','friend') = true
 * checkString('finder','logo) = false
 */

function checkString(x, y) {
    a = x.toLowerCase();
    b = y.toLowerCase();
    var flag = false;
    if (a.length === b.length) {

        var c = a.split("");
        var d = b.split("");
        if (c.sort().join("") === d.sort().join("")) {
            flag = true;
        }
    }
    return flag;
}
console.log(checkString('finder', 'friend')); //true
console.log(checkString('finder', 'log')); //false
console.log(checkString('maivietosn', 'maiivteson')); //true