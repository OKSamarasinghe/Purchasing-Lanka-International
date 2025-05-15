'use client'

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { FaSearch, FaShoppingCart, FaFilter, FaSort } from "react-icons/fa";

// Extended product data with categories and supermarket information
const products = [
  // Groceries
  { id: 1, name: "Rice 5kg", price: 1200, category: "Groceries", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", featured: true },
  { id: 2, name: "Sugar 1kg", price: 220, category: "Groceries", supermarket: "Keells", image: "https://images.unsplash.com/photo-1624358914240-238db173fca0?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 3, name: "Flour 1kg", price: 185, category: "Groceries", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1620146806160-4f5d3d9d8d5a?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 4, name: "Red Lentils 500g", price: 320, category: "Groceries", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1612692132402-d2c804d72f4a?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 5, name: "Coconut Oil 500ml", price: 450, category: "Groceries", supermarket: "Keells", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkeellssuper.com%2FproductDetail%3Fitemcode%3D119301%26KEELLS_COCONUT_OIL_1L&psig=AOvVaw1AF-tBOGpNqGh2beAi6uTh&ust=1747418365899000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD7uumGpo0DFQAAAAAdAAAAABAE", featured: true },
  { id: 6, name: "Cinnamon Sticks 100g", price: 280, category: "Groceries", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1544956823-8daa84aa702d?auto=format&fit=crop&q=80&w=500", featured: false },
  
  // Dairy
  { id: 7, name: "Milk Powder 400g", price: 850, category: "Dairy", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1722518252679-3a77ae458836?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", featured: true },
  { id: 8, name: "Yogurt 500ml", price: 360, category: "Dairy", supermarket: "Keells", image: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 9, name: "Cheese 250g", price: 750, category: "Dairy", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?auto=format&fit=crop&q=80&w=500", featured: true },
  { id: 10, name: "Butter 100g", price: 395, category: "Dairy", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1589985270958-b90a95444e95?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 11, name: "Ice Cream 1L", price: 680, category: "Dairy", supermarket: "Keells", image: "https://images.unsplash.com/photo-1563589173312-476d8c36b242?auto=format&fit=crop&q=80&w=500", featured: true },
  
  // Fresh Produce
  { id: 12, name: "Carrots 1kg", price: 300, category: "Fresh Produce", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1598170845053-a6d51c711332?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 13, name: "Tomatoes 500g", price: 180, category: "Fresh Produce", supermarket: "Keells", image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&q=80&w=500", featured: true },
  { id: 14, name: "Bananas 1kg", price: 230, category: "Fresh Produce", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 15, name: "Mangoes 1kg", price: 390, category: "Fresh Produce", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=500", featured: true },
  { id: 16, name: "Avocado 1kg", price: 550, category: "Fresh Produce", supermarket: "Keells", image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 17, name: "Green Beans 500g", price: 200, category: "Fresh Produce", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1567375698348-5d9d5a55f07b?auto=format&fit=crop&q=80&w=500", featured: false },
  
  // Beverages
  { id: 18, name: "Ceylon Tea 100g", price: 410, category: "Beverages", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=500", featured: true },
  { id: 19, name: "Coffee 200g", price: 950, category: "Beverages", supermarket: "Keells", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 20, name: "Fruit Juice 1L", price: 320, category: "Beverages", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 21, name: "Coconut Water 500ml", price: 180, category: "Beverages", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1536759808958-1a71c59dfcf4?auto=format&fit=crop&q=80&w=500", featured: true },
  { id: 22, name: "Mineral Water 1.5L", price: 120, category: "Beverages", supermarket: "Keells", image: "https://images.unsplash.com/photo-1553670404-695de1fce003?auto=format&fit=crop&q=80&w=500", featured: false },
  
  // Household
  { id: 23, name: "Laundry Detergent 1kg", price: 780, category: "Household", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1558962009-3af7fc5bc2c7?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 24, name: "Dish Soap 500ml", price: 320, category: "Household", supermarket: "Keells", image: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=500", featured: true },
  { id: 25, name: "Toilet Paper 4 Rolls", price: 490, category: "Household", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 26, name: "Air Freshener", price: 350, category: "Household", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=500", featured: false },

  // Personal Care
  { id: 27, name: "Shampoo 300ml", price: 580, category: "Personal Care", supermarket: "Keells", image: "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&q=80&w=500", featured: true },
  { id: 28, name: "Soap Bar 75g", price: 150, category: "Personal Care", supermarket: "Arpico", image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 29, name: "Toothpaste 100g", price: 290, category: "Personal Care", supermarket: "Cargills", image: "https://images.unsplash.com/photo-1612207339795-4b67733818cf?auto=format&fit=crop&q=80&w=500", featured: false },
  { id: 30, name: "Shower Gel 250ml", price: 420, category: "Personal Care", supermarket: "Keells", image: "https://images.unsplash.com/photo-1556228578-8d89a61b7b5d?auto=format&fit=crop&q=80&w=500", featured: true },
];

export default function ProductsPage() {
  // State management
  const [cart, setCart] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSupermarket, setSelectedSupermarket] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Extract unique categories and supermarkets for filters
  const categories = useMemo(() => ["All", ...new Set(products.map(p => p.category))], []);
  const supermarkets = useMemo(() => ["All", ...new Set(products.map(p => p.supermarket))], []);
  
  // Filter products based on search, category and supermarket
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSupermarket = selectedSupermarket === "All" || product.supermarket === selectedSupermarket;
      
      return matchesSearch && matchesCategory && matchesSupermarket;
    });
  }, [searchQuery, selectedCategory, selectedSupermarket]);
  
  // Sort products
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, [filteredProducts, sortOption]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );
  
  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSupermarket, searchQuery]);

  // Add to cart function
  const addToCart = (id: number) => {
    setCart(prev => [...prev, id]);
    // Show feedback
    showNotification(`Item added to cart!`);
  };
  
  // Simple notification system
  const [notification, setNotification] = useState("");
  
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <section className="px-4 md:px-16 py-16 bg-gray-950">
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 bg-white text-black p-4 rounded-lg shadow-lg z-50 animate-fade-in-out">
          {notification}
        </div>
      )}
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">Shop Products</h1>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>

        {/* Cart summary */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button 
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white text-black' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button 
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white text-black' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
          <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            <FaShoppingCart className="mr-2" />
            <span>Cart ({cart.length} items)</span>
          </button>
        </div>
        
        {/* Filter toggle for mobile */}
        <div className="md:hidden mb-4">
          <button 
            className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter className="mr-2" />
            <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
          </button>
        </div>
        
        {/* Main content with filters and products */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters sidebar - always visible on desktop, toggleable on mobile */}
          <div className={`md:w-1/4 bg-gray-900 p-4 rounded-lg ${showFilters ? 'block' : 'hidden md:block'}`}>
            <h2 className="text-xl font-semibold text-white mb-4">Filters</h2>
            
            <div className="mb-6">
              <h3 className="text-lg text-white mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input 
                      type="radio" 
                      id={category} 
                      name="category" 
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={category} className="text-gray-300 cursor-pointer">{category}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg text-white mb-2">Supermarkets</h3>
              <div className="space-y-2">
                {supermarkets.map((supermarket) => (
                  <div key={supermarket} className="flex items-center">
                    <input 
                      type="radio" 
                      id={supermarket} 
                      name="supermarket" 
                      checked={selectedSupermarket === supermarket}
                      onChange={() => setSelectedSupermarket(supermarket)}
                      className="mr-2"
                    />
                    <label htmlFor={supermarket} className="text-gray-300 cursor-pointer">{supermarket}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg text-white mb-2">Sort By</h3>
              <select 
                className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
            
            <button 
              className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 mt-4 transition"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedSupermarket("All");
                setSearchQuery("");
                setSortOption("featured");
              }}
            >
              Reset Filters
            </button>
          </div>
          
          {/* Products grid */}
          <div className="md:w-3/4">
            {/* Results summary */}
            <div className="mb-4 text-gray-300 flex justify-between items-center">
              <div>
                Showing {paginatedProducts.length} of {sortedProducts.length} results
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {selectedSupermarket !== "All" && ` from ${selectedSupermarket}`}
                {searchQuery && ` for "${searchQuery}"`}
              </div>
              <div className="flex items-center">
                <label htmlFor="itemsPerPage" className="text-sm mr-2">Items per page:</label>
                <select 
                  id="itemsPerPage" 
                  className="bg-gray-800 text-white p-1 rounded"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                  <option value="9">9</option>
                  <option value="12">12</option>
                  <option value="24">24</option>
                </select>
              </div>
            </div>
            
            {sortedProducts.length === 0 ? (
              <div className="bg-gray-900 p-6 rounded text-center">
                <p className="text-gray-400">No products match your current filters.</p>
                <button 
                  className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedSupermarket("All");
                    setSearchQuery("");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="bg-gray-900 p-4 rounded shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative h-48 bg-gray-800 rounded mb-4 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      
                      {product.featured && (
                        <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-white text-xl font-medium">{product.name}</h2>
                      <span className="text-white font-bold">Rs. {product.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mb-4">
                      <span className="text-gray-400">{product.category}</span>
                      <span className="text-gray-400">{product.supermarket}</span>
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition flex items-center justify-center"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              // List view
              <div className="space-y-4">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="bg-gray-900 p-4 rounded shadow-lg hover:shadow-xl transition-all duration-300 flex">
                    <div className="relative w-40 h-40 bg-gray-800 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                      
                      {product.featured && (
                        <div className="absolute top-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="ml-4 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-white text-xl font-medium">{product.name}</h2>
                        <span className="text-white font-bold">Rs. {product.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-400">{product.category}</span>
                        <span className="text-gray-400">{product.supermarket}</span>
                      </div>
                      <div className="flex-grow"></div>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition flex items-center justify-center self-end mt-2"
                      >
                        <FaShoppingCart className="mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <button 
                    className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages).keys()].map(num => (
                    <button 
                      key={num}
                      className={`px-3 py-1 rounded ${currentPage === num + 1 ? 'bg-white text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                      onClick={() => setCurrentPage(num + 1)}
                    >
                      {num + 1}
                    </button>
                  ))}
                  
                  <button 
                    className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}