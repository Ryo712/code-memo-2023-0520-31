//引数
function showAd (message) { // 仮引数
    console.log('-------');
    // テンプレートリテラルを追加
    console.log(`---${message}--`);
    console.log('-------');
  }
  
  console.log('Tom is Great');
  showAd('Header AD'); // 実引数
  console.log('Takahasi is Great');
  showAd('Footer AD');

//returnで返す
// 合計値を返す関数を作成する
function sum (a, b, c) {
    // この時点で値が戻されてそれ以降の処理は実行されない
    return a + b + c;
    // ここが無視される
    console.log('Hi!')
  }
  const total = sum(1, 2, 3) + sum(3, 4, 5);
  console.log(total);
