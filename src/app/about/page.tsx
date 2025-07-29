import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About | EstheticLY Skincare',
  description: 'Meet Amy Ly, licensed esthetician specializing in personalized facials and corrective skincare treatments in Charlotte, NC.',
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <section className={styles.heroSection}>
          <h1 className="heading-1">About</h1>
          <h2 className={styles.subtitle}>Transforming skin, Restoring confidence.</h2>
        </section>

        <section className={styles.bioSection}>
          <div className={styles.bioContent}>
            <div className={styles.bioText}>
              <h3 className={styles.bioHeading}>Meet your Esthetician Amy Ly</h3>
              <p className="body-large">
                A 22-year-old Cambodian-American born and raised in Charlotte, NC. When I&apos;m not in the treatment room, 
                you&apos;ll often find me at the gym, enjoying strength training and staying active. I also have a passion 
                for creating customized chocolate-covered strawberry treats, a business I&apos;ve proudly run since 2020.
              </p>
              <p className="body-base">
                As a licensed esthetician, I began my solo journey in 2023 with a focus on delivering personalized 
                facials tailored to each client&apos;s unique skin type, concerns, and goals. With over 10 certifications, 
                including expertise in chemical peels, dermaplaning, sanitation, and more, I prioritize science-based, 
                corrective skincare. While I don&apos;t offer med spa services, my main goal is to provide a safe, relaxing, 
                and comfortable environment for every client.
              </p>
              <p className="body-base">
                Whether you&apos;re looking to start a skincare routine at home or need hands-on care in the treatment room, 
                I&apos;m here to support you. I welcome all skin types and concerns, offering guidance without judgment. 
                My focus is on helping you build a skincare routine that works for your individual needs, with the 
                right ingredients to achieve healthy, glowing skin.
              </p>
            </div>
            <div className={styles.bioImage}>
              <Image
                src="/Images/amyPortait.jpg"
                alt="Amy Ly, Licensed Esthetician"
                width={300}
                height={400}
                className={styles.portrait}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.missionContent}>
            <h3 className={styles.missionHeading}>My Mission</h3>
            <p className="body-base">
              I&apos;ve struggled in my own skin for years with stubborn acne figuring out what works for my skin 
              because products aren&apos;t a &ldquo;one size fits all.&rdquo; I focus on helping others love & be confident 
              in their skin. My goal is for my clients to achieve healthy skin by using active ingredients 
              to treat the skin but still allowing maximum relaxation. I also prioritize necessary lifestyle 
              changes especially internally to address the cause of any skin issues. Remember, 
              <em><strong> healthy skin is perfect skin.</strong></em>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}