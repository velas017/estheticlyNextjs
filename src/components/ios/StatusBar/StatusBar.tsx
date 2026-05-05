'use client'

import React, { useEffect, useState } from 'react'
import styles from './StatusBar.module.css'

function formatTime() {
  if (typeof window === 'undefined') return '9:41'
  return new Date()
    .toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    .replace(/\s?(AM|PM)/i, '')
}

export default function StatusBar() {
  const [time, setTime] = useState('9:41')

  useEffect(() => {
    setTime(formatTime())
    const id = setInterval(() => setTime(formatTime()), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={styles.bar} aria-hidden="true">
      <span className={styles.time}>{time}</span>
      <div className={styles.right}>
        <div className={styles.signal}>
          <span /><span /><span /><span />
        </div>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor" className={styles.wifi}>
          <path d="M8 2.2c1.7 0 3.3.6 4.6 1.7l1.1-1.2A8.5 8.5 0 0 0 8 .5 8.5 8.5 0 0 0 2.3 2.7l1.1 1.2A6.7 6.7 0 0 1 8 2.2Z" />
          <path d="M8 5.5c.9 0 1.7.3 2.4.9l1.1-1.2A5.4 5.4 0 0 0 8 3.7c-1.4 0-2.6.5-3.5 1.5l1.1 1.2A3.7 3.7 0 0 1 8 5.5Z" />
          <circle cx="8" cy="8.7" r="1.5" />
        </svg>
        <div className={styles.battery}><div className={styles.fill} /></div>
      </div>
    </div>
  )
}
