"use client"

import { useState } from "react"

const services = [
  {
    id: 1,
    title: "Групповые туры",
    price: "от 500$",
    description: "Авторские маршруты в группе единомышленников",
    features: ["3-7 дней", "8-12 человек", "Все включено", "Профгиды"],
    icon: "👥",
  },
  {
    id: 2,
    title: "Индивидуальные экспедиции",
    price: "от 300$",
    description: "Персональный маршрут под ваши возможности",
    features: ["Гибкие даты", "Любая продолжительность", "VIP-сервис", "Лучшие гиды"],
    icon: "🗻",
  },
  {
    id: 3,
    title: "Корпоративные туры",
    price: "от 400$",
    description: "Командообразующие экспедиции для компаний",
    features: ["Тимбилдинг", "Страховка", "Документы", "Трансфер"],
    icon: "🏢",
  },
  {
    id: 4,
    title: "Экстремальные туры",
    price: "от 800$",
    description: "Для опытных путешественников и альпинистов",
    features: ["Высокие вершины", "Снаряжение", "Страховка", "Медпомощь"],
    icon: "⛰️",
  },
]

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            Наши <span className="text-blue-500">Услуги</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Выберите идеальный вариант путешествия для вашей группы
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out both`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>

                {/* Price */}
                <p className="text-blue-400 font-bold text-lg mb-3">{service.price}</p>

                {/* Description */}
                <p className="text-white/60 text-sm mb-4 flex-grow">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white/50 text-sm flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 border border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
