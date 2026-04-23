export default function Loading() {
  return (
    <div className="min-h-screen bg-deep-navy flex items-center justify-center">
      <div className="text-center">
        {/* Pulsing logo placeholder */}
        <div className="w-16 h-16 rounded-full border-2 border-neon mx-auto mb-6 animate-pulse opacity-60" />

        {/* Skeleton blocks */}
        <div className="space-y-4 max-w-md mx-auto">
          <div className="h-8 bg-[rgba(255,255,255,0.05)] rounded-lg w-3/4 mx-auto animate-pulse" />
          <div className="h-4 bg-[rgba(255,255,255,0.03)] rounded w-full animate-pulse" />
          <div className="h-4 bg-[rgba(255,255,255,0.03)] rounded w-5/6 mx-auto animate-pulse" />
        </div>

        {/* Button skeletons */}
        <div className="flex gap-4 justify-center mt-8">
          <div className="h-12 w-36 bg-[rgba(0,229,255,0.1)] rounded-md animate-pulse" />
          <div className="h-12 w-36 bg-[rgba(255,255,255,0.05)] rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}
