import type { Comment } from "@/lib/fakeapi";

export default async function Comments({
  commentPromise,
}: {
  commentPromise: Promise<Comment[]>;
}) {
  const comments = await commentPromise;

  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>{c.text}</li>
      ))}
    </ul>
  );
}
