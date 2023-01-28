//sử dụng câu lệnh rẽ nhánh trong js
//if else
//tạo hàm run
/**
 * Khi a chia hết cho 3 thì return về 1
 * Khi a chia hết cho 5 thì return về 2
 * Khi a chia hết cho 15 thì return về 3
 */
function run(a) {
    if(a%3==0 && a%5!=0){
        return 1;
    } else if(a%5==0 && a%3!=0){
        return 2;
    }else if(a%3==0 && a%5==0){
        return 3;
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

//làm việc với switch case
function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}

//toán tử 3 ngôi
var course = {
    name: 'javascript',
    coin: 250
}
var result = course.coin > 0 ? `${course.coin} coin` : 'free';
console.log(result);
//tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.
function getCanVoteMessage(age){
    var result = age >=18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    return result;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'