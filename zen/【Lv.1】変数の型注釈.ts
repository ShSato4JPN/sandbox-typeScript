let isScrolled: boolean; // ✍🏼 型注釈を追加してください

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // ✅ 想定通りのコード。エラーにならないようにしてください
    isScrolled = true;
  } else {
    // ❌ エラーにしてください
    isScrolled = "NO";
  }

  if (isScrolled) {
    console.log("スクロールされました");
  }
});
