import React from 'react'
import HomePosts from '../components/HomePosts'

const home = () => {
  return (
    <div className='px-8 md:px-[200px]'>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
    </div>
  )
}

export default home