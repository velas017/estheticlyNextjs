import Button from '@/components/ui/Button'
import Carousel from '@/components/ui/Carousel'
import ServiceCard from '@/components/ui/ServiceCard'
import styles from './page.module.css'

export default function Home() {
  const heroSlides = [
    {
      src: '/Images/brows2.jpg',
      alt: 'Professional eyebrow treatment'
    },
    {
      src: '/Images/facial.jpg',
      alt: 'Relaxing facial treatment'
    },
    {
      src: '/Images/handsOn2.jpg',
      alt: 'Expert skincare treatment'
    }
  ]

  const services = [
    {
      title: 'Customized Facials',
      duration: '60-90 min treatment',
      details: 'Personalized for your skin type',
      description: 'Tailored to your specific skin type and concerns with professional product lines including SkinScript, Glymed, Dermalogica, and Circadia.',
      imageSrc: '/Images/facial.jpg',
      imageAlt: 'Professional customized facial treatment'
    },
    {
      title: 'Dermaplaning',
      duration: '45-60 min treatment',
      details: 'Gentle exfoliation & hair removal',
      description: 'Gentle exfoliation treatment that removes dead skin cells and vellus hair, revealing smoother, brighter skin.',
      imageSrc: '/Images/brows2.jpg',
      imageAlt: 'Professional dermaplaning treatment'
    },
    {
      title: 'Chemical Peels',
      duration: '30-45 min treatment',
      details: 'Science-based skin renewal',
      description: 'Science-based treatments to improve skin texture, address hyperpigmentation, and promote healthy cell turnover.',
      imageSrc: '/Images/handsOn2.jpg',
      imageAlt: 'Professional chemical peel treatment'
    }
  ]

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className="heading-1">Start your skincare journey</h1>
              <p className="body-large">
                Your skin health matters. Whether you&apos;re looking to relax or address specific concerns, 
                we offer services like microdermabrasion and dermaplaning facials. Start your skincare 
                journey with us today!
              </p>
              <div className={styles.heroCtas}>
                <Button href="/book-now" variant="primary" size="large">
                  Book Now
                </Button>
                <Button href="/learn-more" variant="secondary" size="large">
                  Learn more
                </Button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Carousel slides={heroSlides} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <h2 className="heading-2">Professional Skincare Services</h2>
            <p className="body-large">
              Personalized treatments designed to address your unique skin concerns and goals.
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                details={service.details}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                className={styles.serviceCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* More Services CTA Section */}
      <section className={styles.moreServices}>
        <div className="container">
          <div className={styles.moreServicesCard}>
            <div className={styles.moreServicesContent}>
              <h3 className="heading-3">Discover More Treatments</h3>
              <p className="body-large">
                These are just a few of our most popular services. We offer a full range of specialized treatments including microdermabrasion, brow lamination, and customized solutions for your unique skin concerns.
              </p>
              <Button href="/book-now" variant="primary" size="large">
                View All Services & Book
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
