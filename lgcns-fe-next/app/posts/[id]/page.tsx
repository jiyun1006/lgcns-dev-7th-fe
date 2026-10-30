import { getPost, getAuthor, getComments } from "@/lib/fakeapi";
import { Suspense } from "react";
import Comments from "./Comments";
import CommentSkeleton from "@/app/component/CommentSkeleton";
import Link from "next/link";
import MoveForm from "./MoveForm";

getPost;

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const commentPromise = getComments(id);

  console.log("fetch");
  const [post, author] = await Promise.all([getPost(id), getAuthor(id)]);
  console.timeEnd("fetch");

  const num = Number(id);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>작성자 : {author.name}</p>

      <Suspense fallback={<CommentSkeleton />}>
        <Comments commentPromise={commentPromise} />
      </Suspense>
      <MoveForm />
      <div className="felx gap-4">
        {num > 1 && <Link href={`/posts/${num - 1}`}>이전글</Link>}
        <Link href={`/posts/${num + 1} `}>다음글</Link>
        <Link href="/posts">목록</Link>
      </div>
    </div>
  );
}
