'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react'

export default function TopRibbon() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-green-700 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LEFT: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="hover:scale-110 transition"
          >
            <Facebook size={16} />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="hover:scale-110 transition"
          >
            <Instagram size={16} />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:scale-110 transition"
          >
            <Linkedin size={16} />
          </Link>
        </div>

        {/* RIGHT: Flashing Contact Info */}
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex text-md items-center space-x-6  font-bold text-red-700 "
        >
          <a
            href="tel:+919031007097"
            className="flex items-center space-x-1 hover:underline"
          >
            <Phone size={14} />
            <span>+91 9031007097</span>
          </a>

          <a
            href="mailto:support@citizenimf.com"
            className="flex items-center space-x-1 hover:underline"
          >
            <Mail size={14} />
            <span>Sales@citizenimf.com</span>
          </a>
        </motion.div>

      </div>
    </div>
  )
}
