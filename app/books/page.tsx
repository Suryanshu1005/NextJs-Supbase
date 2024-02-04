"use client";

import {supabaseComponent} from "@/utils/supabase";
import {useEffect, useState} from "react";

const Books = () => {
  const [allbooks, setAllBooks] = useState<any>(null);
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

  return <pre>{JSON.stringify(allbooks, null, 2)}</pre>;
};

export default Books;
