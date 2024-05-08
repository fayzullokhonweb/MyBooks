import React from "react";
import { BiSolidBookAlt } from "react-icons/bi";

import { BsBookmarkStarFill } from "react-icons/bs";
function Home() {
  return (
    <div className="scroll-smooth align-content relative">
      <div className=" flex flex-col items-center justify-center  ">
        <h2 className="text-7xl mb-3 font-semibold font-serif mt-4">
          Online bookshelf for you
        </h2>
        <p className="text-xl">
          Find & Buy Books Online at low price in Uzbekistan.Wide range of books
          available
        </p>
      </div>
      <div className=" flex absolute left-10 top-72 gap-7">
        <div className="rounded-2xl p-6 shadow-md hover:shadow-2xl  w-64 h-48">
          <h2 className="flex items-center text-xl   font-extrabold gap-2">
            <BiSolidBookAlt className="w-9 h-9 mb-2" />
            20M + Books
          </h2>
          <p className="font-medium">
            20 M + Books Available at low price in MyBooks , find your favorite
            books and Authors here.
          </p>
        </div>
        <div className="  rounded-2xl p-6 shadow-md w-64 h-48 hover:shadow-2xl">
          <h2 className="flex items-center text-xl   font-extrabold gap-2">
            <BsBookmarkStarFill className="w-9 h-9 mb-2" />
            Your Favourite
          </h2>
          <p className="font-medium">
            Bookmark your favourite books, categorize it and read it
            later.Highlight what inspires you in the book.
          </p>
        </div>
      </div>
      <div className="absolute right-8 top-52 hover:animate-bounce">
        <img src="./assets/undraw.svg" alt="undraw-img" className=" h-80 " />
      </div>
    </div>
  );
}

export default Home;
