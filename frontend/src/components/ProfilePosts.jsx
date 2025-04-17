const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://purpletutor.com/wp-content/uploads/2023/05/Uses-of-Artificial-Intelligence-in-Day-to-Day-Life.webp" alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      10 Uses of Artificial Intelligence in Day to Day Life
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@Niharika</p>
       <div className="flex space-x-2 text-sm">
       <p>03-04-2025</p>
       <p>12:53</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">Artificial Intelligence (AI) and its multiple sub-domains are being increasingly employed in various industries and businesses to aid in repetitive processes. But there has been a burgeoning interest from established tech giants and startups in using AI to make everyday life a walk in the park.</p>
    </div>
    </div>
  )
}

export default ProfilePosts