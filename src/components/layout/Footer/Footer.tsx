import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Content */}
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <div className={styles.logoTop}>EstheticLY</div>
              <div className={styles.logoBottom}>Facials and skincare</div>
            </div>
            <p className={styles.brandDescription}>
              Professional skincare treatments and personalized beauty solutions 
              to enhance your natural glow.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="/about" className={styles.footerLink}>About</Link></li>
              <li><Link href="/prep" className={styles.footerLink}>Prep</Link></li>
              <li><Link href="/aftercare" className={styles.footerLink}>Aftercare</Link></li>
              <li><Link href="/learn-more" className={styles.footerLink}>FAQ</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:amyly.esthetics@gmail.com" className={styles.contactLink}>
                  amyly.esthetics@gmail.com
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone:</span>
                <a href="tel:+19809993115" className={styles.contactLink}>
                  980.999.3115
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Location:</span>
                <span>Charlotte, NC</span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.socialSection}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/estheticlyskincare/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61564316234527" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2024 EstheticLY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}