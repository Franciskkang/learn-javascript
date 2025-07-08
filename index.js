//console.log("후츠릿 구독 좋아요");
//console.log(2 + 2);

//자바스크립트 주석: 슬러시2개
//변수
const youtube = "후츠릿"; //상수
let comment = "구독좋아여";

console.log("youtube", youtube); //''로 문자열을 보여주겠다 console이 너무 많으면 햇갈리니
//ctrl sht p turbo extention
console.log("🚀 ~ comment:", comment);
console.log("🚀 ~ console:", console);

// youtube = "태요미네";

comment = "알림설정";
console.log("🚀 ~ comment:", comment);

const number = 1; //숫자타입
const number2 = "1";
console.log("🚀 ~ number2:", number2, typeof number2);
console.log("🚀 ~ number", number, typeof number);

//boolean = tr/fals
const bool = true;
console.log("🚀 ~ bool:", bool, typeof bool);

//null, undefined
const empty = null;
console.log("🚀 ~ empty type:", typeof empty);

let empty2; // 변수선언했지만 값은 할당없음
console.log("🚀 ~ empty2: type", typeof empty2);

//이름, 나이 변수 저장
const name = "kdkang";
console.log("🚀 ~ name:", name);
const age = 1991;
console.log("🚀 ~ age:", age);

//함수
console.log("✌");
//함수를 정의한다
//function helloworld() {
//실행로직부분
//console.log("hellow wooorlllld");
//}

const helloworld = () => {
  console.log("hellow wooorlllld");
};
//함수를 호출하고 실행한다
helloworld();

//name과 age를 console 탭에 출력하는 함수

//const userinfo = () => {
//  console.log(name);
//  console.log(age);
//};

const usinfo = (name, age) => {
  console.log(name + "님 반갑습니다!");
  console.log(age + "출생이시군요!");
  console.log("doule of birth year:" + age * 2);
};
//인자(argument)
usinfo(name, age);

//mission 3
//const num1 = 8;
//const num2 = 9;
//const sumnum = (num1, num2) => {
//  console.log(num1);
//  console.log(num2);
//};
//sumnum(num1 + num2);

const add = (num3, num4) => {
  const result = num3 + num4;
  console.log("🚀 ~ add ~ result:", result);
  return result;
};

const sum = add(10, 20);
console.log("🚀 ~ sum:", sum);

sum * 2;
console.log("🚀 ~ sum:", sum);
