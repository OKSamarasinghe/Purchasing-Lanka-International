import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="px-4 md:px-16 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <Image 
            src="/purchselankalogo.jpg" 
            alt="Purchasing Lanka International Logo" 
            width={500} 
            height={200}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Grocery Shopping Made Easy
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Order your groceries online, choose your preferred supermarket, and we'll deliver everything straight to your doorstep.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/shop">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition w-full md:w-auto">
              Start Ordering
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition w-full md:w-auto">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-white mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow text-center">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl mb-2">Order Online</h3>
            <p className="text-gray-400">Browse our catalog and select your desired items.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow text-center">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M3 21h18"></path>
                <path d="M3 7v14"></path>
                <path d="M21 7v14"></path>
                <path d="M3 7l9-4 9 4"></path>
                <path d="M9 21v-8"></path>
                <path d="M15 21v-8"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl mb-2">Choose Your Supermarket</h3>
            <p className="text-gray-400">Select from our partnered supermarket chains.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow text-center">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M10 17h4V5H2v12h3"></path>
                <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"></path>
                <path d="M14 17H9"></path>
                <circle cx="7.5" cy="17.5" r="2.5"></circle>
                <circle cx="17.5" cy="17.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 className="text-white text-xl mb-2">Get Doorstep Delivery</h3>
            <p className="text-gray-400">We pick up your items and deliver them to your location.</p>
          </div>
        </div>
      </div>

      {/* Supermarket Selection Preview */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Choose from Top Supermarkets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <Image src="/supercity.webp" alt="Food City" width={120} height={60} />
            </div>
            <h3 className="text-white text-xl mb-2">Super City</h3>
            <p className="text-gray-400">Get fresh groceries from Sri Lanka's leading supermarket chain.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <Image src="/keels.png" alt="Keells" width={120} height={60} />
            </div>
            <h3 className="text-white text-xl mb-2">Keells Super</h3>
            <p className="text-gray-400">Quality products for everyday living with island-wide locations.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <Image src="/arpico.png" alt="Arpico" width={120} height={60} />
            </div>
            <h3 className="text-white text-xl mb-2">Arpico Supercentre</h3>
            <p className="text-gray-400">Everything your home needs, delivered with care and quality.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/supermarkets">
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              View All Supermarkets
            </button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div>
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <Image 
                  src="/cus11.jpeg" 
                  alt="Customer 1" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">Kalani D.</h4>
                <p className="text-gray-400">Colombo 7</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "Purchasing Lanka International has saved me so much time! I can now get all my favorite products from Food City without leaving my home."
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <Image 
                  src="/cus2.png" 
                  alt="Customer 2" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">Anjana R.</h4>
                <p className="text-gray-400">Colombo 5</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The ability to choose which supermarket I want to order from makes this service truly unique. Highly recommended!"
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <Image 
                  src="/cus33.png" 
                  alt="Customer 3" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">Priya D.</h4>
                <p className="text-gray-400">Colombo 3</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The delivery is always on time and the groceries arrive fresh. Their customer service is excellent when I needed help with my order."
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <Image 
                  src="/cus44.png" 
                  alt="Customer 4" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">Aruvi S.</h4>
                <p className="text-gray-400">Colombo 4</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "Being able to compare prices across different supermarkets before ordering has helped me save money while still getting quality products."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}