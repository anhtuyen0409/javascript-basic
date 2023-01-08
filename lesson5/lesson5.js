//kieu number trong js
//neu trong java hoac C# thi e co cac datatype phan biet: int, long, float, double...nhung trong js chi co kieu number :))
let a1 = 5;
let b1 = 3;
let c1 = 4.5;
let d1 = '5';
console.log(a1 + b1)
console.log(a1 + c1)
//trong js, ngoai + thi ta cung co the thuc hien -,*,/ chuoi voi so
//khi thuc hien -,*,/ chuoi voi so thi chuoi se convert sang number roi thuc hien phep tinh
console.log(a1 + d1) //25
console.log(a1 - d1) //-3
console.log(a1 * d1) //10
console.log(a1 / d1) //0.4
//doi nguoc vi tri
console.log(d1 + a1) //52
console.log(d1 - a1) //3
console.log(d1 * a1) //10
console.log(d1 / a1) //2.5
//so sanh 2 kieu du lieu number va strings
console.log(a1 === d1, 'a1: ',typeof a1, ', d1: ',typeof d1) //false
//how to convert datatype strings to datatype number
let e = Number('5')
//check variable e after convert...
console.log('value e: ',e,' datatype: ',typeof e)
//cach 2: su dung toan tu + de convert tu strings sang numnber
let e1 = +d1; //declare variable e1 then convert to number using + operator
//check
console.log('value e1:' ,e1,' datatype e1: ',typeof e1)