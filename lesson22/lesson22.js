//sử dụng vòng lặp trong js
/**
 * for
 * for in - lặp qua key
 * for of - lặp qua value
 * while
 * do while
 */
//for loop
for(var i=0; i<1000; i++){
    console.log(i);
}
//tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, 
//các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max
function getRandNumbers(min, max, length){
    var arr = [];
    for(var i=0; i<length; i++){
        arr.push(Math.random() * (max - min) + min);
    }
    return arr;
}
//viết hàm getTotal trả về tổng giá trị các phần tử của mảng
function getTotal(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
//mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
//hàm getTotal để tính được tổng giá trị của đơn hàng
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(orders){
    var sum = 0;
    for(var i=0; i<orders.length; i++){
        sum += orders[i].price;
    }
    return sum;
}

// Expected results:
getTotal(orders) // Output: 8700000

//for...in loop
var student = {
    name: 'Tuyen',
    age: 22,
    address: 'Binh Dinh'
};
for(var key in student){
    console.log(key);
}
function run(object) {
    var arr = [];
    for(var key in object){
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

//for...of loop
var languages = [
    'java',
    'javascript',
    'C#',
    'PHP'
]
for(var value of languages){
    console.log(value);
}
//vòng lặp lồng nhau
var arr2 = [
    [1, 2],
    [3, 4],
    [5, 6]
]
for(var i=0; i<arr2.length; i++){
    for(var j=0; j<arr2[i].length; j++){
        console.log(arr2[i][j]);
    }
}

//xoá phần tử trùng lặp trong mảng
//sử dụng hàm có sẵn
//set
var array = ['a','b','b','a','c','a','d','c','b'];
console.log(new Set(array))
//đệ quy
//1.xác định điểm dừng
//2.logic handle -> tạo điểm dừng
//ví dụ countdown
function countDown(num){
    if(num > 0){
        console.log(num);
        //gọi lại hàm countdown và num -1
        return countDown(num - 1);
    }
    return num;
}
//gọi hàm countdown
countDown(10);

//ví dụ vòng lặp
//hàm loop có 3 tham số điểm bắt đầu, điểm kết thúc và callback - gọi hàm 
function loop(start, end, cb){
    if(start <= end){
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var arr3 = ['Javascript','PHP','Python'];
loop(0, arr3.length -1, function(index){
    console.log(arr3[index]);
});

//ví dụ tính giai thừa

function giaiThua(num){
    if(num > 0){
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log(giaiThua(5))