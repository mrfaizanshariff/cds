"use client";

import { useActionState } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  return (
    <div className="rounded-3xl bg-zinc-50 p-8 border border-zinc-200/60 dark:bg-zinc-900/10 dark:border-zinc-800/80">
      {state?.success ? (
        <div className="text-center py-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mb-4">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Message Received</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto">
            {state.message}
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            Inquire about our capabilities
          </h3>

          {/* Form Error Banner */}
          {state?.success === false && state.message && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-xs text-red-800 dark:bg-red-950/30 dark:text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
              <span>{state.message}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-zinc-900 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              placeholder="e.g. Alexis Martinez"
              disabled={isPending}
            />
            {state?.errors?.name && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Corporate Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-zinc-900 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              placeholder="alexis@company.com"
              disabled={isPending}
            />
            {state?.errors?.email && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.errors.email}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Company Name (Optional)
            </label>
            <input
              type="text"
              name="company"
              id="company"
              className="block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-zinc-900 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              placeholder="Enterprise Inc."
              disabled={isPending}
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Project Brief & Timeline *
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-zinc-900 focus:ring-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              placeholder="Describe your goals, tech stack preferences, and desired start dates..."
              disabled={isPending}
            />
            {state?.errors?.message && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{state.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:opacity-75 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all duration-200 cursor-pointer"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting Form...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Inquiry
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
