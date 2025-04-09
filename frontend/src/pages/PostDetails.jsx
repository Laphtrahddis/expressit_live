import React from "react";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Footer from "../components/Footer";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xt fond-bold text-black mid:text-3xl">
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
        {/* <div>//START HERE press undo and start fro this line 40:24</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
