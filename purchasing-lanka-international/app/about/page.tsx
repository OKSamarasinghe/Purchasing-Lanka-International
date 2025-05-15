export default function AboutPage() {
  return (
    <section className="px-4 md:px-16 py-16">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-gray-300 max-w-3xl leading-relaxed">
        Purchasing Lanka International acts as a trusted middleman between customers and top supermarket chains in Sri Lanka.
        Our mission is to make grocery shopping convenient and seamless by allowing users to:
      </p>
      <ul className="list-disc text-gray-400 pl-6 mt-4 space-y-2">
        <li>Browse and order items online</li>
        <li>Select their preferred supermarket</li>
        <li>Get everything delivered to their doorsteps</li>
      </ul>
      <p className="text-gray-400 mt-6">
        We are committed to providing fast, reliable, and friendly service. Whether you're shopping for daily essentials or planning a large order, we ensure the best experience every time.
      </p>
    </section>
  );
}
