"use client"

export default function Footer() {
  return (
    <footer id="contacts" className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0s" }}>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-500">MEYKIN</span>
              <span className="text-white">.TRIP</span>
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Авторские туры и экспедиции в Кыргызстане. Создаём незабываемые приключения.
            </p>
          </div>

          {/* Navigation */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-4 text-white">Меню</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["Главная", "Услуги", "Отзывы", "О нас"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-4 text-white">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["Групповые туры", "Индивидуальные", "Корпоративные", "Экстремальные"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-4 text-white">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">WhatsApp: +996 (555) 00-12-356</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Email: meykin.trip@gmail.com</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Instagram: @meykin.trip</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© 2025 MEYKIN.TRIP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
