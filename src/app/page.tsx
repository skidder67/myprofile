export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <img
          src="https://i.pravatar.cc/100"
          className="w-24 h-24 rounded-full"
        />
        <h1 className="text-2xl font-bold">@skidder67</h1>
        <p className="text-gray-400">my bio goes here</p>

        <div className="flex flex-col gap-3 w-full mt-4">
          <a href="#" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
            🐦 Twitter
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
            💬 Discord
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
            📷 Instagram
          </a>
        </div>
      </div>
    </main>
  )
}