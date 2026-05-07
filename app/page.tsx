export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">
        SnapClone
      </h1>

      <p className="text-gray-300 mb-8">
        Share moments instantly.
      </p>

      <div className="flex gap-4">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          Login
        </button>

        <button className="border border-yellow-400 px-6 py-3 rounded-2xl hover:bg-yellow-400 hover:text-black transition">
          Register
        </button>
      </div>

    </main>
  );
}