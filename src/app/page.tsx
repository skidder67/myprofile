"use client"
import { useState, useRef } from "react"

export default function Home() {
  const [entered, setEntered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleEnter = () => {
    setEntered(true)
    audioRef.current?.play()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <audio ref={audioRef} loop src="/song.mp3" />

      {!entered ? (
        <div
          onClick={handleEnter}
          className="min-h-screen flex flex-col items-center justify-center cursor-pointer gap-4"
        >
          <p className="text-gray-400 animate-pulse text-lg">click to enter</p>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <img
              src="https://i.imgur.com/L2UWkYf.png"
              className="w-24 h-24 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold">@$HIESTY</h1>
            <p className="text-gray-400">Game Protector, Modder, Coder(C++, C#, LUA)</p>
            <div className="flex flex-col gap-3 w-full mt-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
                Mod servers
              </a>
              <a href="https://discord.gg/Wafuac65U7" target="_blank" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
                G07 - owner
              </a>
              <a href="https://discord.gg/wwpPZ8RxsJ" target="_blank" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
                bus - helped make the DLL
              </a>
              <a href="https://discord.gg/wwpPZ8RxsJ" target="_blank" className="bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 text-center transition">
                MA(modding academy) - helped make the lib
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}