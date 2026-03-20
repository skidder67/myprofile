export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <img
          src="https://i.imgur.com/L2UWkYf.png"
          className="w-24 h-24 rounded-full"
        />
        <h1 className="text-2xl font-bold">@$HIESTY</h1>
        <p className="text-gray-400">Game Protector, Modder, Coder(C++, C#, LUA)</p>

        <div className="flex flex-col gap-3 w-full mt-4">
          <a href="#" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
            Mod servers
          </a>
            <a href="https://discord.gg/Wafuac65U7" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
            G07 - owner
          </a>
          <a href="https://discord.gg/wwpPZ8RxsJ" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
            bus - helped make the DLL
          </a>
           <a href="https://discord.gg/wwpPZ8RxsJ" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
            MA(modding academy) - helped make the lib
          </a>
          <iframe
  width="0"
  height="0"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https://soundcloud.com/s0rrowmusic/be-ur-man&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false"
  style={{display: 'none'}}
/>
        </div>
      </div>
    </main>
  )
}