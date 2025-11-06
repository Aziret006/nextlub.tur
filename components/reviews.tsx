"use client"

import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Александр К.",
    role: "Путешественник",
    content: "Лучший тур который я когда-либо посещал! Профессиональная команда, потрясающие пейзажи.",
    rating: 5,
    avatar: "🧑",
  },
  {
    id: 2,
    name: "Мария С.",
    role: "Поклонница природы",
    content: "Безумно красиво! Гиды знают каждый камень маршрута. Рекомендую всем!",
    rating: 5,
    avatar: "👩",
  },
  {
    id: 3,
    name: "Иван М.",
    role: "Первый раз путешественник",
    content: "Думал что не потяну, но гиды помогли на каждом шаге. Теперь жду следующего тура!",
    rating: 5,
    avatar: "🧑",
  },
  {
    id: 4,
    name: "Оксана П.",
    role: "Корпоративный клиент",
    content: "Идеальный выбор для командообразования. Коллектив сплотился как никогда!",
    rating: 5,
    avatar: "👩",
  },
  {
    id: 5,
    name: "Сергей Л.",
    role: "Опытный альпинист",
    content: "Высокий уровень организации, интересные маршруты, крутая компания!",
    rating: 5,
    avatar: "🧑",
  },
  {
    id: 6,
    name: "Анна Г.",
    role: "Путешественница",
    content: "Это не просто туризм, это жизненно меняющий опыт. Спасибо MEYKIN.TRIP!",
    rating: 5,
    avatar: "👩",
  },
]

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="reviews" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            Отзывы <span className="text-blue-500">Клиентов</span>
          </h2>
          <p className="text-xl text-white/60">Что говорят люди о наших турах</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer hover:bg-blue-600/5"
              style={{
                animation: `fadeInUp 0.6s ease-out both`,
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-blue-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 mb-6 text-sm leading-relaxed">"{review.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{review.avatar}</div>
                <div>
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-blue-400 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="p-6 border border-blue-500/20 animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
            <p className="text-4xl font-black text-blue-500 mb-2">1825</p>
            <p className="text-white/60 text-sm">Публикаций</p>
          </div>
          <div className="p-6 border border-blue-500/20 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <p className="text-4xl font-black text-blue-500 mb-2">12.2K</p>
            <p className="text-white/60 text-sm">Подписчиков</p>
          </div>
          <div className="p-6 border border-blue-500/20 animate-fadeInUp" style={{ animationDelay: "0.7s" }}>
            <p className="text-4xl font-black text-blue-500 mb-2">4.9★</p>
            <p className="text-white/60 text-sm">Средний рейтинг</p>
          </div>
        </div>
      </div>
    </section>
  )
}
