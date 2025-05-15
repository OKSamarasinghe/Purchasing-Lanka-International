export default function SupermarketsPage() {
  const stores = ["Cargills", "Keells", "Arpico"];

  return (
    <section className="px-4 md:px-16 py-16">
      <h1 className="text-3xl font-bold mb-8">Select Supermarket</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store} className="bg-gray-900 p-6 rounded hover:scale-105 transition">
            <h2 className="text-white text-xl">{store}</h2>
            <p className="text-gray-400 mt-2">Choose to fulfill your order from {store}</p>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
              Select {store}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
