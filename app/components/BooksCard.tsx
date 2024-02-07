"use client";

import {useRouter} from "next/navigation";
import React, {FC, useEffect, useState} from "react";

interface BooksCardprops {
  book: any;
}

const BooksCard: FC<BooksCardprops> = ({book}) => {
  const [bookDetails, setBookDetails] = useState<any[]>([]);
  const rounter = useRouter();
  useEffect(() => {
    if (book) {
      const bookDetails = book.map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        cost: item.cost,
        date: item.release_data,
      }));
      setBookDetails(bookDetails);
    }
  }, [book]);

  const handleButtonClick = (id: any) => {
    rounter.push(`/books/${id}`);
  };

  return (
    <div className="flex gap-10 justify-center mt-20 text-white">
      {bookDetails.map((book, index) => (
        <>
          <div className="bg-[#ff3232] p-5 rounded-xl" key={index}>
            <div className="flex font-bold text-2xl">Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Cost: {book.cost}</div>
            <div>Date: {book.date}</div>
            <div className="font-bold text-3xl">Id: {book.id}</div>
            <button
              onClick={() => handleButtonClick(book.id)}
              className="mt-10 bg-white text-black shadow-lg pl-3 pr-3 rounded-2xl font-bold text-lg"
            >
              Edit
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default BooksCard;
