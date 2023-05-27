const array = ["one", "two", "three"];
console.log(array[0]); // => "one"
//配列[インデックス]と記述することで、 そのインデックスの要素を配列から読み取れる。 
//配列の先頭要素のインデックスは0となる

//2次元配列
const matrix = [
    ["a", "b"], //配列[0]番目
    ["c", "d"]　//配列[1]番目
];
console.log(matrix[0][0]); // => "a"
//0番目の0個目要素を表示の意味。

//配列のlengthプロパティは配列の要素の数を返す。
const array = ["one", "two", "three"];
console.log(array.length); // => 3
// 配列の要素数 - 1 が 最後の要素のインデックスとなる
console.log(array[array.length - 1]); // => "three"