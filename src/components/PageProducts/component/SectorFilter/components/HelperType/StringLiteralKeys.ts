export type StringLiteralKeys<T> = {
  [K in keyof T]: T[K] extends string
    ? string extends T[K] 
      ? never
      : K
    : never;
}[keyof T];
