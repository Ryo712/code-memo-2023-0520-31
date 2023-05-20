let hp = 100;

while (hp >= 0) {
  console.log(`${hp} HP Left!`);
  hp -= 10;
}
//whileを使ったループ処理

let hp2 = -50;

do {
  console.log(`${hp2} HP Left!`); //-50 HP Left!
  hp2 -= 15;
} while (hp2 > 0);
//do while

for (let i = 1; i <= 10; i++) {
  // 3の倍数の時だけスキップさせる
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
//continute: ループ処理の中で特定の条件の時だけ、処理をスキップさせる