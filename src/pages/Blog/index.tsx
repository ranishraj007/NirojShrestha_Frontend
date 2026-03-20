import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogStaticData from "@/components/constaintData/BlgoStaticData";
import ArticleCard from "@/components/Homepage/HomepageCards/ArticleCard";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("All");
  
  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(BlogStaticData.map((item) => item.category)))];

  // Filter blogs based on active tab
  const filteredBlogs = activeTab === "All" 
    ? BlogStaticData 
    : BlogStaticData.filter(blog => blog.category === activeTab);

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero section with bg image and text above */}
      <div 
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-[20px] text-white gap-[16px]">
          <h1 className="text-[36px] md:text-[56px] font-[700] leading-[110%]">
            Our Insights & Stories
          </h1>
          <p className="text-[16px] md:text-[24px] font-[400] max-w-[800px]">
            Explore our latest articles, news, and insights covering everything from community initiatives to sustainable development.
          </p>
        </div>
      </div>

      {/* Categories Tab Below the Hero Section */}
      <div className="w-full bg-[#f9f9f9] py-[20px] px-[20px] flex justify-center">
        <div className="flex flex-wrap gap-[10px] md:gap-[20px] justify-center">
          {categories.map((cat, index) => (
            <button 
              key={index}
              onClick={() => setActiveTab(cat)}
              className={`px-[24px] py-[10px] rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat 
                  ? "bg-[#2E7D32] text-white shadow-md" 
                  : "bg-white text-[#2E7D32] border border-[#2E7D32] hover:bg-[#2E7D321A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blogs list section */}
      <div className="w-full px-[20px] md:px-[40px] lg:px-[80px] py-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Link to={blog.link} key={index} className="flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
                <ArticleCard 
                  article={{
                    title: blog.title,
                    description: blog.short_description,
                    category: blog.category,
                    date: blog.date,
                    author: "Admin",
                    image: blog.image,
                    link: blog.link
                  }} 
                />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-[#424242] text-[20px] py-[40px]">
              No blogs found for this category.
            </div>
          )}
      </div>
    </div>
  );
};

export default Blog;