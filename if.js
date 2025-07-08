// 요구사항 60이상 유무

const score = 78;

const pass = () => {
  console.log("pass");
};

if (score >= 60) {
  pass();
} else {
  const fail = () => {
    console.log("fail");
  };
}

score >= 60 ? pass() : fail();

console.log("if statement end");

//점수에따라 등급지정

if (score >= 90) {
  console.log("a grade");
} else if (score >= 80) {
  console.log("b grade");
} else if (score >= 70) {
  console.log("c grade");
} else {
  console.log("d grade");
}

//console.log("점수는", score, "점입니다");
//백틱으로
console.log(`score is ${score}.`);
