// ✍🏼 型定義を追加してください
interface Window {
  dataLayer: object[];
}

// ✅ 想定通りのコード。エラーにならないようにしてください
window.dataLayer.push({ event: "event_name" });
window.dataLayer.push({ variable_name: "variable_value" });
window.dataLayer.push({
  color: "red",
  conversionValue: 50,
  event: "customize",
});
window.location; // 既存のプロパティにもアクセスできる
window.scrollY; // 既存のプロパティにもアクセスできる

// ❌ 以下はエラーにしてください
window.dataLayer.toUpperCase(); // 存在しないプロパティにアクセスするとエラーにしたい
window.bar; // 存在しないプロパティにアクセスするとエラーにしたい
