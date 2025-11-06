"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              О <span className="text-blue-500">MEYKIN.TRIP</span>
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Мы создали компанию, чтобы поделиться красотой Кыргызстана с миром. Каждый наш тур — это тщательно
              продуманный маршрут, рассчитанный на максимум впечатлений и безопасности.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Наша команда состоит из опытных альпинистов и гидов с сертификатами международного уровня. Мы гарантируем,
              что ваше путешествие будет не только адреналинным, но и абсолютно безопасным.
            </p>

            <div className="space-y-4">
              {[
                "Туры более чем в 50 странах",
                "500+ человек совершили наши туры",
                "100% гарантия безопасности",
                "24/7 поддержка клиентов",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500" />
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 border border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
              Связаться с нами
            </button>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "8+", label: "Лет опыта" },
              { number: "500+", label: "Довольных клиентов" },
              { number: "50+", label: "Маршрутов" },
              { number: "4.9★", label: "Рейтинг" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out both`,
                  animationDelay: `${idx * 0.1 + 0.3}s`,
                }}
              >
                <p className="text-4xl font-black text-blue-500 mb-2">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
