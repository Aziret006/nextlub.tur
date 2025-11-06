"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "НОВЫЙ ТУРИЗМ",
    subtitle: "В КЫРГЫЗСТАНЕ",
    description: "Авторские туры в сердце горных вершин",
    image: "/mountain-kyrgyzstan-peaks-snow.jpg",
  },
  {
    id: 2,
    title: "ПРИКЛЮЧЕНИЕ",
    subtitle: "ПОД ОБЛАКАМИ",
    description: "Профессиональные гиды в каждом туре",
    image: "/hiking-trail-mountains-group.jpg",
  },
  {
    id: 3,
    title: "ГРУППЫ И",
    subtitle: "ИНДИВИДУАЛЬНЫЕ",
    description: "Выбирайте именно то, что вам нужно",
    image: "/adventure-trekking-landscape.jpg",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === current}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">
              <div className="max-w-3xl">
                {/* Animated subtitle */}
                <div
                  className={`text-accent uppercase text-sm md:text-base font-bold tracking-widest mb-4 ${
                    index === current ? "animate-fadeInUp" : ""
                  }`}
                  style={{
                    animationDelay: "0.1s",
                  }}
                >
                  Опыт путешествия
                </div>

                {/* Main title */}
                <h1
                  className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-6 ${
                    index === current ? "animate-fadeInUp" : ""
                  }`}
                  style={{
                    animationDelay: "0.2s",
                  }}
                >
                  <div>{slide.title}</div>
                  <div className="text-accent">{slide.subtitle}</div>
                </h1>

                {/* Description */}
                <p
                  className={`text-lg md:text-xl text-white/80 max-w-xl mb-8 ${
                    index === current ? "animate-fadeInUp" : ""
                  }`}
                  style={{
                    animationDelay: "0.3s",
                  }}
                >
                  {slide.description}
                </p>

                {/* CTA Button */}
                <button
                  className={`px-8 md:px-12 py-4 bg-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 ${
                    index === current ? "animate-fadeInUp" : ""
                  }`}
                  style={{
                    animationDelay: "0.4s",
                  }}
                >
                  Начать приключение
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-4">
        <button
          onClick={handlePrev}
          className="w-14 h-14 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-14 h-14 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setIsAutoPlay(false)
            }}
            className={`transition-all duration-300 ${
              index === current ? "w-12 h-2 bg-accent" : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Info overlay - bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent p-6 md:p-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <p className="text-accent text-sm uppercase tracking-widest font-bold mb-2">
              Слайд {current + 1} / {slides.length}
            </p>
          </div>
          <div className="text-right text-white/60 text-sm">Используйте стрелки или точки для навигации</div>
        </div>
      </div>
    </section>
  )
}
