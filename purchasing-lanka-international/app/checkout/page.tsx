export default function CheckoutPage() {
  return (
    <section className="px-4 md:px-16 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-2">Full Name</label>
          <input type="text" className="w-full p-3 bg-gray-800 text-white rounded border border-gray-600" />
        </div>
        <div>
          <label className="block mb-2">Delivery Address</label>
          <input type="text" className="w-full p-3 bg-gray-800 text-white rounded border border-gray-600" />
        </div>
        <div>
          <label className="block mb-2">Phone Number</label>
          <input type="text" className="w-full p-3 bg-gray-800 text-white rounded border border-gray-600" />
        </div>
        <button type="submit" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300">
          Place Order
        </button>
      </form>
    </section>
  );
}
