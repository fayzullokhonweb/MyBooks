import React, { useState, useEffect } from "react";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { FaBookmark } from "react-icons/fa";

function ProductsList() {
  const [allBooks, setallBooks] = useState([]);

  useEffect(() => {
    async function getMovie() {
      const querySnapshot = await getDocs(collection(db, "books"));
      const books = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setallBooks(books);
    }
    getMovie();
  }, []); // Empty dependency array to run effect only once

  const MovieList = ({ books }) => {
    return (
      <ul className="flex flex-col align-content gap-3">
        {books.map((book) => (
          <li
            className="max-h group flex p-6 gap-9 hover:shadow-2xl hover:rounded-2xl relative "
            key={book.id}
          >
            <img
              className="max-w-md w-full"
              src={book.imgUrl}
              alt={book.title}
            />

            <div className="py-6">
              <div className="flex flex-col text-left mb-11">
                <h2 className="text-4xl  font-black mr-auto mb-6">
                  {book.title}
                </h2>
                <p className="text-xl font-normal mb-1">
                  By <span className="font-medium">{book.byWho}</span>
                </p>
                <p className="text-xl font-normal mb-1">
                  Book Cover/ <span className="font-medium">{book.cover}</span>
                </p>
                <p className="text-xl font-normal mb-4">
                  Genres/ <span className="font-medium">{book.genres}</span>
                </p>
                <p className="text-xl w-2/3 line-clamp-4">{book.desc}</p>
              </div>
              <div className="flex items-center">
                <div className="avatar-group  gap-1 -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-9">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
                <p className=" text-base font-medium">99 +Reviews</p>
              </div>
              <div className="absolute right-14 bottom-28 group-hover:block hidden ">
                <a
                  href="https://asaxiy.uz/uz/product/knigi"
                  target="_blank"
                  className="btn btn-primary text-xl font-light font-serif"
                >
                  Buy Now
                </a>
              </div>
              <div className="absolute top-10 right-14 group-hover:block hidden ">
                <button>
                  <FaBookmark className="w-14 h-14" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <MovieList books={allBooks} />
    </div>
  );
}

export default ProductsList;
