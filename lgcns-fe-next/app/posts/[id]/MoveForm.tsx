"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MoveForm() {
  const router = useRouter();
  const [num, setNum] = useState("");

  return (
    <div className="flex gap-2">
      <input
        className="border px-2"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="글 번호"
      />
      <button onClick={() => router.push(`/posts/${num}`)}>이동</button>
    </div>
  );
}
