import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="px-4 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-12">
          <Image 
            src="/purchselankalogo.jpg" 
            alt="Purchasing Lanka International Logo" 
            width={240} 
            height={100}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">About Us</h1>
        </div>

        {/* Company Introduction */}
        <div className="mb-16">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Purchasing Lanka International acts as a trusted middleman between customers and top supermarket 
            chains in Sri Lanka. Founded in 2023, we have quickly become the preferred shopping assistant 
            for busy professionals and families across Colombo and surrounding areas.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our mission is to make grocery shopping convenient and seamless by allowing users to:
          </p>
          <ul className="list-disc text-gray-300 pl-6 mt-4 space-y-3 mb-8 text-lg">
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

        {/* Our Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                With over 15 years of experience in retail and logistics, Jehan founded Purchasing Lanka International 
                with a vision to transform grocery shopping in Sri Lanka.
              </p>
            </div>
            
            {/* Director */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 bg-gray-700">
                <Image 
                  src="/priyantham.png" 
                  alt="Priyantha - Director" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1">Priyantha M</h3>
              <p className="text-xl text-gray-400 mb-4">Director of Operations</p>
              <p className="text-gray-300 text-center max-w-md">
                Priyantha oversees all operational aspects of our service, ensuring timely deliveries and 
                maintaining strong relationships with our supermarket partners.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl font-bold">1</span>
              </div>
              <h3 className="text-white text-lg mb-3">Place Your Order</h3>
              <p className="text-gray-400">Browse our website and add items to your cart</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl font-bold">2</span>
              </div>
              <h3 className="text-white text-lg mb-3">Select Supermarket</h3>
              <p className="text-gray-400">Choose your preferred store from our partner network</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl font-bold">3</span>
              </div>
              <h3 className="text-white text-lg mb-3">We Shop For You</h3>
              <p className="text-gray-400">Our team carefully selects the freshest items</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-xl font-bold">4</span>
              </div>
              <h3 className="text-white text-lg mb-3">Doorstep Delivery</h3>
              <p className="text-gray-400">Receive your groceries at your convenience</p>
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">Our Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-white text-xl mb-4">Find Us</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Address:</strong> MACPAC Building, Dolekanatta Junction, Pilyandala, Sri Lanka
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Phone:</strong> +94 76 639 2356
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Email:</strong> info@purchasinglanka.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Hours:</strong> Monday-Saturday: 8:00 AM - 8:00 PM
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-64">
              {/* Map placeholder - in a real implementation, you would integrate with Google Maps or similar */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <p className="text-gray-400">Map Location</p>
              </div>
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