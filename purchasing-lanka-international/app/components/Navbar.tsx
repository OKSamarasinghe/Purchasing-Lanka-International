import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-950 shadow-md">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-white text-2xl font-semibold">Purchasing Lanka International </span>
      </div>
      <div className="space-x-6">
        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
        <Link href="/about" className="text-white hover:text-gray-300">About</Link>
        <Link href="/products" className="text-white hover:text-gray-300">Products</Link>
        <Link href="/cart" className="text-white hover:text-gray-300">Cart</Link>
        <Link href="/supermarkets" className="text-white hover:text-gray-300">Supermarkets</Link>
        <Link href="/checkout" className="text-white hover:text-gray-300">Checkout</Link>
        <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>

      </div>
    </nav>
  );
}
