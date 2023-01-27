//làm việc với kiểu sô (number)
//hàm kiểm tra kiểu number
function isNumber1(value){
    if(typeof value == 'number'){
        return true;
    }
    return false;
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

//trong JavaScript thì kiểu của NaN cũng là number
//Chính vì vậy, nếu sử dụng hàm isNumber trên với đối số là NaN thì hàm vẫn trả về đúng
//Điều này có thể gây ra lỗi logic trong ứng dụng của bạn, bởi vì chúng ta tạo hàm isNumber 
//với mục đích kiểm tra xem một giá trị có phải là số hay không, trong thực tế, chúng ta thường 
//làm điều này trước khi thực hiện các phép tính toán. Nếu isNumber(NaN) cũng trả về true,
//rất có thể logic phía sau đó NaN sẽ được đưa vào để tính toán và gây ra lỗi logic
//sử dụng hàm isnumber2 để thay thế isnumber1
function isNumber2(value){
    if(isNaN(value)){
        return false;
    }
    if(typeof value == 'number'){
        return true;
    }
    return false;
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false