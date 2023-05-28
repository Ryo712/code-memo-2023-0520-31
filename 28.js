const double = "文字列";
console.log(double); // => "文字列"
const single = '文字列';
console.log(single); // => '文字列'
// どちらも同じ文字列
console.log(double === single);// => true

//改行
const multiline = `1行目
2行目
3行目`;
// \n は改行を意味する
console.log(multiline); // => "1行目\n2行目\n3行目"

//文字列の中にリテラルと同じ記号が出現した場合は、\（バックスラッシュ）を使いエスケープする
const str = "This book is \"js-primer\"";
console.log(str); // => 'This book is "js-primer"'
