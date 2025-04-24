import React from "react";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Footer from "../components/Footer";
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligence
          </h1>

          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@Niharika</p>
          <div className="flex space-x-2 text-sm">
            <p>03-04-2025</p>
            <p>12:53</p>
          </div>
        </div>
        <img
          src="https://purpletutor.com/wp-content/uploads/2023/05/Uses-of-Artificial-Intelligence-in-Day-to-Day-Life.webp"
          className="w-full mx-auto mt-8"
          alt=""
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          consequatur ipsam laborum provident? Quia, repudiandae voluptate ad
          facere delectus velit at minima recusandae, sequi ab asperiores
          molestiae voluptatum! Veritatis, debitis.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold ">Comments:</h3>
          <Comment />
          <Comment />
        </div>

        {/* write a comment! */}
        
        <div className="flex items-center justify-between mt-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          />
          <button className="bg-black text-white px-4 py-2 rounded-lg ml-4">
            Submit
          </button>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;