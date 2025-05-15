"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  supermarket: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setSupermarket: (name: string) => void;
  selectedSupermarket: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSupermarket, setSelectedSupermarket] = useState<string>("");

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setSelectedSupermarket("");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, selectedSupermarket, setSupermarket: setSelectedSupermarket }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};

// 2. Add CartProvider in app/layout.tsx

// Wrap the layout content with <CartProvider>

import { CartProvider } from "./context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

// 3. Products Page with Category and Supermarket Filters
// File: app/products/page.tsx

'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';

const allProducts = [
  { id: 1, name: "Rice 5kg", price: 1200, category: "Grains", supermarket: "Cargills" },
  { id: 2, name: "Milk Powder", price: 850, category: "Dairy", supermarket: "Keells" },
  { id: 3, name: "Carrots", price: 300, category: "Vegetables", supermarket: "Arpico" },
  { id: 4, name: "Yogurt", price: 150, category: "Dairy", supermarket: "Cargills" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSupermarket, setSelectedSupermarket] = useState('All');
  const { addToCart } = useCart();

  const categories = ["All", ...new Set(allProducts.map(p => p.category))];
  const supermarkets = ["All", ...new Set(allProducts.map(p => p.supermarket))];

  const filtered = allProducts.filter(p =>
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    (selectedSupermarket === 'All' || p.supermarket === selectedSupermarket)
  );

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="bg-gray-800 border border-gray-600 p-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select
          className="bg-gray-800 border border-gray-600 p-2 rounded"
          value={selectedSupermarket}
          onChange={(e) => setSelectedSupermarket(e.target.value)}
        >
          {supermarkets.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="bg-gray-900 p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400">Category: {product.category}</p>
            <p className="text-gray-400">From: {product.supermarket}</p>
            <p className="text-white mt-2 font-bold">Rs. {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-white text-black px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Cart Page with Supermarket selection and Order
// File: app/cart/page.tsx

'use client';

import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, selectedSupermarket, setSupermarket } = useCart();
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({ name: '', address: '', phone: '' });

  if (step === 2) {
    return (
      <div className="px-4 py-10 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
        <input
          className="w-full bg-gray-800 p-3 mb-4 rounded"
          placeholder="Full Name"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
        <input
          className="w-full bg-gray-800 p-3 mb-4 rounded"
          placeholder="Delivery Address"
          value={details.address}
          onChange={(e) => setDetails({ ...details, address: e.target.value })}
        />
        <input
          className="w-full bg-gray-800 p-3 mb-4 rounded"
          placeholder="Phone Number"
          value={details.phone}
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
        />
        <button
          className="bg-white text-black px-6 py-2 rounded"
          onClick={() => {
            alert(`Order placed successfully!\nSupermarket: ${selectedSupermarket}`);
            clearCart();
            setStep(1);
          }}
        >
          Confirm Order
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="bg-gray-900 p-4 rounded mb-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-400">Qty: {item.quantity} | Rs. {item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-red-400 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="my-6">
            <label className="block mb-2">Choose Supermarket</label>
            <select
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
              value={selectedSupermarket}
              onChange={(e) => setSupermarket(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Cargills">Cargills</option>
              <option value="Keells">Keells</option>
              <option value="Arpico">Arpico</option>
            </select>
          </div>

          <button
            disabled={!selectedSupermarket}
            className="bg-white text-black px-6 py-2 rounded disabled:opacity-50"
            onClick={() => setStep(2)}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
