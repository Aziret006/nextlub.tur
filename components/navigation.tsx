"use client"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl tracking-tighter">
          <span className="text-accent">NEXTLUB</span>
          <span className="text-white"></span>
        </div>
        <button className="px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 font-semibold">
          Записаться
        </button>
      </div>
    </nav>
  )
}
