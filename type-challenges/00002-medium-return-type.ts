// question
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>;

// https://github.com/type-challenges/type-challenges/issues/2
// type MyReturnType<T extends Function> =
//   T extends (...args: any) => infer R
//     ? R
//     : never
