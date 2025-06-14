import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    namalengkap: '',
    email: '',
    username:'',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Login successful!\nEmail: ${formData.email}`);
      
      // Reset form after successful login
      setFormData({ email: '', password: '' });
    } catch (error) {
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here');
  };

  const handleSignUp = () => {
    alert('Sign up functionality would be implemented here');
  };

  return (
    <div className="font-sans flex  justify-center items-center min-h-screen m-0 bg-orange-50">


      {/* Login Container */}
      <div className="bg-white rounded-2xl p-8 w-96 shadow-xl border-2 border-orange-500 self-center mt-20">
        <h1 className="text-center text-orange-500 text-2xl font-bold mt-0 mb-5">Login</h1>
        
        <div className="space-y-5">

          {/* Full Name Field */}
          <div className="mb-5">
            <label htmlFor="FullName" className="block mb-2 font-bold text-orange-500">
              Full Name
            </label>
            <input 
              type="text" 
              id="FullName" 
              name="FullName" 
              value={formData.namalengkap}
              onChange={handleInputChange}
              required
              className={`w-full p-3 border rounded-md box-border text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter Full Name"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Number Field */}
          <div className="mb-5">
            <label htmlFor="number" className="block mb-2 font-bold text-orange-500">
              Phone Number
            </label>
            <input 
              type="number" 
              id="number" 
              name="number" 
              value={formData.namalengkap}
              onChange={handleInputChange}
              required
              className={`w-full p-3 border rounded-md box-border text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter Phone Number"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-bold text-orange-500">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full p-3 border rounded-md box-border text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          {/* Password Field */}
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 font-bold text-orange-500">
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password}
              onChange={handleInputChange}
              required
              className={`w-full p-3 border rounded-md box-border text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          
          {/* Login Button */}
          <div className="flex justify-center">
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`text-white border-none rounded-md py-3 px-5 text-base cursor-pointer w-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                isLoading 
                  ? 'bg-orange-300 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in...
                </div>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 text-center space-y-2">
          
          <p className="text-sm text-gray-600">
            have an account? 
            <button 
              onClick={handleSignUp}
              className="text-orange-500 hover:text-orange-600 font-medium ml-1 bg-transparent border-none cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;