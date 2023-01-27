//làm việc với chuỗi (string)
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    return str.split(',') //tách chuỗi theo dấu , và chuyển thành các phần tử của mảng
}

// Expected results
console.log(strToArray(coursesStr)) 
console.log(typeof strToArray(coursesStr))
// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

function getContentLength(content) {
    return content.length; //lấy độ dài chuỗi
}


// Mở tab Console để xem kết quả trực quan
console.log(getContentLength('JavaScript'));
console.log(getContentLength('Hello World'));

function getUpperCaseName(name){
    return name.toUpperCase(); //chuyển chữ in hoa
}



// Expected results:
console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"