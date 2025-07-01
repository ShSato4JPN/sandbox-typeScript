const call = (func: (num: number) => void) => {
  const rand = Math.random() * 10;
  func(rand);
};

// ✅ 想定通りのコード。エラーにならないようにしてください
call((num) => {
  if (num > 5) {
    console.log(num);
  }
});
call(() => {
  // 引数を使わなくてもOK
  console.log("called");
});

// ❌ 以下はエラーにしてください
call({}); // 関数以外を渡そうとしているのでエラーにしたい
call((str) => {
  // 引数を文字列として使おうとしているのでエラーにしたい
  if (str.includes("abc")) {
    console.log(str);
  }
});
call((num, num2) => {
  // 存在しない引数を使おうとしているのでエラーにしたい
  console.log("called");
});
