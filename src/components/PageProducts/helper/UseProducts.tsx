import { useState } from "react";
import type { IProduct } from "../../../Types/Types";

export default function useProduct<T>() {
  const [products, setProducts] = useState<IProduct<T> | null>(null);

  return [ products, setProducts ];
}
