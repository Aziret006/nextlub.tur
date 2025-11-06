"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X, Star, Globe, Send, MapPin, Phone, Mail } from "lucide-react"

const translations = {
  ru: {
    home: "Главная",
    services: "Услуги",
    gallery: "Галерея",
    reviews: "Отзывы",
    guides: "Гиды",
    contacts: "Контакты",
    book: "Забронировать",
    discover: "Откройте красоту Кыргызстана",
    adventure: "Приключения в горах, культуры и дружба",
    startTour: "Начать тур",
    peaks: "Вершины величия",
    profGuides: "Профессиональные гиды на самых опасных пиках",
    climb: "Восхождение",
    cultural: "Культурные сокровища",
    traditions: "Узнайте традиции и историю Кыргызстана",
    explore: "Исследовать",
    hiking: "Горные походы",
    hikingDesc: "3-7 дневные экспедиции на высочайшие пики",
    cultural_tours: "Культурные туры",
    cultDesc: "Знакомство с традициями и историей",
    cycling: "Приключения на велосипеде",
    cycDesc: "Экстремальные маршруты по горам",
    camping: "Кемпинги и базы",
    campDesc: "Комфортабельный отдых в природе",
    features: ["Профгиды", "Питание", "Оборудование"],
    features2: ["Местные традиции", "Гостеприимство", "Еда"],
    features3: ["Велосипеды", "Маршруты", "Поддержка"],
    features4: ["Удобства", "Питание", "Активности"],
    price: "$",
    beauty: "Красота Кыргызстана",
    gallery_text: "Галерея потрясающих пейзажей и моментов",
    reviews_title: "Отзывы клиентов",
    review1: "Невероятно крутой опыт! Гиды профессиональны, маршруты отличные!",
    review2: "Лучшие впечатления в моей жизни. Пикник в горах был волшебным!",
    review3: "Профессионализм и безопасность на высшем уровне. Спасибо MEYKIN!",
    experienced: "Опытные гиды",
    best_pros: "Лучшие профессионалы горного туризма",
    mountain_guide: "Горный гид",
    cultural_guide: "Культурный гид",
    sport_guide: "Спорт-гид",
    bio_guide: "Биолог-гид",
    years: "+ лет",
    faq: "Часто задаваемые вопросы",
    q1: "Какие документы нужны для туризма?",
    a1: "Нужен паспорт и виза (если требуется). Мы поможем с оформлением!",
    q2: "Есть ли страховка включена?",
    a2: "Да, базовая страховка включена. Рекомендуем расширенную опцию.",
    q3: "Какой уровень физподготовки нужен?",
    a3: "Разные туры для разных уровней. От новичков до профессионалов!",
    q4: "Когда лучший сезон для туров?",
    a4: "Июль-сентябрь идеальны. Весной и осенью тоже хорошо!",
    startAdventure: "Начните свое приключение",
    discount: "Забронируйте тур и получите 20% скидку на первое путешествие",
    bookNow: "Забронировать сейчас",
    learnMore: "Узнать больше",
    stats1: "1825+",
    stats2: "12.2K",
    stats3: "500+",
    stats4: "98%",
    statsLabel1: "Публикаций",
    statsLabel2: "Подписчиков",
    statsLabel3: "Туров",
    statsLabel4: "Довольных",
    // New translations for contact form
    contact_form: "Отправить запрос",
    name: "Ваше имя",
    phone: "Номер телефона",
    email: "Email",
    message: "Сообщение",
    send_message: "Отправить в WhatsApp",
    full_name: "Полное имя",
    phone_placeholder: "+996 (555) 00-12-56",
    email_placeholder: "your@email.com",
    message_placeholder: "Расскажите о вашем путешествии...",
    // New translations for beauty section
    beauty_of_kyrgyzstan: "Красота Кыргызстана",
    // New translations for guides section
    experienced_guides_main: "Опытные гиды",
    // New translations for footer
    nextlub: "NEXT LEVEL ADVENTURES",
  },
  en: {
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    reviews: "Reviews",
    guides: "Guides",
    contacts: "Contacts",
    book: "Book Now",
    discover: "Discover Kyrgyzstan Beauty",
    adventure: "Mountain adventures, culture and friendship",
    startTour: "Start Tour",
    peaks: "Peaks of Greatness",
    profGuides: "Professional guides on the most dangerous peaks",
    climb: "Climbing",
    cultural: "Cultural Treasures",
    traditions: "Learn traditions and history of Kyrgyzstan",
    explore: "Explore",
    hiking: "Mountain Hiking",
    hikingDesc: "3-7 day expeditions to the highest peaks",
    cultural_tours: "Cultural Tours",
    cultDesc: "Discovery of traditions and history",
    cycling: "Bicycle Adventures",
    cycDesc: "Extreme mountain routes",
    camping: "Camping & Bases",
    campDesc: "Comfortable nature rest",
    features: ["Pro Guides", "Meals", "Equipment"],
    features2: ["Local Traditions", "Hospitality", "Food"],
    features3: ["Bikes", "Routes", "Support"],
    features4: ["Amenities", "Meals", "Activities"],
    price: "$",
    beauty: "Beauty of Kyrgyzstan",
    gallery_text: "Gallery of stunning landscapes and moments",
    reviews_title: "Client Reviews",
    review1: "Incredibly cool experience! Professional guides, great routes!",
    review2: "Best memories of my life. Mountain picnic was magical!",
    review3: "Professionalism and safety at the highest level. Thank you MEYKIN!",
    experienced: "Experienced Guides",
    best_pros: "Best mountain tourism professionals",
    mountain_guide: "Mountain Guide",
    cultural_guide: "Cultural Guide",
    sport_guide: "Sport Guide",
    bio_guide: "Bio Guide",
    years: "+ years",
    faq: "Frequently Asked Questions",
    q1: "What documents are needed for tourism?",
    a1: "You need a passport and visa (if required). We'll help with registration!",
    q2: "Is insurance included?",
    a2: "Yes, basic insurance is included. We recommend the extended option.",
    q3: "What fitness level is needed?",
    a3: "Different tours for different levels. From beginners to professionals!",
    q4: "When is the best season for tours?",
    a4: "July-September are ideal. Spring and autumn are also great!",
    startAdventure: "Start Your Adventure",
    discount: "Book a tour and get 20% off your first trip",
    bookNow: "Book Now",
    learnMore: "Learn More",
    stats1: "1825+",
    stats2: "12.2K",
    stats3: "500+",
    stats4: "98%",
    statsLabel1: "Publications",
    statsLabel2: "Followers",
    statsLabel3: "Tours",
    statsLabel4: "Satisfied",
    // New translations for contact form
    contact_form: "Send Request",
    name: "Your Name",
    phone: "Phone Number",
    email: "Email",
    message: "Message",
    send_message: "Send to WhatsApp",
    full_name: "Full Name",
    phone_placeholder: "+996 (555) 00-12-56",
    email_placeholder: "your@email.com",
    message_placeholder: "Tell us about your journey...",
    // New translations for beauty section
    beauty_of_kyrgyzstan: "Beauty of Kyrgyzstan",
    // New translations for guides section
    experienced_guides_main: "Experienced Guides",
    // New translations for footer
    nextlub: "NEXT LEVEL ADVENTURES",
  },
  ky: {
    home: "Башы",
    services: "Кызматтар",
    gallery: "Галерея",
    reviews: "Пикирлер",
    guides: "Гиддер",
    contacts: "Байланыш",
    book: "Сордуу",
    discover: "Кыргызстандын сулуулугун ачып таап көрүңүз",
    adventure: "Тоо-чокусундагы окуялар, маданият жана достук",
    startTour: "Турду баштаңыз",
    peaks: "Чокулардын улуулугу",
    profGuides: "Профессионал гиддер эң кооп пиктиде",
    climb: "Чыгуу",
    cultural: "Маданий байлыктар",
    traditions: "Кыргызстандын салттарын жана тарыхын үйрөнүңүз",
    explore: "Барлап чүү",
    hiking: "Тоо-чокусу сейилдери",
    hikingDesc: "Эң жогорку чокулары 3-7 күндүк экспедициялар",
    cultural_tours: "Маданий туралар",
    cultDesc: "Салттар жана тарыхты таанып алуу",
    cycling: "Велосипед окуялары",
    cycDesc: "Экстремалдык тоо маршруттары",
    camping: "Палаткалар жана базалар",
    campDesc: "Табигатта жакшы эс алуу",
    features: ["Профессионал гиддер", "Азык", "Жабдуу"],
    features2: ["Жергиликтүү салттар", "Чакырамчылык", "Тамак"],
    features3: ["Велосипеддер", "Маршруттар", "Колдоо"],
    features4: ["Жутунтулар", "Азык", "Иш-чаралар"],
    price: "$",
    beauty: "Кыргызстандын сулуулугу",
    gallery_text: "Укмуштуудай пейзажтар жана учурлардын галереясы",
    reviews_title: "Кардарлардын пикирлери",
    review1: "Ооба сонун окуя! Гиддер боюнча, маршруттар чокуна!",
    review2: "Менин жизнегидеги эң жакшы ойлор. Тоодо пикник тильсимдүү болгон!",
    review3: "Профессионализм жана коопсуздук эң жогорку деңгээлде. Спасибо MEYKIN!",
    experienced: "Опыт ээ гиддер",
    best_pros: "Эң жакшы тоо туризм адистери",
    mountain_guide: "Тоо гидди",
    cultural_guide: "Маданий гидди",
    sport_guide: "Спорт гидди",
    bio_guide: "Биолог гидди",
    years: "+ жыл",
    faq: "Узда берилүүчү суроолор",
    q1: "Туризм үчүн кандай документ керек?",
    a1: "Паспорт жана виза керек (кереги болсо). Биз каттоолоп жардам берерин!",
    q2: "Сыноо кирмеби?",
    a2: "Ооба, негизги сыноо кирген. Кеңейтилген опцияны сунуш кылабыз.",
    q3: "Кандай физикалык даярдык керек?",
    a3: "Ар кандай турлар ар кандай деңгээлде. Начинанттардан профессионалдарга чейин!",
    q4: "Турлар үчүн эң жакшы сезон качан?",
    a4: "Июль-сентябрь идеалдуу. Баштагы жана күздүн ортосу да жакшы!",
    startAdventure: "Өз окуяңызды баштаңыз",
    discount: "Турду сордуп алсаңыз жана биринчи саякатка 20% чегинди алыңыз",
    bookNow: "Азыр сордуу",
    learnMore: "Көп нерсе билип алыңыз",
    stats1: "1825+",
    stats2: "12.2K",
    stats3: "500+",
    stats4: "98%",
    statsLabel1: "Жарыяланган",
    statsLabel2: "Ыза",
    statsLabel3: "Турлар",
    statsLabel4: "Канааттуу",
    // New translations for contact form
    contact_form: "Сурам жөнөтүү",
    name: "Сизинин аты",
    phone: "Телефон номери",
    email: "Email",
    message: "Билдирүү",
    send_message: "WhatsApp'ка жөнөтүү",
    full_name: "Толук аты",
    phone_placeholder: "+996 (555) 00-12-56",
    email_placeholder: "your@email.com",
    message_placeholder: "Сизинин саякаты жөнүндө айтып берүңүз...",
    // New translations for beauty section
    beauty_of_kyrgyzstan: "Кыргызстандын сулуулугу",
    // New translations for guides section
    experienced_guides_main: "Опыт ээ гиддер",
    // New translations for footer
    nextlub: "NEXT LEVEL ADVENTURES",
  },
}

