// components/CommentSkeleton.tsx
export default function CommentSkeleton() {
  return (
    <div className="space-y-2">
      <div className="h-6 rounded bg-gray-200 animate-pulse" />
      <div className="h-6 rounded bg-gray-200 animate-pulse" />
    </div>
  );
}
