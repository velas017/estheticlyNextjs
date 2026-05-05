import React from 'react'
import Image from 'next/image'
import DisplaySerif from '@/components/ui/DisplaySerif'
import { bioParagraphs, signatureQuote } from '@/content/about'
import styles from './AboutStrip.module.css'

export interface AboutStripProps {
  /** When true, renders both bio paragraphs. Default shows only the first two. */
  full?: boolean
}

export default function AboutStrip({ full = false }: AboutStripProps) {
  const paras = full ? bioParagraphs : bioParagraphs.slice(0, 2)
  return (
    <section className={styles.section} id="about">
      <div className={styles.strip}>
        <div className={styles.photo}>
          <Image
            src="/Images/amyPortait2.jpg"
            alt="Amy Ly"
            width={520}
            height={650}
            className={styles.photoImg}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.eyebrow}>About</div>
          <h2 className={styles.heading}>
            Meet <DisplaySerif>Amy Ly.</DisplaySerif>
          </h2>
          {paras.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}
          <div className={styles.signature}>— {signatureQuote}</div>
        </div>
      </div>
    </section>
  )
}
