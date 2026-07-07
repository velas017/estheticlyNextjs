import DisplaySerif from '@/components/ui/DisplaySerif'
import { contact } from '@/content/contact'
import styles from './ShopBanner.module.css'

export default function ShopBanner() {
  return (
    <section className={styles.section} aria-labelledby="shop-banner-heading">
      <div className={styles.banner}>
        <div className={styles.eyebrow}>Shop Products</div>
        <h2 id="shop-banner-heading" className={styles.heading}>
          Take your results <DisplaySerif>home.</DisplaySerif>
        </h2>
        <p className={styles.lead}>
          The same professional-grade products I use in treatment — hand-picked for
          your skin and shipped straight to your door. Keep your care consistent
          between visits.
        </p>
        <a
          href={contact.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          aria-label="Shop skincare (opens in new tab)"
        >
          Shop skincare <span aria-hidden="true">↗</span>
        </a>
        <p className={styles.trust}>
          Authentic professional products · Ships directly to your door
        </p>
      </div>
    </section>
  )
}