export default function Home() {
  const [language, setLanguage] = useState<"ru" | "en" | "ky">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  })

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleWhatsAppSubmit = () => {
    const message = `Здравствуйте NEXTLUB! 🏔️\n\nИмя: ${formData.fullName}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\n\nСообщение: ${formData.message}`
    const whatsappUrl = `https://wa.me/996555001356?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setFormData({ fullName: "", phone: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-lg border-b border-gray-200" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight animate-fadeIn">
            NEXT<span className="text-primary">LUB</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[t.home, t.services, t.gallery, t.reviews, t.guides, t.contacts].map((item, i) => (
              <a
                key={i}
                href={`#${item}`}
                className="text-sm font-medium hover:text-primary transition-colors duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100">
                <Globe size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {(["ru", "en", "ky"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg text-sm"
                  >
                    {lang === "ru" ? "Русский" : lang === "en" ? "English" : "Кыргызча"}
                  </button>
                ))}
              </div>
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              {t.book}
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
            {[t.home, t.services, t.gallery, t.reviews, t.guides, t.contacts].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section with Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroSlider t={t} />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: t.stats1, label: t.statsLabel1 },
            { number: t.stats2, label: t.statsLabel2 },
            { number: t.stats3, label: t.statsLabel3 },
            { number: t.stats4, label: t.statsLabel4 },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center animate-fadeInUp p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-black text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id={t.services} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 animate-fadeInUp">{t.services}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">{t.gallery_text}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🏔️",
                title: t.hiking,
                price: "450",
                desc: t.hikingDesc,
                features: t.features,
              },
              {
                icon: "🌄",
                title: t.cultural_tours,
                price: "350",
                desc: t.cultDesc,
                features: t.features2,
              },
              {
                icon: "🚴",
                title: t.cycling,
                price: "400",
                desc: t.cycDesc,
                features: t.features3,
              },
              {
                icon: "🏕️",
                title: t.camping,
                price: "300",
                desc: t.campDesc,
                features: t.features4,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group animate-fadeInUp relative overflow-hidden rounded-3xl p-8 bg-white border-2 border-gray-200 hover:border-primary hover:shadow-2xl cursor-pointer transition-all duration-500"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="text-primary text-3xl font-black mb-3">
                    {t.price}
                    {service.price}
                  </div>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {service.features.map((f, j) => (
                      <span key={j} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty of Kyrgyzstan Section */}
      <section id={t.beauty} className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-4">{t.beauty_of_kyrgyzstan}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Галерея потрясающих пейзажей и моментов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { query: "snowy mountain peaks kyrgyzstan landscape", alt: "Горные вершины" },
              { query: "horses galloping in mountain valley", alt: "Лошади в долине" },
              { query: "turquoise alpine lake mountain reflection", alt: "Горное озеро" },
              { query: "kyrgyz yurt traditional landscape", alt: "Кыргызская юрта" },
              { query: "golden sunset mountain ridge landscape", alt: "Закат в горах" },
              { query: "green valley mountain peaks landscape", alt: "Зеленая долина" },
            ].map((item, i) => (
              <div
                key={i}
                className="animate-fadeInUp group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={`https://static.tildacdn.one/tild3037-6563-4330-b030-613962383630/1649125013_11-vsegda.png`}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id={t.reviews} className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 animate-fadeInUp">{t.reviews_title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Александр К.",
                role: "Турист",
                text: t.review1,
                rating: 5,
              },
              {
                name: "Мария П.",
                role: "Путешественница",
                text: t.review2,
                rating: 5,
              },
              {
                name: "Иван М.",
                role: "Авантюрист",
                text: t.review3,
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="animate-fadeInUp p-8 bg-gray-50 rounded-3xl border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{review.text}</p>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced Guides Section */}
      <section id={t.guides} className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-4">{t.experienced}</h2>
            <p className="text-xl text-gray-600">{t.best_pros}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Абдулла", spec: t.mountain_guide, exp: "15" },
              { name: "Фаина", spec: t.cultural_guide, exp: "12" },
              { name: "Рустам", spec: t.sport_guide, exp: "20" },
              { name: "Айсулу", spec: t.bio_guide, exp: "10" },
            ].map((guide, i) => (
              <div
                key={i}
                className="animate-fadeInUp group text-center cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-square mb-6 group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-300">
                  <img
                    src={`/professional-mountain-guide-portrait-.jpg?key=1l0qh&height=300&width=300&query=professional+mountain+guide+portrait+${guide.name}`}
                    alt={guide.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{guide.name}</h3>
                <p className="text-primary font-semibold text-lg mb-1">{guide.spec}</p>
                <p className="text-gray-600">
                  {guide.exp}
                  {t.years}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 animate-fadeInUp">{t.faq}</h2>

          <div className="space-y-4 mt-12">
            {[
              { q: t.q1, a: t.a1 },
              { q: t.q2, a: t.a2 },
              { q: t.q3, a: t.a3 },
              { q: t.q4, a: t.a4 },
            ].map((faq, i) => (
              <details
                key={i}
                className="group animate-fadeInUp p-6 rounded-2xl bg-gray-50 border-2 border-gray-200 cursor-pointer hover:border-primary transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <summary className="flex items-center justify-between font-bold text-lg">
                  {faq.q}
                  <ChevronDown size={24} className="transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id={t.contacts} className="py-24 px-4 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-4">{t.contacts}</h2>
            <p className="text-xl text-gray-600">Связаться с нами через WhatsApp</p>
          </div>

          <div
            className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 animate-fadeInUp"
            style={{ animationDelay: "100ms" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-700">{t.full_name}</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={t.full_name}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-700">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.phone_placeholder}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold mb-3 text-gray-700">{t.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.email_placeholder}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold mb-3 text-gray-700">{t.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t.message_placeholder}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleWhatsAppSubmit}
              disabled={!formData.fullName || !formData.phone || !formData.message}
              className="w-full px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <Send size={24} />
              {t.send_message}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fadeInUp" style={{ animationDelay: "200ms" }}>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-2">Телефон</h3>
              <p className="text-gray-600">+996 555 00-12-56</p>
            </div>
            <div className="text-center animate-fadeInUp" style={{ animationDelay: "300ms" }}>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@nextlub.trip</p>
            </div>
            <div className="text-center animate-fadeInUp" style={{ animationDelay: "400ms" }}>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={32} />
              </div>
              <h3 className="font-bold mb-2">Локация</h3>
              <p className="text-gray-600">Бишкек, Кыргызстан</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-r from-primary/10 to-transparent">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 animate-fadeInUp">{t.startAdventure}</h2>
          <p className="text-xl text-gray-700 mb-8 animate-fadeInUp" style={{ animationDelay: "100ms" }}>
            {t.discount}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <button className="cursor-pointer  px-10 py-4 bg-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              {t.bookNow}
            </button>
            <button className="cursor-pointer px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all duration-300">
              {t.learnMore}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-black mb-4">
                NEXT<span className="text-primary">LUB</span>
              </div>
              <p className="text-gray-400">Next Level Adventures</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Туры</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Гиды</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Помощь</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Контакты</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Условия</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Политика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>wa.me/996555001356</li>
                <li>nextlub.trip</li>
                <li>Бишкек, Кыргызстан</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 NEXTLUB. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function HeroSlider({ t }: { t: (typeof translations)["ru"] }) {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      title: t.discover,
      subtitle: t.adventure,
      cta: t.startTour,
      image: "Snowy Kyrgyzstan mountain landscape with peaks",
    },
    {
      title: t.peaks,
      subtitle: t.profGuides,
      cta: t.climb,
      image: "https://24.kg/files/media/128/128329.jpg",
    },
    {
      title: t.cultural,
      subtitle: t.traditions,
      cta: t.explore,
      image: "Traditional Kyrgyz yurt in beautiful mountain landscape",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={'https://static.tildacdn.one/tild3037-6563-4330-b030-613962383630/1649125013_11-vsegda.png'}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10 max-w-3xl px-4 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">{slides[current].title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">{slides[current].subtitle}</p>
          <button className="px-10 py-4 bg-primary text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            {slides[current].cta}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300 text-white font-bold text-xl"
        >
          ←
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300 text-white font-bold text-xl"
        >
          →
        </button>
      </div>
    </div>
  )
}
