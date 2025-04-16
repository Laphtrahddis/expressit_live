import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CreatePost = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-6 md:px-[200px] mt-8'>
            <h1 className='font-bold md:text-2xl text-xl'>Create a Post</h1>
            <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4" action="">
                <input type="text" className='px-4 py-2 outline-none' placeholder='Enter post title'/>
                <input type="file" className='px-4'/>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <label htmlFor="category" className='font-semibold'>Select Category</label>
                        <select name="category" id="category" className='px-4 py-2 outline-none'>
                            <option value="tech">Tech</option>
                            <option value="ai">AI</option>
                            <option value="life">Life</option>
                        </select>

                    </div>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default CreatePost