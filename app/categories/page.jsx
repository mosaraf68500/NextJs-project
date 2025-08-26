"use client";
import React, { useState } from "react";
import Link from "next/link";


const imageUrl = "https://i.ibb.co/MyPz8Xq4/download.jpg";

// All categories (same image for all)
const allCategories = [
  { id: 1, name: "Smartphones", image: imageUrl, section: "Electronics" },
  { id: 2, name: "Laptops", image: imageUrl, section: "Electronics" },
  { id: 3, name: "Headphones", image: imageUrl, section: "Electronics" },
  { id: 4, name: "Tablets", image: imageUrl, section: "Electronics" },

  { id: 5, name: "Men’s Clothing", image: imageUrl, section: "Fashion" },
  { id: 6, name: "Women’s Clothing", image: imageUrl, section: "Fashion" },
  { id: 7, name: "Accessories", image: imageUrl, section: "Fashion" },
  { id: 8, name: "Footwear", image: imageUrl, section: "Fashion" },

  { id: 9, name: "Appliances", image: imageUrl, section: "Home & Kitchen" },
  { id: 10, name: "Furniture", image: imageUrl, section: "Home & Kitchen" },
  { id: 11, name: "Cookware", image: imageUrl, section: "Home & Kitchen" },
  { id: 12, name: "Decor", image: imageUrl, section: "Home & Kitchen" },

  {
    id: 13,
    name: "Fitness Gear",
    image: imageUrl,
    section: "Sports & Outdoors",
  },
  { id: 14, name: "Camping", image: imageUrl, section: "Sports & Outdoors" },
  { id: 15, name: "Bikes", image: imageUrl, section: "Sports & Outdoors" },
  {
    id: 16,
    name: "Sports Equipment",
    image: imageUrl,
    section: "Sports & Outdoors",
  },

  { id: 17, name: "Skincare", image: imageUrl, section: "Beauty" },
  { id: 18, name: "Makeup", image: imageUrl, section: "Beauty" },
  { id: 19, name: "Fragrances", image: imageUrl, section: "Beauty" },
  { id: 20, name: "Haircare", image: imageUrl, section: "Beauty" },
];

const CategoryCard = ({ category }) => (
  <a
    href={`/products`}
    className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
  >
    <div className="overflow-hidden">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
        {category.name}
      </h3>
      <span className="text-sm text-blue-500 hover:underline mt-2 block">
        Shop Now →
      </span>
    </div>
  </a>
);

const CategorySection = ({ title, categories }) => (
  <div className="mb-16 animate-fadeIn">
    <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
    </div>
  </div>
);

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCategories = allCategories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const grouped = allCategories.reduce((acc, cat) => {
    if (!acc[cat.section]) acc[cat.section] = [];
    acc[cat.section].push(cat);
    return acc;
  }, {});

  return (
    <div >
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-4">
            Categories
          </h1>
          <div className="flex justify-center items-center space-x-2 text-lg">
            <Link
              href="/" // <-- use href instead of to
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Home
            </Link>
            <span>||</span>
            <Link href="" className="text-[#0AB99D] font-semibold">
              Categories
            </Link>
          </div>
        </div>
      </section>
      <div className="w-11/12 mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Shop by Category
      </h1>

      {/* Search Input */}
      <div className="mb-12 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Render based on search */}
      {searchTerm ? (
        filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No categories found.</p>
        )
      ) : (
        <>
          {Object.entries(grouped).map(([section, cats]) => (
            <CategorySection key={section} title={section} categories={cats} />
          ))}
          {!showAll && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                View All Categories
              </button>
            </div>
          )}
        </>
      )}
      </div>
    </div>
  );
}
