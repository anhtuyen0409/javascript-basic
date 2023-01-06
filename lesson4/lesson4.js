let s = "hello guys, welcome to my js program";
console.log(4 + 5 + 's')
console.log(4 + 5 + s)
console.log('4' + '5' + s)
let x = "5" + 2 + 3;
console.log(x)
let y = 4 + 5 + s;
console.log(y)
//so sánh
let x1 = 2 + 3 + '5'; //cộng từ trái -> phải 2+3=5(là số) tiếp tục 5+'5'(số+chuỗi->chuỗi) = 55
let x2 = '5' + 2 + 3; //cộng từ trái ->phải '5'+2(chuỗi+số->chuỗi)=52 tiếp tục 52+3(chuỗi+số->chuỗi)=523
console.log(x1) //55
console.log(x2) //523
//-> thứ tự khi sử dụng toán tử + rất quan trọng, có thể thay đổi kết quả