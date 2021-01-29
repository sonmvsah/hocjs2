/**
 * Bài đếm số nguyên âm trong chuõi
 * Viết 1 function nhận vào 1 String, trả về số lượng nguyên âm có trong String
 */

function checkNguyenAm(str) {
    var strReplaced = str.replace(/é|è|ẽ|ẻ|ẹ|ê|ế|ễ|ề|ệ/gi, "e")
        .replace(/ó|ò|ỏ|õ|ọ|ơ|ớ|ở|ỡ|ợ|ờ|ô|ố|ồ|ổ|ỗ|ộ/gi, "o")
        .replace(/ù|ú|ũ|ủ|ụ|ư|ứ|ử|ừ|ữ|ự/gi, 'u')
        .replace(/á|à|ả|ã|ạ|ă|ắ|ẵ|ặ|ằ|â|ấ|ầ|ậ|ẩ|ẫ/gi, 'a')
        .replace(/í|ì|ĩ|ị|ỉ/gi, 'i');
    var newString = strReplaced.toLowerCase();
    var NA = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (var i in newString) {
        if (NA.indexOf(newString[i]) != -1) {
            count = count + 1;
        }
    }
    return count;
}
console.log(checkNguyenAm("Mai Việt SƠn")); // output: 5
console.log(checkNguyenAm("Nguyễn Hồng lÊ Hoàng TrâN Bùi Xuân hít")); // output: 12