import Link from "next/link"
import { IconMapPin, IconPhone, IconMail, IconClock, IconSkull } from "@tabler/icons-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc143c' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <IconSkull className="h-6 w-6 text-red-600" />
              <h3 className="text-2xl font-serif font-bold text-white">
                River Fields <span className="text-red-600">Mortuary</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Serving the community with dignity, compassion, and care since 1970. At River Fields Mortuary, you are
              never alone - we are always behind you.
            </p>
            <div className="text-red-400 font-semibold mb-4">Served 1000+ happy clients</div>

            {/* Uncanny fact in footer */}
            <div className="p-3 bg-gray-900/50 border border-red-900/50 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-red-400 italic">
                The word "mortuary" comes from the Latin "mortuus," meaning dead. Our sacred duty is to honor this
                transition.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Embalming Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Burial Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Cremation Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Grief Counseling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                  Cold Storage
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <IconMapPin className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="text-gray-300">
                  2960 Bullhurst Lane
                  <br />
                  Milford
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone className="h-5 w-5 text-red-600" />
                <Link
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  (123) 456-7890
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <IconMail className="h-5 w-5 text-red-600" />
                <Link
                  href="mailto:info@riverfields.com"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  info@riverfields.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <IconClock className="h-5 w-5 text-red-600" />
                <div className="text-gray-300">Mon-Fri: 9:00 AM - 7:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} River Fields Mortuary. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm italic text-center">
              "Raymond Delver is in charge of finding employees he believes capable of combating the demons located
              there"
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
