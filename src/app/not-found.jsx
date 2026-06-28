import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}