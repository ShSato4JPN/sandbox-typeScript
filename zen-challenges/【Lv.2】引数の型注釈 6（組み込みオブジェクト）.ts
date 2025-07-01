const isHoliday = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// ✅ 想定通りのコード。エラーにならないようにしてください
isHoliday(new Date());
isHoliday(new Date("2024-02-10"));
isHoliday(new Date("2017-10-12"));

// ❌ 以下はエラーにしてください
isHoliday("2024-01-01"); // Date 以外を渡そうとしているのでエラーにしたい
isHoliday(20381010); // Date 以外を渡そうとしているのでエラーにしたい
