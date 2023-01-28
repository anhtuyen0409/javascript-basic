//làm việc với object
//tạo 1 object student có 2 thuộc tính: name, age, address
/*let student = {
    name: 'tuyen',
    age: 22,
    address: 'cat hung'
}*/

//tạo constructor Animal có 3 thuộc tính name, leg, speed
function Animal(name, leg, speed){
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}
//tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot
let parrot = new Animal('parrot',2,12);

//tạo một object constructor Student gồm: firstName, lastName. 
//Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

//làm việc với đối tượng date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`)

//tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.
function getNextYear(){
    var date = new Date();
    return date.getFullYear() + 1;
}
var x = getNextYear();
console.log(typeof x)

//làm việc với math (Math object)
/**
 * Math.PI - lấy sô pi
 * Math.round() - làm tròn số (thập phân -> số nguyên). vd: 1.2->1, 1.8->2, 1.5->2 
 * Math.abs() - trị tuyệt đối
 * Math.ceil() - làm tròn trên. vd: 4.00001->5
 * Math.floor() - làm tròn dưới. vd: 4.99999->4
 * Math.random()
 * Math.min()
 * Math.max()
 */
// tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng
let arr = [1,2,3,4,5];
function getRandomItem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
let y = getRandomItem(arr);
console.log(y);