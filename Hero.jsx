 import { useState } from 'react'; 

export default function Hero() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`You are searching for: ${searchQuery}`);
    } else {
      alert('Please enter something to search for.');
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <section 
      className="h-96 bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url('/images/wedding.jpeg')" }}
    >
      <div className="bg-black/40 p-8 rounded text-center text-white max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Plan Your Perfect Wedding</h2>
        <p className="mb-4">Find the best venues, makeup artists, photographers & more</p>
        <div className="flex w-full max-w-md bg-white rounded-md shadow-lg mx-auto">
          <input
            type="text"
            className="w-full p-3 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Search for services..."
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            onKeyPress={handleKeyPress} 
          />
          <button
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-r-md hover:bg-pink-600 transition"
            onClick={handleSearch} 
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}