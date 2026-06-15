'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Phone, Mail } from 'lucide-react'

// Brand/social icons were removed from lucide-react v1, so they are defined
// inline here as lightweight SVG components.
type IconProps = { size?: number }

const Facebook = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
  </svg>
)

const Instagram = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Linkedin = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function TopRibbon() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-green-700 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LEFT: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://facebook.com "
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
          transition={{ duration: 1.0, repeat: Infinity }}
          className="flex text-md items-center space-x-6  font-bold text-white "
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
