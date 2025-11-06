"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "НОВЫЙ ТУРИЗМ",
    subtitle: "В КЫРГЫЗСТАНЕ",
    description: "Авторские туры в сердце горных вершин. Профессиональные гиды, незабываемые впечатления.",
    image: "/mountain-kyrgyzstan-peaks-snow.jpg",
  },
  {
    id: 2,
    title: "ПРИКЛЮЧЕНИЕ",
    subtitle: "ПОД ОБЛАКАМИ",
    description: "Экспедиции для опытных и начинающих путешественников по самым красивым маршрутам.",
    image: "/hiking-trail-mountains-group.jpg",
  },
  {
    id: 3,
    title: "ВЫБИРАЙТЕ",
    subtitle: "СВОЙ ПУТЬ",
    description: "Групповые туры, индивидуальные маршруты, VIP-программы. На любой вкус и уровень подготовки.",
    image: "/adventure-trekking-landscape.jpg",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === current}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>

          <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 pt-16">
            <div className="max-w-3xl">
              <div
                className={`text-blue-400 uppercase text-xs md:text-sm font-bold tracking-widest mb-4 ${
                  index === current ? "animate-fadeInUp" : ""
                }`}
                style={{ animationDelay: "0.1s" }}
              >
                Опыт путешествия
              </div>

              <h1
                className={`text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6 text-white ${
                  index === current ? "animate-fadeInUp" : ""
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                <div>{slide.title}</div>
                <div className="text-blue-500">{slide.subtitle}</div>
              </h1>

              <p
                className={`text-lg md:text-xl text-white/80 max-w-xl mb-8 ${
                  index === current ? "animate-fadeInUp" : ""
                }`}
                style={{ animationDelay: "0.3s" }}
              >
                {slide.description}
              </p>

              <button
                className={`px-8 md:px-12 py-4 bg-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 border border-blue-500 ${
                  index === current ? "animate-fadeInUp" : ""
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                Начать приключение
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-4">
        <button
          onClick={handlePrev}
          className="w-14 h-14 border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setIsAutoPlay(false)
            }}
            className={`transition-all duration-300 ${
              index === current ? "w-12 h-2 bg-blue-500" : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent p-6 md:p-16">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <p className="text-blue-400 text-xs uppercase tracking-widest font-bold">
            {current + 1} / {slides.length}
          </p>
        </div>
      </div>
    </section>
  )
}
