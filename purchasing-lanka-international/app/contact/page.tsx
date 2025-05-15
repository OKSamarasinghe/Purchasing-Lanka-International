export default function ContactPage() {
  return (
    <section className="px-4 md:px-16 py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-300 mb-8">
        Have questions, suggestions, or need help? We'd love to hear from you.
      </p>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm">Message</label>
          <textarea
            rows={5}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
