"use client"
import { useState, useRef, useEffect } from "react"

declare global {
  interface Window {
    SC: any
  }
}

export default function Home() {
  const [entered, setEntered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const widgetRef = useRef<any>(null)
  const widgetReady = useRef(false)

  // Load SoundCloud Widget API script once, then bind the widget as soon as
  // both the script and the iframe exist (don't wait for the click).
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://w.soundcloud.com/player/api.js"
    script.async = true
    script.onload = () => {
      if (iframeRef.current && window.SC) {
        widgetRef.current = window.SC.Widget(iframeRef.current)
        widgetRef.current.bind(window.SC.Widget.Events.READY, () => {
          widgetReady.current = true
        })
      }
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Track mouse for custom cursor
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  const handleEnter = () => {
    setEntered(true)
    const tryPlay = () => {
      if (widgetRef.current && widgetReady.current) {
        widgetRef.current.play()
      } else {
        // Widget not bound/ready yet — retry shortly, still inside the
        // gesture-triggered flow.
        setTimeout(tryPlay, 150)
      }
    }
    tryPlay()
  }

  // A handful of sparkles with fixed positions/timings so the layout is stable
  const sparkles = [
    { left: "8%", size: 14, duration: 9, delay: 0 },
    { left: "20%", size: 8, duration: 12, delay: 2 },
    { left: "35%", size: 18, duration: 10, delay: 1 },
    { left: "50%", size: 10, duration: 14, delay: 4 },
    { left: "62%", size: 16, duration: 8, delay: 3 },
    { left: "75%", size: 9, duration: 11, delay: 5 },
    { left: "88%", size: 20, duration: 13, delay: 0.5 },
    { left: "94%", size: 12, duration: 9, delay: 2.5 },
  ]

  return (
    <main
      onClick={!entered ? handleEnter : undefined}
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#ffe4ef",
        color: "#4a2b3a",
        overflow: "hidden",
        cursor: "none",
      }}
    >
      {/* Hidden SoundCloud player, controlled via Widget API */}
      <iframe
        ref={iframeRef}
        title="background-audio"
        width="1"
        height="1"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0, pointerEvents: "none", border: 0 }}
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1210906615&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false"
      />

      {/* Animated moving background — soft pink/lavender swirl */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-drift"
          style={{
            position: "absolute",
            inset: "-40%",
            background:
              "conic-gradient(from 0deg, #ffb6d9, #e0b3ff, #b6e6ff, #ffd6e8, #ffb6d9)",
            opacity: 0.75,
            filter: "blur(80px)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.25)" }} />

        {/* Floating sparkles */}
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              left: s.left,
              fontSize: s.size,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      {/* Custom heart cursor */}
      <div
        style={{
          position: "fixed",
          zIndex: 50,
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
          fontSize: 22,
          pointerEvents: "none",
          filter: "drop-shadow(0 0 4px rgba(255,255,255,0.6))",
        }}
      >
        💗
      </div>

      {!entered ? (
        <div
          style={{
            position: "relative",
            zIndex: 10,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            cursor: "none",
          }}
        >
          <p className="animate-pulse text-lg" style={{ color: "#a15c7c" }}>
             click to enter 
          </p>
        </div>
      ) : (
        <div className="relative p-8" style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32 }}>
          <div
            className="flex flex-col items-center gap-4 w-full max-w-sm"
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(14px)",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 8px 32px rgba(255, 110, 170, 0.25)",
              padding: "36px 28px",
            }}
          >
            <img
              src="https://i.imgur.com/kmIJ7uB.png"
              className="w-24 h-24 rounded-full object-cover"
              style={{ border: "3px solid #ffb6d9", boxShadow: "0 0 20px rgba(255,182,217,0.8)" }}
            />
            <h1 className="text-2xl font-bold" style={{ color: "#c2447a" }}>
               @$HIESTY 
            </h1>
            <p style={{ color: "#a15c7c" }}>ATTEST and AUTH dev, ANTI CHEAT dev</p>
            <div className="flex flex-col gap-3 w-full mt-4">
              <a
                href="https://discord.gg/dC56JcX3AS"
                target="_blank"
                className="rounded-2xl px-4 py-3 text-center transition"
                style={{ background: "rgba(255,182,217,0.45)", color: "#7a2b52", fontWeight: 600 }}
              >
                💌 DISCORD - protection stuff by me
              </a>
              <a
                href="https://discord.gg/aehC8uArEu"
                target="_blank"
                className="rounded-2xl px-4 py-3 text-center transition"
                style={{ background: "rgba(224,179,255,0.45)", color: "#5e3480", fontWeight: 600 }}
              >
                 SKYS GORILLA HORROR - protected
              </a>
              <a
                href="PLACE HOLDER"
                target="_blank"
                className="rounded-2xl px-4 py-3 text-center transition"
                style={{ background: "rgba(182,230,255,0.45)", color: "#2b6a80", fontWeight: 600 }}
              >
                 PLACE HOLDER
              </a>
              <a
                href="PLACE HOLDER"
                target="_blank"
                className="rounded-2xl px-4 py-3 text-center transition"
                style={{ background: "rgba(255,214,232,0.45)", color: "#c2447a", fontWeight: 600 }}
              >
                 PLACE HOLDER
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
