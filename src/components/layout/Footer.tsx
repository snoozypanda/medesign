import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from '@/components/ui/Icon'
import { fadeInUp, revealOnce, staggerContainer } from '@/lib/motion'

const COMPANY_LINKS = [
  { label: 'Company', to: '/about' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/work' },
  { label: 'Blog', to: '/blog' },
]

const SERVICE_LINKS = [
  { label: 'Web Development', to: '/services' },
  { label: 'UI UX Design', to: '/services' },
  { label: 'Brand Identity', to: '/services' },
  { label: 'Digital Marketing', to: '/services' },
]

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <motion.div variants={staggerContainer(0.08)} {...revealOnce}>
        <Container className="py-16 lg:py-20">
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-2 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <h2 className="text-4xl font-extrabold text-accent sm:text-5xl">Let&apos;s</h2>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Connect</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-10 pt-12 md:grid-cols-4">
            <motion.div variants={fadeInUp} className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <Logo />
              <p className="max-w-xs text-sm leading-relaxed text-white/60">
                Creative design, strategy, and data-driven marketing to help healthcare brands grow
                with purpose.
              </p>
            </motion.div>

            <motion.nav variants={fadeInUp} aria-label="Company" className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Company</p>
              {COMPANY_LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </motion.nav>

            <motion.nav variants={fadeInUp} aria-label="Services" className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Services</p>
              {SERVICE_LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </motion.nav>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white">Contact</p>
              <a
                href="mailto:hello@medesign.com"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" /> hello@medesign.com
              </a>
              <a
                href="tel:+251988783646"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" /> +251 98 878 3646
              </a>
              <p className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> 123 Design Street,
                Creative City, CC 12345
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
          >
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} MEDesign. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-accent hover:text-ink"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </footer>
  )
}
