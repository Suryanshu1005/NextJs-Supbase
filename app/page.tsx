import {getUserData} from "@/http/get";
import Books from "./books/page";
import {cookies} from "next/headers";
import Link from "next/link";

export default async function Home() {
  const {data, error} = await getUserData(cookies);

  console.log("error", error);

  const id = data?.user?.id;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {id ? (
        <Books />
      ) : (
        <Link
          className="bg-white p-10 font-bold text-2xl rounded-lg"
          href="/login"
        >
          Please login to see books
        </Link>
      )}
    </main>
  );
}
