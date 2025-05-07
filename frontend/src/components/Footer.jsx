const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col items-start space-y-4 md:space-y-0 justify-between text-sm md:text-md py-8">
      <div className="flex flex-col text-white">
        <p>Featured Blogs</p>
        <p>Most viewed</p>
        <p>Readers Choice</p>
      </div>

      <div className="flex flex-col text-white">
        <p>Forum</p>
        <p>Support</p>
        <p>Recent Posts</p>
      </div>

      <div className="flex flex-col text-white">
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Terms and Conditions</p>
        <p>Terms of service</p>
      </div>
    </div>
    <p className="py-2  text-center text-white  text-sm pb-6 bg-black">All rights reserved @ExpressIt 2025</p>
    </>
    
  )
}

export default Footer