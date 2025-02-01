'use client'
import { useEffect, useState } from "react";

// Define the Product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  keyword: string[];
}

export default function CategoryList() {
  const [products, setProducts] = useState<Product[]>([]); // Explicitly define state type

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <img src={product.image} alt={product.name} className="w-60 h-32 object-fit rounded" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
