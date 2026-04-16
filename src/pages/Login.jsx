export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Sign in to LinkedIn</h1>
        <form className="flex flex-col gap-4">
          <input className="border p-2 rounded" placeholder="Email" />
          <input className="border p-2 rounded" placeholder="Password" type="password" />
          <button className="bg-blue-700 text-white py-2 rounded font-semibold">Sign In</button>
        </form>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-blue-700 hover:underline">New to LinkedIn? Join now</a>
        </div>
      </div>
    </div>
  );
}
