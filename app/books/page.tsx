"use client";

import {supabaseComponent} from "@/utils/supabase";
import {useEffect, useState} from "react";
import BooksCard from "../components/BooksCard";

const Books = () => {
  const [books, setBooks] = useState<any>([]);
  const [title, setTitle] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);
  const [cost, setCost] = useState<any>(null);
  const [release, setRelease] = useState<any>(null);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      const {data: books, error} = await supabaseComponent
        .from("books")
        .select("*");

      if (error) {
        setErrors("You might want to check your data");
      } else {
        setBooks(books);
      }
    };

    getBooks();
  }, []);

  // return <pre>{JSON.stringify(allbooks, null, 2)}</pre>;
  return <BooksCard book={books} />;
};

export default Books;
