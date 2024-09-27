import { useState } from "react";




function Navbar(){

    //state management for clicking toggle button
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        
        <div className="bg-[#f3f0ff] z-10  py-4 px-10 sticky top-0 shadow-lg flex justify-between items-center w-full">
            <div>
                <h1 className="text-xl font-bold">FashionHub</h1>
            </div>

           
            {/* Desktop navigation */}
            <ul className="justify-between gap-12 font-semibold hidden md:flex">
                <li className="p-2 hover:text-blue-700">Home</li>
                <li className="p-2 hover:text-blue-700 border-none rounded-md">Categories</li>
                <li className=" p-2 hover:text-blue-700 border-none rounded-md">Trending</li>
                <li className="p-2 hover:text-blue-700 border-none rounded-md">Reviews</li>
                <li className="p-2 hover:text-blue-700 border-none rounded-md">Contacts</li>
            </ul>

            {/* Nav Icons */}
            <div className=" hidden md:flex md:gap-6">
              {/* profileIcon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              {/* BagIcon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

            </div>

        

            {/* Toggle button */}
            <button onClick={toggleMenu} className="md:hidden" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>


          {/* Mobile navigation */}
        <div
          className={`fixed top-16 right-0 h-screen min-w-[50%] bg-[#f3f0ff] flex flex-col items-center 
            gap-4 font-semibold text-lg transition-transform duration-500 ease-in-out transform 
            ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          <li className="list-none w-full text-center p-2">Home</li>
          <li className="list-none w-full text-center p-2">Categories</li>
          <li className="list-none w-full text-center p-2">Trending</li>
          <li className="list-none w-full text-center p-2">Review</li>
          <li className="list-none w-full text-center p-2">Contacts</li>
        </div>

            


           
               
        </div>
        
    )
}

export default Navbar