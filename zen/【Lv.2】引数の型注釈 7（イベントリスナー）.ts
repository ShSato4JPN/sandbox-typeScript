const handleKeyDown = (e: KeyboardEvent) => {
  // ✅ 想定通りのコード。エラーにならないようにしてください
  if (e.key === "Enter") {
    console.log("Enter キーが押されました");
  }
};

document.body.addEventListener("keydown", handleKeyDown);
