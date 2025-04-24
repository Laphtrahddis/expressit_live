import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const Comment = () => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">John Doe</p>
                  <div className="flex space-x-2 text-sm">
                    <p>03-04-2025</p>
                    <p>12:53</p>
                    <div className="flex items-center justify-center space-x-2">
                      <p>
                        <BiEdit />
                      </p>
                      <p>
                        <MdDelete />
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                  consequatur ipsam laborum provident? Quia, repudiandae voluptate
                  ad facere delectus velit at minima recusandae, sequi ab asperiores
                  molestiae voluptatum! Veritatis, debitis.
                </p>
              </div>
  )
}

export default Comment