import React, { useState } from 'react';

export default function AgenShop() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones with Noise Cancellation",
      rating: 4,
      reviewCount: 142,
      price: 79.99,
      image: null
    },
    {
      id: 2,
      title: "Smart Watch with Health Monitoring",
      rating: 5,
      reviewCount: 89,
      price: 199.99,
      image: null
    },
    {
      id: 3,
      title: "Gaming Mechanical Keyboard RGB",
      rating: 4,
      reviewCount: 256,
      price: 129.99,
      image: null
    },
    {
      id: 4,
      title: "Wireless Charging Pad Fast Charge",
      rating: 3,
      reviewCount: 73,
      price: 39.99,
      image: null
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  const handleLogin = () => {
    console.log('Login clicked');
    // Add login functionality here
  };

  return (
    <div className="bg-gray-100 text-gray-800 font-sans pt-20">

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 px-4 pb-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex border border-gray-300 rounded-xl h-44 overflow-hidden bg-white transition-all duration-300 hover:shadow-lg hover:border-orange-500 shadow-sm cursor-pointer"
          >
            {/* Product Image */}
            <div className="flex items-center justify-center w-2/5 h-full bg-gray-50 p-4 relative overflow-hidden">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                  No Image
                </div>
              )}
            </div>
            
            {/* Product Text */}
            <div className="flex flex-col w-3/5 h-full p-4 gap-2 relative">
              <p className="text-base font-semibold text-left line-clamp-2 leading-tight mb-1">
                {product.title}
              </p>
              
              <div className="flex items-center gap-1 mb-1">
                <div className="flex text-sm">
                  {renderStars(product.rating)}
                </div>
                <div className="text-xs text-gray-600">({product.reviewCount})</div>
              </div>
              
              <div className="text-lg font-bold text-gray-800">
                ${product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}