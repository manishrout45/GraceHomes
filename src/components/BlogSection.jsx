import React from "react";
import { FaRegComment } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Natural Light Highlights Clean Lines and Warm Wood",
    date: "August 7, 2025",
    comments: 1,
    img: "https://img.freepik.com/free-photo/interior-design-with-long-white-curtains-high-angle_23-2149551403.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    excerpt: "Bring out the beauty of simplicity with a design that embraces natural light and timeless materials.",
  },
  {
    id: 2,
    title: "Modern Kitchen and Dining Area with Minimalist Decor",
    date: "August 7, 2025",
    comments: 1,
    img: "https://img.freepik.com/free-photo/interior-design-house-modern-white-kitchen_657883-328.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    excerpt: "Experience the elegance of simplicity with a kitchen and dining space designed for modern living.",
  },
  {
    id: 3,
    title: "Elegant Lobby Space Blending Light and Texture",
    date: "August 7, 2025",
    comments: 1,
    img: "https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683451.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    excerpt: "Step into a lobby that radiates sophistication, where natural light interacts seamlessly with layered textures.",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[#fdf6ee] py-16">
      <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 uppercase mb-2">Recent Updates</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Discover Fresh Ideas & Design News
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="flex items-center text-gray-400 text-sm mb-3 gap-4">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <FaRegComment /> {post.comments} Comment
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
              <button className="text-[#8B5E3C] font-semibold hover:underline flex items-center gap-1">
                →
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
