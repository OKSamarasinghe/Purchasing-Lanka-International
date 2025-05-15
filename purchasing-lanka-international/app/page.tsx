export default function Home() {
  return (
    <section className="px-4 md:px-16 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Grocery Shopping Made Easy
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Order your groceries online, choose your preferred supermarket, and we’ll deliver everything straight to your doorstep.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
          Start Ordering
        </button>
      </div>

      {/* Supermarket Selection Preview */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Choose from top supermarkets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-white text-xl mb-2">SuperMart</h3>
            <p className="text-gray-400">Fast delivery from your local SuperMart branch.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-white text-xl mb-2">Food City</h3>
            <p className="text-gray-400">Get fresh produce and groceries directly from Food City.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-white text-xl mb-2">Daily Needs</h3>
            <p className="text-gray-400">Everything your home needs, delivered with care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
