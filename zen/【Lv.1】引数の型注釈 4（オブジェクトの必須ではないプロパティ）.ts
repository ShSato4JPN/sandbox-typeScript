const happyBirthday = (birthday: {
  year?: number;
  month: number;
  day: number;
}) => {
  const today = { year: 2024, month: 1, day: 1 };
  if (today.month === birthday.month && today.day === birthday.day) {
    console.log(
      `ハッピーバースデー！${
        birthday.year
          ? ` ${today.year - birthday.year}歳のお誕生日ですね！`
          : ""
      }`
    );
  } else {
    console.log("お誕生日ではありません。");
  }
};

// ✅ 想定通りのコード。エラーにならないようにしてください
happyBirthday({ year: 2000, month: 1, day: 1 });
happyBirthday({ year: 1995, month: 5, day: 9 });
happyBirthday({ month: 1, day: 1 });
happyBirthday({ month: 10, day: 10 });

// ❌ 以下はエラーにしてください
happyBirthday({ year: 2000, month: 1 }); // day がないのでエラーにしたい
happyBirthday({ year: 1995, day: 31 }); // month がないのでエラーにしたい
