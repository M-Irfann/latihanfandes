import React, { useState } from 'react';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      description: "Premium Audio • Bluetooth 5.0",
      price: 79.99,
      originalPrice: 99.99,
      quantity: 2,
      image: "https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=🎧",
      discount: 20,
      inStock: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description: "Health Tracking • GPS • Waterproof",
      price: 199.99,
      originalPrice: null,
      quantity: 1,
      image: "https://via.placeholder.com/100x100/10B981/FFFFFF?text=⌚",
      discount: 0,
      inStock: true
    },
    {
      id: 3,
      name: "Mechanical Gaming Keyboard",
      description: "RGB Backlit • Cherry MX Switches",
      price: 129.99,
      originalPrice: null,
      quantity: 1,
      image: "https://via.placeholder.com/100x100/F59E0B/FFFFFF?text=⌨️",
      discount: 0,
      inStock: true
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 20.00;
  const shipping = 0;
  const total = subtotal - discount + shipping;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const MinusIcon = () => (
    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
    </svg>
  );

  const PlusIcon = () => (
    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
    </svg>
  );

  const TrashIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
    </svg>
  );

  const LockIcon = () => (
    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
    </svg>
  );

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
    // Add checkout logic here
  };

  const handleContinueShopping = () => {
    console.log('Continue shopping clicked');
    // Add navigation logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <div className="bg-orange-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
              {totalItems} Items
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border-2 border-white shadow-md"
                    />
                    {item.inStock && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                        ●
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">${item.price}</span>
                      {item.originalPrice && (
                        <>
                          <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                            {item.discount}% OFF
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="flex items-center bg-white rounded-lg border border-gray-300">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-50 rounded-l-lg transition-colors"
                    >
                      <MinusIcon />
                    </button>
                    <input 
                      type="number" 
                      value={item.quantity} 
                      min="1" 
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-16 py-2 text-center border-0 focus:outline-none focus:ring-0"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-50 rounded-r-lg transition-colors"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Subtotal ({totalItems} items)</span>
              <span className="text-lg font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-lg font-semibold text-gray-900">FREE</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Discount</span>
              <span className="text-lg font-semibold text-gray-900">-${discount.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleCheckout}
              className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Proceed to Checkout
            </button>
            <button 
              onClick={handleContinueShopping}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}