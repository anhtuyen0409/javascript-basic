//callback?
//là hàm (function) được truyền qua đối số khi gọi hàm khác
//1. là hàm
//2. được truyền qua đối số
//có thể hiểu callback là gọi 1 hàm nào đó trong 1 hàm khác

function myFunction(param){
    if(typeof param === 'function'){
        param('học lập trình');
    }
}

function myCallback(value){
    console.log('value: ',value);
}

//gọi hàm mycallback trong hàm myfunction
myFunction(myCallback); //value: học lập trình

function sumCb(a, b) {
    return a + b;
}
function subCb(a, b){
    return a - b;
}
function multiCb(a, b){
    return a * b;
}
function divCb(a, b){
    return a/b;
}
function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

//callback - p2
var courses = [
    'Javascript',
    'PHP',
    'Python'
];

//tự định nghĩa (thêm) phương thức map2 ta dùng prototype
Array.prototype.map2 = function(callback){
    var arrayLength = this.length; //this chính là courses
    for(var i=0; i<arrayLength; i++){
        callback(this[i], i);
    }
}

courses.map2(function(course, index){
    console.log(index, course);
});

Array.prototype.myMap = function(cb) {
    let numberslength = this.length;
    let output = [];
    if(typeof cb === 'function'){
        for(var i=0; i<numberslength; i++){
            let result = cb(this[i], i);
            output.push(result);
        }
    }
    return output;
}

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

//empty elements of array
//viết phương thức tương tự forEach sử dụng callback
courses.forEach(function(course, index, array){
    console.log(course, index, array);
});