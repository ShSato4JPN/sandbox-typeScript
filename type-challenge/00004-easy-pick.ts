// question
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
// type MyPick<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? P : never]: T[P];
// };

// question
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// https://github.com/type-challenges/type-challenges/issues/13427
// type MyPick<T, K extends keyof T> = {
//   [key in K]: T[key];
// };
