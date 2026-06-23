'use client'

import { useEffect, useState } from 'react'
import styles from './GoogleReviewBadge.module.css'

const REVIEW_URL = 'https://g.page/r/CbYyx3JrpzcEEAE/review'

// Session-scoped: a dismissed badge returns on the visitor's next session,
// so repeat visitors are gently re-invited to leave a review.
const SESSION_DISMISS_KEY = 'estheticly:reviewBadgeDismissed:session'

function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-8 20-20 0-1.2-.1-2.4-.4-3.5z"
      />
      <path
        fill="#34A853"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#FBBC05"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z"
      />
      <path
        fill="#EA4335"
        d="M43.6 20.5h-1.9V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C41.2 35.6 44 30.2 44 24c0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  )
}

export default function GoogleReviewBadge() {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_DISMISS_KEY) !== '1') {
      setHidden(false)
    }
  }, [])

  if (hidden) return null

  const handleDismiss = () => {
    sessionStorage.setItem(SESSION_DISMISS_KEY, '1')
    setHidden(true)
  }

  return (
    <div className={styles.wrapper}>
      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.badge}
        aria-label="Leave us a Google review (opens in new tab)"
      >
        <GoogleGIcon className={styles.icon} />
        <span className={styles.label}>Review us on Google</span>
      </a>
      <button
        type="button"
        onClick={handleDismiss}
        className={styles.dismiss}
        aria-label="Dismiss review prompt"
      >
        ×
      </button>
    </div>
  )
}
