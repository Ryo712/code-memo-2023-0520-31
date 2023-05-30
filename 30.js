function fn() {
    const x = 1;
    // fn関数のスコープ内から`x`は参照できる
    console.log(x); // => 1
}
fn();
// fn関数のスコープ外から`x`は参照できないためエラー
console.log(x); // => ReferenceError: x is not defined


// ブロック内で定義した変数はスコープ内でのみ参照できる
{
    const x = 1;
    console.log(x); // => 1
}
// スコープの外から`x`を参照できないためエラー
console.log(x); // => ReferenceError: x is not defined


// if文のブロック内で定義した変数はブロックスコープの中でのみ参照できる
if (true) {
    const x = "inner";
    console.log(x); // => "inner"
}
console.log(x); // => ReferenceError: x is not defined