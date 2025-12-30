import React, { useEffect } from "react";
import { FaRegComment } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Why Location Matters When Choosing Your Dream Home",
    date: "August 7, 2025",
    comments: 2,
    img: "https://img.freepik.com/free-photo/beautiful-landscape-with-hills_23-2149721827.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "Discover how location impacts property value, lifestyle convenience, and long-term investment returns.",
  },
  {
    id: 2,
    title: "Key Factors That Define Quality Construction in Real Estate",
    date: "August 7, 2025",
    comments: 3,
    img: "https://img.freepik.com/free-photo/medium-shot-low-angle-view-engineer-architect-looking-plans_23-2148233796.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "From foundation strength to material selection, learn what truly defines quality construction in modern projects.",
  },
  {
    id: 3,
    title: "Residential vs Commercial Property: Where Should You Invest?",
    date: "August 7, 2025",
    comments: 1,
    img: "https://img.freepik.com/premium-photo/gate-near-entrance-into-modern-residencial-building_250132-13272.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    excerpt:
      "A clear comparison of residential and commercial investments to help you make informed property decisions.",
  },
];

export default function BlogSection() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-up, .fade-right");

    const handleFade = () => {
      fadeElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          // add in-view class with stagger delay
          setTimeout(() => el.classList.add("in-view"), index * 150);
        }
      });
    };

    // Run once on load (for elements already in view)
    handleFade();

    // Run on scroll
    window.addEventListener("scroll", handleFade);
    return () => window.removeEventListener("scroll", handleFade);
  }, []);

  return (
    <section className="w-full bg-[#fdf6ee] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 uppercase mb-2">
            Latest Insights
          </p>
          <h2 className="fade-right text-3xl md:text-4xl font-semibold">
            Real Estate News & Builder Insights
          </h2>
          <p className="fade-up text-gray-600 max-w-2xl mx-auto mt-2">
            Stay updated with the latest trends, tips, and insights from the world of real estate. Learn how to make informed property investments and smart decisions.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition hover:-translate-y-1 duration-300 fade-up"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center text-gray-400 text-sm gap-4">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <FaRegComment /> {post.comments} Comments
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                <button className="text-[#8B5E3C] font-semibold hover:underline flex items-center gap-1 mt-2">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
