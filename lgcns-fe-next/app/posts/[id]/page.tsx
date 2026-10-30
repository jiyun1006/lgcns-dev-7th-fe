import { getPost, getAuthor } from "@/lib/fakeapi";

getPost;

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("fetch");
  const [post, author] = await Promise.all([getPost(id), getAuthor(id)]);
  console.timeEnd("fetch");

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>작성자 : {author.name}</p>
    </div>
  );
}
