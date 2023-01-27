//làm việc với mảng (array)
//tạo 1 mảng đơn giản
let games = [
    'fo4',
    'lien quan',
    'pug'
]

// hàm joinWithCharacter có 2 tham số là array và charactor trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor
function joinWithCharacter(array, charactor) {
    return array.join(charactor);
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"

//hàm getLastElement có 1 tham số, hàm này sẽ trả về phần tử cuối cùng trong mảng
function getLastElement(array){
    return array.at(-1);
}


// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

//hàm getFirstElement có 1 tham số, hàm này sẽ trả về phần tử đầu tiên trong mảng
function getFirstElement(array){
    return array.at(0);
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']