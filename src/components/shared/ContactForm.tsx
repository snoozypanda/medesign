import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Chip, FormField, Input, RangeSlider, Select, Textarea } from '@/components/ui/form'
import { Check } from '@/components/ui/Icon'
import { fadeInUp } from '@/lib/motion'
import { BUDGET, INTERESTS, REFERRAL_SOURCES } from '@/data/contact'

const etb = (v: number) => `ETB ${v.toLocaleString('en-US')}`

export function ContactForm() {
  const [interests, setInterests] = useState<string[]>([])
  const [budget, setBudget] = useState<number>(BUDGET.default)
  const [submitted, setSubmitted] = useState(false)

  const toggleInterest = (label: string) =>
    setInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label],
    )

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Front-end only: surface a success confirmation (no backend wired up).
    setSubmitted(true)
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="relative overflow-hidden rounded-4xl bg-navy p-7 sm:p-10 lg:p-12"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(102,199,151,0.12),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="relative">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Let&apos;s Create <span className="text-accent">Radical.</span>
        </h2>
        <p className="mt-2 text-sm text-white/60">
          Please fill in the form below. We&apos;ll aim to reply within 1 business day.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-accent/30 bg-accent/10 p-10 text-center"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
                <Check className="h-7 w-7" strokeWidth={2.4} />
              </span>
              <h3 className="text-xl font-bold text-white">Thank you!</h3>
              <p className="max-w-sm text-sm text-white/65">
                Your message has been received. Our team will get back to you within one business
                day.
              </p>
              <Button type="button" variant="outline" onClick={() => setSubmitted(false)}>
                Send another
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={onSubmit}
              className="mt-8 flex flex-col gap-7"
            >
              {/* Interests */}
              <fieldset className="flex flex-col gap-3">
                <legend className="mb-1 text-sm font-semibold text-white">
                  You&apos;re Interested In
                </legend>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {INTERESTS.map((label) => (
                    <Chip
                      key={label}
                      selected={interests.includes(label)}
                      onClick={() => toggleInterest(label)}
                    >
                      {label}
                    </Chip>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Name" htmlFor="name" required>
                  <Input id="name" name="name" placeholder="Enter name" required />
                </FormField>
                <FormField label="Company Name" htmlFor="company">
                  <Input id="company" name="company" placeholder="Enter company name" />
                </FormField>
                <FormField label="Phone" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" placeholder="Enter number" />
                </FormField>
                <FormField label="Email" htmlFor="email" required>
                  <Input id="email" name="email" type="email" placeholder="Enter email" required />
                </FormField>
              </div>

              <RangeSlider
                label="Budget Estimate"
                value={budget}
                min={BUDGET.min}
                max={BUDGET.max}
                step={BUDGET.step}
                onChange={setBudget}
                format={etb}
              />

              <FormField label="Your preferred goals" htmlFor="goals">
                <Textarea id="goals" name="goals" rows={4} placeholder="Tell us about your goals..." />
              </FormField>

              <FormField label="Referral source (Optional)" htmlFor="referral" className="sm:max-w-xs">
                <Select id="referral" name="referral" defaultValue="">
                  <option value="" disabled>
                    Choose an option
                  </option>
                  {REFERRAL_SOURCES.map((src) => (
                    <option key={src} value={src} className="text-ink">
                      {src}
                    </option>
                  ))}
                </Select>
              </FormField>

              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
