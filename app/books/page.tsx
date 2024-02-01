"use client";

import {supabaseComponent} from "@/utils/supabase";
import {useEffect, useState} from "react";

const Books = () => {
  const [allbooks, setAllBooks] = useState<any>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      const {data: books, error} = await supabaseComponent
        .from("books")
        .select("*");

      if (error) {
        setErrors("You might want to check your data");
      } else {
        setAllBooks(books);
      }
    };

    getBooks();
  });
  return (
    <div className="flex justify-center text-3xl font-bold m-20 flex-col">
      {allbooks?.map((item: any, index: any) => (
        <div key={index} className="text-red-500 flex flex-col">
          Book Title: {item?.title}
          Book Author: {item?.author}
          Book Cost: {item?.cost}
        </div>
      ))}
    </div>
  );
};

export default Books;
