export function SkeletonCard({ className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-3 w-48 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-3 w-24 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-5/6 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-4/6 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-4">
          <div className="h-8 flex-1 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-8 flex-1 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-8 flex-1 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-8 flex-1 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonPost({ className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden ${className}`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0 space-y-1.5">
                <div className="h-4 w-28 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-40 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-20 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <div className="h-4 w-full rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-11/12 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-3/4 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="h-3 w-24 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="flex items-center gap-3">
            <div className="h-3 w-20 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-16 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 px-2">
        <div className="grid grid-cols-4 py-3 gap-2">
          <div className="h-9 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-9 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-9 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-9 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonNetworkCard({ className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center ${className}`}>
      <div className="w-20 h-20 rounded-full mx-auto skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
      <div className="mt-3 h-4 w-24 mx-auto rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
      <div className="mt-1 h-3 w-32 mx-auto rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
      <div className="mt-1 h-3 w-20 mx-auto rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
      <div className="mt-3 h-9 w-full rounded-full skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export function SkeletonJobCard({ className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-4 ${className}`}>
      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-xl skeleton-shimmer bg-gray-200 dark:bg-gray-700 shrink-0" />
        <div className="flex-1 min-w-0 space-y-2">
          <div className="h-5 w-3/4 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-1/2 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
          <div className="h-3 w-2/3 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="h-3 w-24 rounded skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
        <div className="h-8 w-24 rounded-full skeleton-shimmer bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
}

export function SkeletonList({ count = 3, type = "post" }) {
  const SkeletonComponent = {
    post: SkeletonPost,
    card: SkeletonCard,
    network: SkeletonNetworkCard,
    job: SkeletonJobCard,
  }[type];

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
}

export default SkeletonPost;
