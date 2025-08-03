import Image from "next/image";
import React from "react";
import Link from "next/link";
import { blogPosts, getAllCategories, getFeaturedBlogs } from "@/data/blogs";

const Blogs = () => {
  const categories = getAllCategories();
  const featuredBlogs = getFeaturedBlogs();
  const regularBlogs = blogPosts.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Design Insights & Inspiration
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Discover the latest trends, tips, and ideas to transform your space into a beautiful home
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Blog Section */}
      {featuredBlogs.length > 0 && (
        <div className="py-16 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-heading">Featured Blog</h2>
              <div className="ml-4 h-1 bg-primary rounded-full flex-grow max-w-20"></div>
            </div>
            
            {featuredBlogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-2xl shadow-default overflow-hidden hover:shadow-primary/25 transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"  
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute top-4 left-4 text-sm text-white bg-primary px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-sm text-primary bg-soft px-3 py-1 rounded-full inline-block w-fit mb-4 font-medium">
                      {blog.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-heading mb-4 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {blog.date}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                    <Link href={`/blogs/${blog.slug}`}>
                      <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                        Read Full Blog
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Blogs Grid */}
      <div className="py-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading">Latest Blogs</h2>
            <div className="ml-4 h-1 bg-primary rounded-full flex-grow max-w-20"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                <article
                  className="bg-white rounded-xl shadow-default overflow-hidden hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary bg-soft px-3 py-1 rounded-full font-medium">
                        {blog.category}
                      </span>
                      <span className="text-gray-500 text-sm">{blog.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-heading mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {blog.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                          <p className="text-xs text-gray-500">{blog.date}</p>
                        </div>
                      </div>
                      
                      <Link href={`/blogs/${blog.slug}`}>
                        <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center group">
                          Read More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Follow Section */}
      <div className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Connect With Us
            </h3>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Follow us on social media for daily design inspiration, project showcases, and the latest interior trends
            </p>
          </div>

          {/* Social Media Cards */}            
          <div className="grid sm:grid-cols-1 max-w-sm mx-auto max-md:w-[70%]">
            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/our__design/?igsh=MThrcWF4anFsbmR3OQ%3D%3D&utm_source=qr#"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2">Instagram</h4>
                </div>
                <svg className="w-6 h-6 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              {/* <p className="text-white/90 text-sm mb-4">Daily design inspiration & behind-the-scenes content</p> */}
              {/* <div className="flex items-center text-white/80 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">@our__design</span>
              </div> */}
            </a>

            {/* Facebook Card */}
            {/* <a 
              href="https://facebook.com/ourdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <h4 className="text-white md:text-2xl text-xl font-bold mb-2">Facebook</h4>
                </div>
                <svg className="w-6 h-6 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/90 text-sm mb-4">Project galleries & design tips for your home</p>
              <div className="flex items-center text-white/80 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">Our Design</span>
              </div>
            </a> */}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-soft rounded-full">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-primary font-medium">Join with many design enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
