"use client";
import { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SeachBox: FC = ({}) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex mx-auto max-w-6xl justify-between items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};

export default SeachBox;
