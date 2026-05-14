import React from 'react'
import { faqs } from '@/content/faqs'
import styles from './FAQAccordion.module.css'

export interface FAQAccordionProps {
  /** Open the first item by default. */
  defaultOpenFirst?: boolean
}

export default function FAQAccordion({ defaultOpenFirst = true }: FAQAccordionProps) {
  return (
    <div className={styles.list}>
      {faqs.map((faq, i) => (
        <details key={faq.id} className={styles.item} open={defaultOpenFirst && i === 0}>
          <summary className={styles.summary}>
            {faq.question}
            <span className={styles.indicator} aria-hidden="true" />
          </summary>
          <div className={styles.answer}>{faq.answer}</div>
        </details>
      ))}
    </div>
  )
}
