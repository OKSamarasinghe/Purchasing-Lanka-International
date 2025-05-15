'use client'

import { useState } from "react";

const dummyProducts = [
  { id: 1, name: "Rice 5kg", price: 1200 },
  { id: 2, name: "Milk Powder", price: 850 },
  { id: 3, name: "Carrots 1kg", price: 300 },
];

export default function ProductsPage() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <section className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-8">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <div key={product.id} className="bg-gray-900 p-6 rounded shadow">
            <h2 className="text-white text-xl mb-2">{product.name}</h2>
            <p className="text-gray-300 mb-4">Rs. {product.price}</p>
            <button
              onClick={() => addToCart(product.id)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
