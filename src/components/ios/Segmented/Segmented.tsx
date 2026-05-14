'use client'

import React from 'react'
import styles from './Segmented.module.css'

export interface SegmentedOption<T extends string> {
  value: T
  label: string
}

export interface SegmentedProps<T extends string> {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
}

export default function Segmented<T extends string>({ options, value, onChange }: SegmentedProps<T>) {
  const idx = options.findIndex((o) => o.value === value)
  const w = 100 / options.length
  const indicatorStyle: React.CSSProperties = {
    width: `calc(${w}% - 4px)`,
    transform: `translateX(calc(${idx * 100}% + ${idx * 4}px))`,
    left: 2,
  }

  return (
    <div className={styles.segmented}>
      <div className={styles.indicator} style={indicatorStyle} />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`${styles.button} ${o.value === value ? styles.active : ''}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
