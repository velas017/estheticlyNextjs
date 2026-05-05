import React from 'react'
import LargeTitle from '@/components/ios/LargeTitle'
import { ListInsetGrouped } from '@/components/ios/List'
import Disclosure from '@/components/ios/Disclosure'
import { MailIcon } from '@/components/ios/Icons'
import { faqs } from '@/content/faqs'
import { contact } from '@/content/contact'
import styles from './FAQMobile.module.css'

export default function FAQMobile() {
  return (
    <>
      <LargeTitle title="FAQ" subtitle="Frequently asked" />
      <p className={styles.bodyText}>
        Below are answers to commonly asked questions. Tap to expand.
      </p>

      <ListInsetGrouped>
        {faqs.map((faq) => (
          <Disclosure key={faq.id} summary={faq.question}>
            {faq.answer}
          </Disclosure>
        ))}
      </ListInsetGrouped>

      <div className={styles.sectionHeader}>Still wondering?</div>
      <div className={styles.askCard}>
        <div className={styles.askText}>
          Have a specific question you need answered?
        </div>
        <a href={`mailto:${contact.email}`} className={styles.askBtn}>
          <MailIcon size={18} color="#fff" /> Ask Me
        </a>
      </div>
    </>
  )
}
