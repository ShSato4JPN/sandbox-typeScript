const items = [
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
];
const result = items.find((item) => item.id === 1);

// ✍🏼 エラーにならないように、処理を修正してください

console.log(result?.name);
