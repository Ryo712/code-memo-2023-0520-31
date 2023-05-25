//アロー関数
const sum = (a, b, c) => a + b + c;
console.log(`${sum(1, 2, 3)}`);
//6

//アロー関数は引数が1つの時は()を省略する事ができる。
//関数式の例

const double = function (a) {
    return a * 2;
  };

  //アロー関数
const double = (a) => a * 2;