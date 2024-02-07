"use client";
import {supabaseComponent} from "@/utils/supabase";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const EditBook = ({params}: {params: {id: string}}) => {
  const [bookData, setBookData] = useState<any>([]);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data: any) => {};

  useEffect(() => {
    const getSingleBook = async () => {
      let {data: books, error} = await supabaseComponent
        .from("books")
        .select("*")
        .eq("id", `${params.id}`);

      if (error) {
        setError("you can not fetch the book");
      } else {
        setBookData(books);
      }
    };

    getSingleBook();
  }, [params.id]);
  return (
    <form
      className="max-w-md mx-auto flex flex-col align-middle min-h-screen justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5">
        <label className="block mb-2 text-2xl font-medium text-gray-900">
          Title
        </label>
        <input
          defaultValue={bookData[0]?.title}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="The art of programming"
          required
          {...register("title")}
        />
      </div>
      <div className="flex gap-5 flex-col">
        <label className="block mb-2 text-2xl font-medium text-gray-900">
          Author Name:{" "}
        </label>
        <input
          defaultValue={bookData[0]?.author}
          placeholder="Suryanshu Tiwari"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("author")}
        />
      </div>
      <div className="flex gap-5 flex-col">
        <label className="block mb-2 text-2xl font-medium text-gray-900">
          Cost:{" "}
        </label>
        <input
          defaultValue={bookData[0]?.cost}
          placeholder="$20"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("cost")}
        />
      </div>
      <div className="flex gap-5 flex-col">
        <label className="block mb-2 text-2xl font-medium text-gray-900">
          Release Date:{" "}
        </label>
        <input
          defaultValue={bookData[0]?.release_data}
          placeholder="2017"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          {...register("release_date")}
        />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-1/2 mt-10 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default EditBook;
