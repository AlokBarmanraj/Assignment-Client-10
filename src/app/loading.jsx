export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* Spinner */}
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-[6px] border-blue-200"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-[6px] border-blue-600 border-t-transparent"></div>
      </div>

      {/* Text */}
      <h2 className="mt-6 text-2xl font-bold text-blue-600">
        Loading...
      </h2>

      <p className="mt-2 text-gray-500">
        Please wait while we prepare everything.
      </p>
    </div>
  );
}