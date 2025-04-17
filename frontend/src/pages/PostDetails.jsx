import React from "react";
import Navbar from "../components/Navbar";
import { BiEdit, BiTime } from "react-icons/bi";
import { MdDelete, MdAccountCircle } from "react-icons/md";
import Footer from "../components/Footer";

const PostDetails = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl leading-tight">
                Revolutionary Applications of Artificial Intelligence in Modern Technology
              </h1>
              <div className="flex gap-2 ml-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hover:text-blue-600">
                  <BiEdit className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hover:text-red-600">
                  <MdDelete className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Author and Date */}
            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center gap-2">
                <MdAccountCircle className="w-6 h-6" />
                <span className="font-medium">Niharika Barnwal</span>
              </div>
              <div className="flex items-center gap-2">
                <BiTime className="w-5 h-5" />
                <time dateTime="2025-04-03" className="text-sm">
                  April 3, 2025 · 12:53 PM
                </time>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://purpletutor.com/wp-content/uploads/2023/05/Uses-of-Artificial-Intelligence-in-Day-to-Day-Life.webp"
              alt="AI Applications in Daily Life"
              className="w-full h-96 object-cover"
            />
          </figure>

          {/* Post Content */}
          <section className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The rapid advancement of artificial intelligence has transformed numerous industries, 
              creating unprecedented opportunities for innovation. From healthcare diagnostics to 
              autonomous systems, AI continues to redefine technological boundaries...
            </p>
            
            {/* Categories */}
            <div className="flex gap-2 mt-8">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Artificial Intelligence
              </span>
            </div>
          </section>

          {/* Comments Section */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Discussion (24)</h2>
            
            {/* Comment List */}
            <div className="space-y-6 mb-8">
              {/* Comment Item */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MdAccountCircle className="w-8 h-8 text-gray-400" />
                    <div>
                      <h3 className="font-medium text-gray-900">John Carter</h3>
                      <p className="text-sm text-gray-500">April 4, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <BiEdit className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <MdDelete className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">
                  This comprehensive overview of AI applications is exactly what our industry needs. 
                  The healthcare examples were particularly insightful!
                </p>
              </div>

              {/* Another Comment */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MdAccountCircle className="w-8 h-8 text-gray-400" />
                    <div>
                      <h3 className="font-medium text-gray-900">Sarah Wilson</h3>
                      <p className="text-sm text-gray-500">April 3, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <BiEdit className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <MdDelete className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">
                  Could you elaborate more on the ethical considerations mentioned in the article? 
                  That would make for a fascinating follow-up piece.
                </p>
              </div>
            </div>

            {/* Comment Form */}
            <form className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-900 mb-4">Add your comment</h3>
              <textarea
                placeholder="Share your thoughts..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PostDetails;