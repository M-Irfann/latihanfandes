import React, { useState } from 'react';

const AgenShop = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam officiis accusantium aliquid aperiam veritatis deserunt, quos consectetur neque quaerat numquam facilis optio vitae dolor quibusdam culpa repellendus sequi quo.",
      rating: "★★★★☆",
      reviewCount: 142,
      price: "Rp 12.000.000",
      image: "https://via.placeholder.com/150x150?text=Product+1"
    },
    {
      id: 2,
      title: "Another great product with amazing features and quality materials",
      rating: "★★★★★",
      reviewCount: 89,
      price: "Rp 8.500.000",
      image: "https://via.placeholder.com/150x150?text=Product+2"
    },
    {
      id: 3,
      title: "Premium quality product with excellent customer reviews",
      rating: "★★★★☆",
      reviewCount: 256,
      price: "Rp 15.750.000",
      image: "https://via.placeholder.com/150x150?text=Product+3"
    }
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLogin = () => {
    alert('Login/Register clicked!');
  };

  const handleBuyNow = (productId) => {
    alert(`Buy Now clicked for product ${productId}`);
  };

  return (
    <div className="max-w-full mx-auto bg-gray-200">
      {/* Header */}
      

      {/* Banner */}
      <div className="pt-40 pb-20 px-8 bg-gradient-to-br from-orange-600 to-orange-400 text-white text-center rounded-b-3xl mb-8">
        <h1 className="text-4xl font-bold mb-4">Belanja Hemat Pasti Puas</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6 opacity-90">
          Lengkapi kebutuhan bulanan Anda dan nikmati gratis ongkir setiap pembelian.
        </p>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex border border-gray-300 rounded-xl p-0 h-44 overflow-hidden bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:border-orange-600"
          >
            {/* Product Image */}
            <div className="flex bg-gray-50 w-2/5 h-full items-center justify-center p-4 relative overflow-hidden">
              <img 
                src={product.image}
                alt="Product Image" 
                className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Product Text */}
            <div className="flex flex-col w-3/5 h-full p-4 gap-2 relative">
              <p className="text-base font-semibold text-left overflow-hidden line-clamp-2 leading-5 mb-1">
                {product.title}
              </p>
              
              <div className="flex items-center gap-1 mb-1">
                <div className="text-yellow-400 text-sm">{product.rating}</div>
                <div className="text-xs text-gray-500">({product.reviewCount})</div>
              </div>
              
              <div className="text-base font-semibold text-gray-800">{product.price}</div>
              
              <button 
                onClick={() => handleBuyNow(product.id)}
                className="absolute bottom-4 right-4 bg-orange-600 text-white border-none rounded-2xl px-4 py-2 text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-orange-700 hover:-translate-y-0.5"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for line clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AgenShop;