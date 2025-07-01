type ValueOf<T> = T[keyof T];

// テスト
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

type Test12 = ValueOf<User>; // number | string | boolean になるべき

interface Product {
  title: string;
  price: number;
}

type Test13 = ValueOf<Product>; // string | number になるべき
