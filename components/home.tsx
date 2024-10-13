'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { Shield, Phone, Mail, MapPin, Facebook,Menu, X, BookText, BookCheck, FireExtinguisher } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const certificates = [
    { name: '  ', image: '/img/1.jpg' },
    { name: '   ', image: '/img/2.jpg' },
    { name: '    ', image: '/img/3.jpg' },
    { name: '    ', image: '/img/4.jpg' },
    { name: '    ', image: '/img/5.jpg' },
    { name: '   ', image: '/img/6.jpg' },
    { name: '    ', image: '/img/7.jpg' },
    { name: '    ', image: '/img/8.jpg' },
    { name: '   ', image: '/img/9.jpg' },
    { name: '   ', image: '/img/10.jpg' },
/*    { name: ' ', image: '/img/11.jpg' },
    { name: ' ', image: '/img/12.jpg' },
    { name: ' ', image: '/img/13.jpg' },
    { name: ' ', image: '/img/14.jpg' },
    { name: ' ', image: '/img/15.jpg' },
    { name: ' ', image: '/img/16.jpg' },
    { name: ' ', image: '/img/17.jpg' },
    { name: ' ', image: '/img/18.jpg' },
    { name: ' ', image: '/img/19.jpg' },
    { name: ' ', image: '/img/20.jpg' },
    { name: ' ', image: '/img/21.jpg' },
    { name: ' ', image: '/img/22.jpg' },
    { name: ' ', image: '/img/23.jpg' },
    { name: ' ', image: '/img/24.jpg' },
    { name: ' ', image: '/img/25.jpg' },
    { name: ' ', image: '/img/26.jpg' }*/
  ]
  const navLinks = [
    { name: 'Strona Główna', to: 'home' },
    { name: 'Zakres usług', to: 'services' },
    { name: 'O nas', to: 'about' },
    { name: 'Zaufali nam', to: 'partners' },
    { name: 'Kontakt', to: 'contact' },
  ]

  const services = [
    { name: 'Dokumentacja Projektowa Obiektów', icon: BookText,description:'Uzgadnianie dokumentacji projektowej obiektów pod względem ochrony przeciwpożarowej.' },
    { name: 'Instalacja Przeciwpożarowa', icon: BookCheck,description:'Uzgadnianie dokumentacji projektowej instalacji przeciwpożarowych.' },
    { name: 'Projektowanie instalacji Przeciwpożarowych', icon: FireExtinguisher,description:'Projektowanie instalacjiprzeciwpożarowych, takich jak:systemy sygnalizacji pożarowej,dźwiękowe systemy ostrzegawcze...' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Nawigacja */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
<Link href={'/'}>
<Image
                src="/img/logo.jpg"
                alt="Fire Protection"
                width={120}
                priority
                height={88}
              />
              </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-red-600 cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-600 hover:text-red-600 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        )}
      </nav>

      
      <Element name="home" className="pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Kompleksowe usługi pożarnicze
              </h1>
              <p className="text-xl text-gray-600 mb-6">
              DS PPOŻ Usługi Inżynierskie to prężnie rozwijająca się firma działająca w zakresie szeroko rozumianej ochrony przeciwpożarowej.
              </p>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 inline-block pointer-events-auto	"
              >
                Skontaktuj się
              </ScrollLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <Image
                src="/img/hero.webp"
                alt="Fire Protection"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </Element>

      <Element name="services" className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nasze usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <service.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 inline-block">
              Zobacz więcej
            </Link>
          </div>
        </div>
      </Element>

      <Element name="about">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <Image
                src="/img/bg.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 md:pl-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">O Nas</h2>
              <p className="text-gray-600 mb-4">
              DS PPOŻ Usługi Inżynierskie to prężnie rozwijająca się firma działająca w zakresie szeroko rozumianej ochrony przeciwpożarowej oraz bezpieczeństwa i higieny pracy. Poprzez inżynierskie spojrzenie oraz indywidualne podejście do każdego klienta
              </p>
              <p className="text-gray-600">
              oferujemy usługi na najwyższym poziomie. Naszym klientom zapewniamy kompleksową obsługę w zakresie doradztwa, projektowania, dostaw, montażu, szkoleń oraz konserwacji.
              </p>
            </motion.div>
          </div>
        </div>
      </Element>

      <Element name="partners" className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Zaufali Nam</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5,6,7,8,9,10].map((partner) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: partner * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md "
              >
                <Image
                  src={`/img/${partner}.png`}
                  alt={`Partner ${partner}`}
                  width={160}
                  height={80}
                  className="h-20 object-contain hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Element>

      <Element name="certificates">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Certyfikaty i Uprawnienia</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={300}
                      height={200}
                      className="cursor-pointer transition-transform hover:scale-105"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px]">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </DialogContent>
                </Dialog>

              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 inline-block">
              Zobacz więcej
            </Link>
          </div>
        </div>
      </Element>

      <Element name="contact" className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Kontakt</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Imię"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  placeholder="Adres E-mail"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <textarea
                  placeholder="Wiadomość"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Wyślij
                </button>
              </form>
            </div>
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-600 mr-2" />
                <span>882 942 421</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-600 mr-2" />
                <span>600 493 592</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-red-600 mr-2" />
                <span>biuro@dsppoz.pl</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-red-600 mr-2" />
                <span>darek@dsppoz.pl</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-2" />
                <span>Zwycięstwa 85, 07-100 Węgrów</span>
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.9647335401028!2d22.037831396247427!3d52.396821522934175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f1582ec99fb59%3A0x974188fbe39629e0!2zRFMgUFBPxbs!5e0!3m2!1sen!2spl!4v1728246691150!5m2!1sen!2spl"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">DSPPOŻ</h3>
              <p className="text-xs mb-4 md:mb-0">&copy; 2024 DS PPOŻ. Wszelkie prawa zastrzeżone. DS PPOŻ (siedziba główna): ul. Zwycięstwa 85, 07-100 Węgrów | DS PPOŻ Sp. z o.o Sp. k.: ul. Konstruktorska 5D/47, 02-673 Warszawa | NIP: 8241808305 | REGON: 382266495 | KRS: 0000765889.</p>
              </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dsppoz/" className="hover:text-red-600">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-sm hover:text-red-600 cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}