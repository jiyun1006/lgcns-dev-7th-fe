import { getPost, getAuthor, getComments } from "@/lib/fakeapi";
import { Suspense } from "react";
import Comments from "./Comments";
import CommentSkeleton from "@/app/component/CommentSkeleton";

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

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>작성자 : {author.name}</p>

      <Suspense fallback={<CommentSkeleton />}>
        <Comments commentPromise={commentPromise} />
      </Suspense>
    </div>
  );
}
