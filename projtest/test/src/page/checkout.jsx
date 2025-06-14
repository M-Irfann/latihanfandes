import React, { useState, useEffect } from "react";

const CheckoutPage = () => {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
  });

  const [totals, setTotals] = useState({
    subtotal: 175000,
    tax: 15000,
    shipping: 10000,
    total: 200000,
  });

  // Update totals when shipping method changes
  useEffect(() => {
    const shippingCost = shippingMethod === "express" ? 20000 : 10000;
    const newTotal = totals.subtotal + totals.tax + shippingCost;

    setTotals((prev) => ({
      ...prev,
      shipping: shippingCost,
      total: newTotal,
    }));
  }, [shippingMethod, totals.subtotal, totals.tax]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrderComplete = () => {
    alert("Order completed successfully!");
    // Here you would typically send the order data to your backend
    console.log("Order data:", {
      formData,
      shippingMethod,
      paymentMethod,
      totals,
    });
  };

  const formatCurrency = (amount) => {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen pt-20">
      <div className="min-h-screen px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Checkout</h1>
          <p className="text-gray-600">
            Complete your purchase in just a few steps
          </p>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Forms */}
          <div className="xl:col-span-3 lg:col-span-2 space-y-8">
            {/* Shipping Address Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Shipping Address
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="address"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                    placeholder="Enter your street address"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="postal-code"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postal-code"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Method Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Shipping Method
                </h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={shippingMethod === "standard"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="text-orange-600 focus:ring-orange-500 mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">
                        Standard Shipping
                      </span>
                      <span className="text-gray-600">Rp 10.000</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      5-7 business days
                    </p>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingMethod === "express"}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="text-orange-600 focus:ring-orange-500 mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">
                        Express Shipping
                      </span>
                      <span className="text-gray-600">Rp 20.000</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      1-2 business days
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <input
                    type="radio"
                    name="payment"
                    value="bank-transfer"
                    checked={paymentMethod === "bank-transfer"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-600 focus:ring-orange-500 mr-3"
                  />
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-orange-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2 5h20v4H2V5zm0 6h20v8H2v-8zm2-4h16v2H4V7z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">
                      Bank Transfer
                    </span>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={paymentMethod === "credit-card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-600 focus:ring-orange-500 mr-3"
                  />
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">
                      Credit Card
                    </span>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <input
                    type="radio"
                    name="payment"
                    value="e-wallet"
                    checked={paymentMethod === "e-wallet"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-600 focus:ring-orange-500 mr-3"
                  />
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">
                      Digital Wallet
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="xl:col-span-2 lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-6 animate-slide-up">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h2>

              {/* Product List */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="font-medium text-gray-800">Product 1</h3>
                    <p className="text-sm text-gray-500">Qty: 2</p>
                  </div>
                  <span className="font-medium text-gray-800">Rp 100.000</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="font-medium text-gray-800">Product 2</h3>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                  </div>
                  <span className="font-medium text-gray-800">Rp 75.000</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatCurrency(totals.subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>{formatCurrency(totals.tax)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{formatCurrency(totals.shipping)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-orange-600">
                      {formatCurrency(totals.total)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleOrderComplete}
                className="w-full bg-gradient-to-r from-orange-00 to-orange-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-400 hover:to-orange-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-orange-300 focus:outline-none"
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                  Complete Order
                </div>
              </button>

              {/* Security Notice */}
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-green-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                  </svg>
                  <span className="text-sm text-green-700">
                    Secure SSL Payment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
