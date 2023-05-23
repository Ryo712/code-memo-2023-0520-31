function showMessage(text, user) { // 仮引数：text, user
    console.log(text + ', ' + user);
  }
  
  showMessage('Hi', 'JavaScript'); // 実引数1
  showMessage('Nice to see you', 'JS'); // 実引数2
  
  // "Hi, JavaScript"
  // "Nice to see you, JS"

  //関数が呼び出されると、実引数1と2が仮引数textとuserにコピーされ、
  //その後関数はその値を使用する。