import React, { useState } from 'react';

const ProductDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black');

  const colors = [
    { name: 'Black', bgClass: 'bg-gray-800', isSelected: true },
    { name: 'Navy Blue', bgClass: 'bg-blue-700', isSelected: false },
    { name: 'Red', bgClass: 'bg-red-600', isSelected: false }
  ];

  const handleQuantityChange = (action) => {
    if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  const handleColorSelect = (colorName) => {
    setSelectedColor(colorName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="py-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p>Immerse yourself in exceptional sound quality with our Premium Wireless Headphones. Designed for audiophiles and casual listeners alike, these headphones combine cutting-edge technology with superior comfort for an unmatched listening experience.</p>
                
                <p>The advanced active noise cancellation technology uses multiple microphones to detect and neutralize outside noise, creating a peaceful listening environment even in the busiest of settings. Switch between Ambient Mode when you need to hear your surroundings and full ANC when you want to focus solely on your audio.</p>
                
                <p>With up to 30 hours of battery life on a single charge, these headphones are perfect for long commutes, flights, or work sessions. When you do need to recharge, fast charging gives you 5 hours of playback from just 10 minutes of charging.</p>
              </div>
              
              <div className="space-y-4">
                <p>The ergonomic design and premium materials ensure lasting comfort, even during extended use. The memory foam ear cushions conform to your ears, while the adjustable headband provides a secure yet comfortable fit for any head size.</p>
                
                <p>Control your audio experience with intuitive touch controls on the ear cups or use voice commands through your preferred voice assistant. The multi-point connection allows you to seamlessly switch between two connected devices without missing a beat.</p>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-semibold text-orange-600 mb-2">Key Features:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Active Noise Cancellation Technology</li>
                    <li>• 30-hour battery life with fast charging</li>
                    <li>• Multi-point Bluetooth connection</li>
                    <li>• Touch controls and voice assistant support</li>
                    <li>• Premium memory foam cushions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="py-5">
            <div className="border-b border-gray-200 pb-5 mb-5">
              <div className="flex justify-between mb-3">
                <div className="font-medium">Alex M.</div>
                <div className="text-gray-500">April 15, 2025</div>
              </div>
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p>These headphones are absolutely worth every penny! The noise cancellation is the best I've experienced, and I've tried many premium brands. Battery life is impressive too - I only need to charge them once a week with daily use. Sound quality is balanced and detailed with just the right amount of bass.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-5 mb-5">
              <div className="flex justify-between mb-3">
                <div className="font-medium">Sarah J.</div>
                <div className="text-gray-500">April 2, 2025</div>
              </div>
              <div className="text-yellow-400 mb-3">★★★★☆</div>
              <p>Great headphones overall. The sound quality is excellent and the noise cancellation works well in most environments. My only complaint is that they're a bit tight on my head after a few hours of wear. Hoping they'll loosen up over time. The carrying case is a nice bonus and feels very premium.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-5">
              <div className="flex justify-between mb-3">
                <div className="font-medium">Marcus T.</div>
                <div className="text-gray-500">March 28, 2025</div>
              </div>
              <div className="text-yellow-400 mb-3">★★★☆☆</div>
              <p>Sound quality is excellent, but I'm disappointed with the touch controls. They're too sensitive and I often accidentally pause or skip tracks when adjusting the fit. Battery life is as advertised though, which is impressive. Would be 5 stars if the controls were better designed.</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-orange-50 text-gray-800 font-sans leading-relaxed pt-5">
      {/* Product Container */}
      <div className="flex flex-wrap p-5 m-5 bg-white rounded-2xl">
        {/* Product Gallery */}
        <div className="flex-1 min-w-80 pr-5 md:pr-5 mb-8 md:mb-0">
          <div className="w-full h-96 bg-gray-100 rounded border border-gray-200 mb-4 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop" 
              alt="Premium Wireless Headphones" 
              className="max-w-full max-h-full object-contain" 
            />
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-20 h-20 rounded bg-gray-100 border border-gray-200 cursor-pointer hover:border-orange-600 overflow-hidden flex items-center justify-center">
                <img 
                  src={`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop`} 
                  alt={`Headphones view ${index}`} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="flex-1 min-w-80">
          <h1 className="text-3xl mb-3 text-gray-900 font-semibold">Premium Wireless Noise-Cancelling Headphones</h1>
          
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 text-lg mr-3">★★★★☆</div>
            <div className="text-gray-600 text-sm">4.2 (128 reviews)</div>
          </div>
          
          <div className="mb-4">
            <span className="text-3xl font-bold text-orange-600">$249.99</span>
            <span className="text-gray-500 text-xl line-through ml-3">$329.99</span>
            <span className="bg-red-600 text-white px-2 py-1 rounded text-sm ml-3 font-medium">25% OFF</span>
          </div>
          
          <p className="text-green-600 font-medium mb-5">In Stock - Ships within 24 hours</p>
          
          <div className="mb-5">
            <h3 className="mb-3 text-lg font-semibold">Color</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <div 
                  key={color.name}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color.name ? 'border-orange-600' : 'border-transparent hover:border-orange-600'
                  } ${color.bgClass}`}
                  title={color.name}
                  onClick={() => handleColorSelect(color.name)}
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center mb-5">
            <h3 className="mr-4 text-lg font-semibold">Quantity</h3>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button 
                className="bg-gray-100 hover:bg-gray-200 w-10 h-10 text-lg font-medium"
                onClick={() => handleQuantityChange('decrease')}
              >
                -
              </button>
              <input 
                type="text" 
                className="w-15 h-10 text-center text-base border-l border-r border-gray-300 focus:outline-none" 
                value={quantity} 
                readOnly 
              />
              <button 
                className="bg-gray-100 hover:bg-gray-200 w-10 h-10 text-lg font-medium"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex gap-4 mb-5 flex-col sm:flex-row">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded text-base font-medium transition-colors">
              Add to Cart
            </button>
            <button className="bg-transparent border border-orange-600 text-orange-600 hover:bg-blue-50 px-6 py-3 rounded text-base font-medium transition-colors">
              Buy Now
            </button>
          </div>
          
          <div className="flex gap-5 text-gray-600 mb-5 justify-between sm:justify-start">
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
              <span>♡</span> Add to Wishlist
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-600">
              <span>✉</span> Share
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <section className="m-5 bg-white p-5 rounded-2xl">
        <div className="flex border-b border-gray-300 mb-5 ">
          {[
            { id: 'description', label: 'Description' },
            { id: 'reviews', label: 'Reviews' }
          ].map((tab) => (
            <div 
              key={tab.id}
              className={`px-5 py-3 cursor-pointer font-medium ${
                activeTab === tab.id 
                  ? 'border-b-2 border-orange-600 text-orange-600' 
                  : 'hover:text-orange-600'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        
        {renderTabContent()}
      </section>
      
      {/* Similar Products */}
      <section className="m-10">
        <h2 className="text-2xl mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-15 after:h-1 after:bg-orange-600">
          You May Also Like
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop" 
                alt="Wireless Earbuds" 
                className="max-w-4/5 max-h-4/5 object-contain" 
              />
            </div>
            <div className="p-4">
              <div className="text-base font-medium mb-1 h-11 overflow-hidden">Premium Wireless Earbuds with Charging Case</div>
              <div className="text-lg font-bold text-orange-600">$129.99</div>
              <div className="text-yellow-400 text-sm mt-1">★★★★★</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop" 
                alt="Bluetooth Speaker" 
                className="max-w-4/5 max-h-4/5 object-contain" 
              />
            </div>
            <div className="p-4">
              <div className="text-base font-medium mb-1 h-11 overflow-hidden">Portable Bluetooth Speaker with 360° Sound</div>
              <div className="text-lg font-bold text-orange-600">$89.99</div>
              <div className="text-yellow-400 text-sm mt-1">★★★★☆</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;