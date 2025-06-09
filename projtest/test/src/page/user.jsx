import { useState } from "react";

export default function AgenShopProfile() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "081234567890",
    birthday: "1990-05-15",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const tabs = ["Akun Saya", "Alamat", "Wishlist"];

  const addresses = [
    {
      id: 1,
      name: "Budi Santoso",
      phone: "081234567890",
      address: "Jalan Merdeka No. 123",
      area: "Kelurahan Sejahtera, Kecamatan Makmur",
      city: "Jakarta Selatan, DKI Jakarta 12345",
      isDefault: true,
    },
    {
      id: 2,
      name: "Budi Santoso (Kantor)",
      phone: "081234567890",
      address: "Gedung Persada Lantai 5",
      area: "Jalan Sudirman No. 456",
      city: "Jakarta Pusat, DKI Jakarta 10220",
      isDefault: false,
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Susu Ultra Milk 1L",
      price: "Rp 16.500",
      image: "https://via.placeholder.com/60x60",
    },
    {
      id: 2,
      name: "Teh Sosro Kotak 200ml (24 pcs)",
      price: "Rp 65.000",
      image: "https://via.placeholder.com/60x60",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Perubahan berhasil disimpan!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Password baru dan konfirmasi password tidak cocok!");
      return;
    }
    alert("Password berhasil diubah!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleInputChange = (e, formType = "profile") => {
    const { name, value } = e.target;
    if (formType === "profile") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setPasswordData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addToCart = (itemId) => {
    alert(`Item dengan ID ${itemId} ditambahkan ke keranjang!`);
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      
      {/* Banner */}
      <div className="bg-orange-500 text-white py-10 px-5 text-center">
        <h1 className="text-3xl mb-4">Profil Pengguna</h1>
        <p>Kelola akun, alamat pengiriman, dan riwayat belanja Anda</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto my-5 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-2">
              Selamat datang, {formData.name}
            </h2>
            <p className="text-gray-600">Member sejak 12 Januari 2023</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`px-5 py-4 cursor-pointer border-b-4 transition-colors ${
                  activeTab === index
                    ? "border-orange-500 text-orange-500 font-bold"
                    : "border-transparent hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="p-5">
            {/* Personal Information Section */}
            {activeTab === 0 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  Informasi Pribadi
                </h3>
                <form onSubmit={handleFormSubmit} className="mb-8">
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-gray-600">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 text-gray-600">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="birthday"
                      className="block mb-2 text-gray-600"
                    >
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={formData.birthday}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-5 py-2 border-none rounded cursor-pointer font-bold hover:bg-orange-600 transition-colors"
                  >
                    Simpan Perubahan
                  </button>
                </form>

                {/* Password Change Section */}
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  Ubah Password
                </h3>
                <form onSubmit={handlePasswordSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="currentPassword"
                      className="block mb-2 text-gray-600"
                    >
                      Password Saat Ini
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={passwordData.currentPassword}
                      onChange={(e) => handleInputChange(e, "password")}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="newPassword"
                      className="block mb-2 text-gray-600"
                    >
                      Password Baru
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={passwordData.newPassword}
                      onChange={(e) => handleInputChange(e, "password")}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-gray-600"
                    >
                      Konfirmasi Password Baru
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={passwordData.confirmPassword}
                      onChange={(e) => handleInputChange(e, "password")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white px-5 py-2 border-none rounded cursor-pointer font-bold hover:bg-orange-600 transition-colors"
                  >
                    Ubah Password
                  </button>
                </form>
              </div>
            )}

            {/* Address Tab */}
            {activeTab === 1 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  Alamat Pengiriman
                </h3>

                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="border border-gray-200 rounded p-4 mb-4 relative"
                  >
                    <div className="absolute top-4 right-4 flex gap-3">
                      <span className="text-gray-600 cursor-pointer text-sm hover:text-orange-500 transition-colors">
                        Edit
                      </span>
                      <span className="text-gray-600 cursor-pointer text-sm hover:text-orange-500 transition-colors">
                        Hapus
                      </span>
                      {!address.isDefault && (
                        <span className="text-gray-600 cursor-pointer text-sm hover:text-orange-500 transition-colors">
                          Jadikan Utama
                        </span>
                      )}
                    </div>
                    <div className="font-bold mb-2">{address.name}</div>
                    <p className="mb-1">{address.phone}</p>
                    <p className="mb-1">{address.address}</p>
                    <p className="mb-1">{address.area}</p>
                    <p className="mb-3">{address.city}</p>
                    {address.isDefault && (
                      <div className="inline-block bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-xs">
                        Alamat Utama
                      </div>
                    )}
                  </div>
                ))}

                <button className="bg-orange-500 text-white px-5 py-2 border-none rounded cursor-pointer font-bold hover:bg-orange-600 transition-colors">
                  + Tambah Alamat Baru
                </button>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 2 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  Wishlist Saya
                </h3>

                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center py-4 border-b border-gray-100"
                  >
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-15 h-15 object-cover mr-3 rounded"
                    />
                    <div className="flex-grow">
                      <div className="font-bold mb-1">{item.name}</div>
                      <div className="text-orange-500 font-semibold">
                        {item.price}
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="bg-orange-500 text-white px-4 py-2 border-none rounded cursor-pointer font-bold hover:bg-orange-600 transition-colors"
                    >
                      + Keranjang
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
