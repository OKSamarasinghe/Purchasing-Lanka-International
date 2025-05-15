import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart, FaStore, FaShoppingBasket, FaTruck } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <section className="px-4 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">About Us</h1>

        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-0.1">
          <Image
            src="/purchselankalogo.jpg"
            alt="Purchasing Lanka International Logo"
            width={240}
            height={100}
            className="mb-6"
          />
        </div>

        {/* Company Introduction */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Purchasing Lanka International acts as a trusted middleman between customers and top supermarket
            chains in Sri Lanka. Founded in 2025, we have quickly become the preferred shopping assistant
            for busy professionals and families across Colombo and surrounding areas.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our mission is to make grocery shopping convenient and seamless by allowing users to:
          </p>
          <ul className="text-gray-300 mt-4 space-y-3 mb-8 mx-auto max-w-xl text-center list-none">
            <li>Browse and order items online from multiple supermarkets</li>
            <li>Select their preferred supermarket based on preferences and location</li>
            <li>Get everything delivered to their doorsteps on the same day</li>
            <li>Save time and avoid traffic and crowded shopping experiences</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed">
            We are committed to providing fast, reliable, and friendly service. Whether you're shopping for daily essentials
            or planning a large order, we ensure the best experience every time. Our team personally selects the freshest
            produce and carefully handles your items from store to door.
          </p>
        </div>

        {/* Our Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`/service${n}.png`}
                  alt={`Service ${n}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-700">
                <Image
                  src="/jehanf2.png"
                  alt="Jehan Fernando - CEO"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Jehan Fernando</h3>
              <p className="text-xl text-gray-400 mb-4">CEO & Founder</p>
              <p className="text-gray-300 text-center max-w-md">
                Jehan Fernando With over 15 years of experience in retail and logistics, Jehan founded Purchasing Lanka International
                with a vision to transform grocery shopping in Sri Lanka.
              </p>
            </div>

            {/* New Team Member */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-700">
                <Image
                  src="/rowans.webp" 
                  alt="New Team Member Name"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Rowan De Soysa</h3>
              <p className="text-xl text-gray-400 mb-4">Marketing Executive</p>
              <p className="text-gray-300 text-center max-w-md">
                With expertise in digital marketing and customer engagement, Rowan leads our marketing strategies to build brand awareness and create meaningful connections with our growing customer base.
              </p>
            </div>

            {/* Director */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-700">
                <Image
                  src="/priyanthamu.webp"
                  alt="Priyantha - Director"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Priyantha Mahaulpathagama</h3>
              <p className="text-xl text-gray-400 mb-4">Director of Operations</p>
              <p className="text-gray-300 text-center max-w-md">
                Priyantha Mahaulpathagama oversees all operational aspects of our service, ensuring timely deliveries and
                maintaining strong relationships with our supermarket partners.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                step: 1, 
                title: "Place Your Order", 
                text: "Browse our website and add items to your cart",
                icon: <FaShoppingCart size={24} color="#000000" />
              },
              { 
                step: 2, 
                title: "Select Supermarket", 
                text: "Choose your preferred store from our partner network", 
                icon: <FaStore size={24} color="#000000" />
              },
              { 
                step: 3, 
                title: "We Shop For You", 
                text: "Our team carefully selects the freshest items", 
                icon: <FaShoppingBasket size={24} color="#000000" />
              },
              { 
                step: 4, 
                title: "Doorstep Delivery", 
                text: "Receive your groceries at your convenience", 
                icon: <FaTruck size={24} color="#000000" />
              },
            ].map((item) => (
              <div key={item.step} className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Location */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Our Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-white text-xl mb-4">Find Us</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Address:</strong> MACPAC Building, Dolekanatta Junction, Pilyandala, Sri Lanka
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Phone:</strong> +94 2012354842
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Email:</strong> info@purchasinglanka.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Hours:</strong> Monday-Saturday: 8:00 AM - 8:00 PM
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63332.43529277753!2d79.91619712249715!3d6.801777544977981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae247265e3b6f5b%3A0x9e267614d38ae8cb!2sPiliyandala!5e0!3m2!1sen!2slk!4v1715776744555!5m2!1sen!2slk"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 p-10 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to simplify your grocery shopping?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their shopping experience with Purchasing Lanka International.
          </p>
          <Link href="/shop">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
              Start Shopping Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
