//làm việc với array trong js
/**array method
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */

var courses = [
    {
        id: 1,
        name: 'ASP.NET MVC',
        coin: 100
    },
    {
        id: 2,
        name: 'Java core',
        coin: 50
    },
    {
        id: 3,
        name: 'Android tutorial',
        coin: 200
    },
    {
        id: 4,
        name: 'Javascript tutorial',
        coin: 0
    },
    {
        id: 5,
        name: 'Javascript tutorial',
        coin: 0
    }
];
//foreach - duyệt toàn bộ phần tử mảng
//call back
courses.forEach(function(index,course){
    console.log(index,course)
})

//every - duyệt toàn bộ phần tử mảng theo điều kiện nào đó
//kiểm tra tất cả các khoá học có miễn phí hay không- tất cả phần tử miễn phí mới trả về true
var free = courses.every(function(course, index){
    return course.coin === 0; //duyệt toàn bộ phần tử mảng, nếu tất cả phần tử đều có coin = 0 thì trả về true
});
console.log(free); //false

//some - ngược lại every
//kiểm tra tất cả các khoá học có miễn phí hay không- chỉ cần 1 phần tử miễn phí sẽ trả về true
var free2 = courses.some(function(course, index){
    return course.coin === 0;
});
console.log(free2); //true

//find - tìm kiếm phần tử trong mảng
//find - trả về 1 object
//duyệt lần lượt các phần tử trong mảng và tìm kiếm phần tử có tên android tutorial
var x = courses.find(function(course, index){
    return course.name === 'Android tutorial';
});
console.log(x);

//filter - tìm các phần tử trong mảng thoã điều kiện (find chỉ trả về 1 phần tử gặp đầu tiên thoã đk trong mảng)
//filter - trả về 1 mảng
var y = courses.filter(function(course,index){
    return course.name === 'Javascript tutorial';
});
console.log(y);

//tạo hàm getMostFavoriteSport có 1 tham số. Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(array){
    var sp = array.filter(function(sport){
        return sport.like > 5;
    });
    return sp;
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

//map method - chỉnh sửa lại các phần tử trong mảng
function courseHandler(course){
    return {
        id: course.id,
        name: `Khoá học ${course.name}`, //thêm 'khoá học'
        coin: course.coin,
        coinText: `Giá: ${course.coin}` //thêm thuộc tính cointext
    }
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);

//reduce method - trả về 1 giá trị sau khi lặp mảng
//tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này
var sportsGold = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(array){
    var total = array.reduce((a,b) => a+b.gold,0);
    return total;
}

// Expected results:
console.log(getTotalGold(sportsGold)) // Output: 23

//tính tổng coin các khoá học sử dụng reduce
//reduce có 2 đối số function và 0
//function có 2 tham số là total - biến tạm và đối tượng course
var totalCoin = courses.reduce(function(total, course){
    return total + course.coin;
},0);
console.log(totalCoin);

//includes method (array & string)
var title = 'welcome to my first javascript chanel';
console.log(title.includes('javascript')); //true