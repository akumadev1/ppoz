'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { Shield, Phone, Mail, MapPin, Facebook,Menu, X, BookText, BookCheck, FireExtinguisher,BadgeCheck } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function ServicesPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Strona Główna', to: '/' },
    { name: 'Zakres usług', to: '/' },
    { name: 'O nas', to: '/' },
    { name: 'Zaufali nam', to: '/' },
    { name: 'Kontakt', to: '/' },
  ]

  const serviceCategories = [
    {
      title: "Projektowanie i Dokumentacja",
      services: [
        "Uzgadnianie dokumentacji projektowej obiektów pod względem ochrony przeciwpożarowej.",
        "Uzgadnianie dokumentacji projektowej instalacji przeciwpożarowych.",
        "Projektowanie instalacji przeciwpożarowych, takich jak:",
        "Weryfikacja dokumentacji projektowej.",
        "Symulacje CFD (komputerowe symulacje oddymiania).",
        "Opracowanie ekspertyz z zakresu ochrony przeciwpożarowej, w tym w zakresie odstępstw od obecnie obowiązujących przepisów.",
        "Ocena zagrożenia wybuchem.",
        "Opracowanie scenariuszy pożarowych.",
        "Opracowanie instrukcji bezpieczeństwa pożarowego.",
      ]
    },
    {
      title: "Nadzór i Konsultacje",
      services: [
        "Nadzór inwestycyjny wraz z przygotowaniem inwestycji do odbioru przed przystąpieniem do eksploatacji.",
        "Opiniowanie rozwiązań z zakresu ochrony przeciwpożarowej.",
        "Doradztwo techniczne i konsultacje w zakresie ochrony przeciwpożarowej.",
        "Wykonywanie zadań audytowych z zakresu ochrony przeciwpożarowej oraz z zakresu bezpieczeństwa i higieny pracy.",
        "Nadzór nad przestrzeganiem przepisów przeciwpożarowych w firmach i instytucjach.",
      ]
    },
    {
      title: "Szkolenia i Wyposażenie",
      services: [
        "Szkolenia z zakresu ochrony przeciwpożarowej i bezpieczeństwa i higieny pracy.",
        "Wyposażenie obiektów w podręczny sprzęt gaśniczy.",
        "Konserwacja (montaż) instalacji:",
        "Okresowe przeglądy techniczne gaśnic i hydrantów.",
        "Operaty przeciwpożarowe dla obiektów i miejsc magazynowania i przetwarzania odpadów (zgodnie z wymogami znowelizowanej Ustawy o odpadach)",
      ]
    },
    {
      title: "Sprzedaż Sprzętu",
      services: [
        "Gaśnice",
        "Hydranty wewnętrzne, zewnętrzne",
        "Szafki hydrantowe, na gaśnicę",
        "Znaki ewakuacyjne, p.poż, bhp",
        "Instrukcje p.poż, bhp",
        "Armatura pożarnicza (węże, prądownice itp.)",
        "Czujniki tlenku węgla, dymowe.",
        "Elementy wchodzące w skład Systemów Sygnalizacji Pożaru, Systemów Oddymiania, (centrale, czujki, okna, klapy dymowe, przyciski itp.)",
      ]
    },
  ]
  const [isDialogOpen, setIsDialogOpen] = useState(true)

  return (
    <div className="min-h-screen bg-white">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">INFORMATION ABOUT TRADEMARKS</h2>
            <p className="text-sm text-gray-600">
            All logos displayed on this site are the property of their respective owners. They are used solely for demonstrative and representational purposes. Their presence does not imply any partnership, endorsement, or approval of the project by these entities.
                      </p>
            <p className="text-sm text-gray-600 mt-2">
            If you have any questions or concerns regarding the use of these logos, please <a className='text-red-800' href='https://akuma-dev.vercel.app'>contact me.</a>
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
              onClick={() => setIsDialogOpen(false)}
            >
              Zamknij
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={'/'}>
<Image
                src="/img/logo.jpg"
                alt="Fire Protection"
                width={120}
                height={88}
              />
              </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.to}
                className="text-gray-600 hover:text-red-600 transition duration-300"
              >
                {link.name}
              </Link>
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
              <Link
                key={link.name}
                href={link.to}
                className="block py-2 px-4 text-gray-600 hover:text-red-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nasze Usługi
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-red-600 mb-4">{category.title}</h2>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <BadgeCheck color="#fe2a2a" className="h-5 w-5  mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Potrzebujesz więcej informacji o naszych usługach?
          </p>
          <Link 
            href="/#contact" 
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 inline-block"
          >
            Skontaktuj się z nami
          </Link>
        </motion.div>
      </main>

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
