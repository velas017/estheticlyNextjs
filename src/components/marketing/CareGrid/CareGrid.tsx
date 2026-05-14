import React from 'react'
import styles from './CareGrid.module.css'

export interface CareCardData {
  /** Italic-serif numeral or marker shown above the title (e.g. "01", "3d", "4–8"). */
  num: string
  title: string
  items: string[]
}

export interface CareGridProps {
  cards: CareCardData[]
}

export default function CareGrid({ cards }: CareGridProps) {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <article key={card.title} className={styles.card}>
          <div className={styles.num}>{card.num}</div>
          <h3 className={styles.title}>{card.title}</h3>
          <ul className={styles.list}>
            {card.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
