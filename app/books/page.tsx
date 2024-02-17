"use client";

import {supabaseComponent} from "@/utils/supabase";
import {useEffect, useState} from "react";
import BooksCard from "../components/BooksCard";

const Books: any = () => {
  const [books, setBooks] = useState<any>([]);
  const [errors, setErrors] = useState("");

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

  useEffect(() => {
    getBooks();

    supabaseComponent
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        {event: "*", schema: "public", table: "books"},
        () => {
          getBooks();
        }
      )
      .subscribe();
  }, []);

  // return <pre>{JSON.stringify(allbooks, null, 2)}</pre>;
  return <BooksCard book={books} />;
};

export default Books;
