export default function CartPage() {
  return (
    <section className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <p className="text-gray-400 mb-4">You haven't added any items yet.</p>
      <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300">
        Go to Products
      </button>
    </section>
  );
}
