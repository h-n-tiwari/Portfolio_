'use client';

import { useState } from 'react';
import { submitContactForm } from '@/lib/api';

export default function Contact() {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // UI state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  // Simple validation
  function validate() {
    const newErrors: Record<string, string> = {};
    if (name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email address.';
    if (subject.trim().length < 3) newErrors.subject = 'Subject must be at least 3 characters.';
    if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setServerError('');
    setErrors({});

    try {
      await submitContactForm({ name, email, subject, message });
      setSuccess(true);
      // Clear the form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // Shared input style
  const inputStyle =
    'w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 hover:border-slate-700 transition-colors';

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6 mx-auto" />
          <p className="text-slate-400 text-sm">
            Have a project in mind or want to connect? Send a message and I'll get back to you.
          </p>
        </div>

        {/* Success message */}
        {success ? (
          <div className="text-center py-16 bg-slate-900 border border-green-500/20 rounded-xl">
            <p className="text-2xl mb-2">✅</p>
            <p className="text-slate-100 font-semibold mb-1">Message sent!</p>
            <p className="text-slate-400 text-sm mb-4">Thanks for reaching out. I'll respond as soon as I can.</p>
            <button
              onClick={() => setSuccess(false)}
              className="text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-5"
          >

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputStyle}
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputStyle}
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's this about?"
                className={inputStyle}
              />
              {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className={`${inputStyle} resize-none`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            {/* Server error */}
            {serverError && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                ⚠️ {serverError}
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                '📨 Send Message'
              )}
            </button>

          </form>
        )}
      </div>
    </section>
  );
}
