//learing operator == vs ===
//create 4 avarible
let a9 = 5;
let b9 = 5;
let c9 = '5';
let d9 = 4;
console.log(a9==b9) //true
console.log(a9==c9) //true
console.log(a9==d9) //false
//=> toán tử == chỉ so sánh về mặt giá trị, nó không quan tâm đến kiểu dư liệu
//sử dụng ===
console.log(a9===b9) //true
console.log(a9===c9) //false
console.log(a9===d9) //false
//=> toán tử === so sánh về giá trị và cả về kiểu dữ liệu 
//note: khi so sánh nên sử dụng ===