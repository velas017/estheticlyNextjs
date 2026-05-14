/* global React, Icon, StatusBar, NavBar, ListRow, Disclosure, Sheet, Segmented */
const { useState, useEffect, useRef } = React;

/* ============= HOME PAGE ============= */
function HomePage({ navigate, onBookSheet }) {
  return (
    <React.Fragment>
      <div className="hero-card">
        <img src="assets/hero.jpeg" alt=""/>
        <div className="scrim"/>
        <div className="hero-body">
          <div className="eyebrow">EstheticLY · Charlotte, NC</div>
          <h1>Start your skincare journey.</h1>
          <p>Personalized facials, science-based skincare, calm and unhurried care.</p>
          <div style={{ display:'flex', gap:8 }}>
            <button className="btn primary" style={{ flex: 1 }} onClick={() => navigate('book')}>Book Now</button>
            <button className="btn glass" onClick={() => navigate('about')}>Learn more</button>
          </div>
        </div>
      </div>

      <div className="section-header">Quick actions</div>
      <div className="shortcut-grid">
        <button className="shortcut-card" onClick={() => navigate('prep')}>
          <div className="icon-bubble" style={{ background: 'var(--tint)' }}>{Icon.leaf('white')}</div>
          <div className="sc-title">Prep for your facial</div>
          <div className="sc-sub">5 quick tips before you arrive</div>
        </button>
        <button className="shortcut-card" onClick={() => navigate('aftercare')}>
          <div className="icon-bubble" style={{ background: '#6b8e7a' }}>{Icon.drop('white')}</div>
          <div className="sc-title">Aftercare advice</div>
          <div className="sc-sub">Make results last</div>
        </button>
        <button className="shortcut-card" onClick={() => navigate('faq')}>
          <div className="icon-bubble" style={{ background: '#7a6b8e' }}>{Icon.faq('white')}</div>
          <div className="sc-title">FAQ</div>
          <div className="sc-sub">Common questions answered</div>
        </button>
        <button className="shortcut-card" onClick={() => navigate('giftcard')}>
          <div className="icon-bubble" style={{ background: '#b88a5a' }}>{Icon.giftcard('white')}</div>
          <div className="sc-title">Gift cards</div>
          <div className="sc-sub">Give the gift of glow</div>
        </button>
      </div>

      <div className="section-header">Featured</div>
      <div className="callout">
        Your skin is the largest organ on your body — invest in it. Facials improve skin health,
        even tone and texture, and increase absorption of skincare products.
      </div>

      <div className="section-header">More</div>
      <div className="list">
        <ListRow
          leading={Icon.about('white')}
          leadingColor="#937a62"
          title="About Amy"
          subtitle="Licensed esthetician · 10+ certifications"
          onClick={() => navigate('about')}
        />
        <ListRow
          leading={Icon.contact('white')}
          leadingColor="#5a8aa8"
          title="Contact"
          subtitle="Hours, location, phone"
          onClick={() => navigate('contact')}
        />
        <ListRow
          leading={Icon.book('white')}
          leadingColor="#c08a5a"
          title="Booking policies"
          subtitle="Please review before booking"
          onClick={onBookSheet}
        />
      </div>

      <div className="section-header">Recent work</div>
      <div className="gallery">
        <div className="cell"><img src="assets/facial.jpg" alt=""/></div>
        <div className="cell"><img src="assets/handsOn.jpg" alt=""/></div>
        <div className="cell"><img src="assets/brows.jpg" alt=""/></div>
        <div className="cell"><img src="assets/img1.jpg" alt=""/></div>
        <div className="cell"><img src="assets/img2.jpeg" alt=""/></div>
        <div className="cell"><img src="assets/amy-portrait.jpg" alt=""/></div>
      </div>

      <div className="app-footer-text">
        EstheticLY · estheticlyskincare.com<br/>
        7211 E Independence Blvd, Charlotte NC
      </div>
    </React.Fragment>
  );
}

/* ============= PREP PAGE ============= */
const prepCards = [
  {
    id: 'before',
    title: 'Preparing for the facial',
    items: [
      'Discard use of any retinol or acids for a week — no exfoliating 3 days prior, it can make the skin sensitive.',
      'Avoid waxing or tanning for 24 hours.',
      'Try to avoid heavy makeup; it\'s not a hassle if you can\'t — I will remove it.',
      'Remove any necklaces.',
      'Get cozy! Remove shoes, undress waist up (robe is provided), all to personal comfort level.',
    ],
  },
  {
    id: 'using',
    title: 'Can I still get a facial while using…?',
    items: [
      'Contraindications include tretinoin and accutane (must stop use for 6 months).',
      'No injections, botox, laser, etc. for a month.',
      'Reach out for further info if you\'re using any prescribed dermatologist medication.',
      'I work with inflamed acne but can\'t diagnose your skin — see a dermatologist for serious conditions.',
    ],
  },
  {
    id: 'home',
    title: 'I don\'t know what products to use at home',
    items: [
      'A consultation and skin analysis will guide us into the correct at-home routine.',
      'This lets me see your skin type and start you on the right journey, important to know what you\'re already doing.',
    ],
  },
  {
    id: 'first',
    title: 'Expectations for first facial',
    items: [
      'Expect thorough questions in the beginning so I know what we\'re working with.',
      'I\'ll go step by step in depth with each product we are using and why.',
      'Double cleanse, exfoliate, extract if needed, mask, neck and shoulder massage, serums, moisturizer.',
    ],
  },
  {
    id: 'undress',
    title: 'Is undressing required?',
    items: [
      'Undressing waist up is optional, it\'s to your comfort level.',
      'It helps with the neck and shoulder area, but it\'s not required.',
    ],
  },
];
function PrepPage() {
  const [tab, setTab] = useState('before');
  const card = prepCards.find(c => c.id === tab);
  return (
    <React.Fragment>
      <div className="large-title-wrap">
        <h1 className="large-title">Prep</h1>
        <div className="large-title-sub">Before your appointment</div>
      </div>
      <p className="body-text muted">
        Follow these tips before you arrive. Reach out anytime with questions.
      </p>
      <div className="spacer-20"/>
      <Segmented
        value={tab}
        onChange={setTab}
        options={[
          { value: 'before', label: 'Before' },
          { value: 'using', label: 'Using' },
          { value: 'home', label: 'Home' },
          { value: 'first', label: '1st time' },
          { value: 'undress', label: 'Robe' },
        ]}
      />
      <div className="spacer-20"/>
      <div className="section-header">{card.title}</div>
      <div className="card" style={{ padding: '14px 16px' }}>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.5, fontSize: 15 }}>
          {card.items.map((it, i) => <li key={i} style={{ marginBottom: 8 }}>{it}</li>)}
        </ul>
      </div>
      <div className="spacer-32"/>
      <div className="section-footer">Have a question not covered here? Reach out anytime.</div>
    </React.Fragment>
  );
}

/* ============= AFTERCARE PAGE ============= */
function AftercarePage({ navigate }) {
  return (
    <React.Fragment>
      <div className="large-title-wrap">
        <h1 className="large-title">Aftercare</h1>
        <div className="large-title-sub">Make results last</div>
      </div>
      <p className="body-text muted">
        After your appointment, follow these to ensure the best results post-treatment.
        I'll also walk through specifics during your visit.
      </p>
      <div className="spacer-20"/>

      <div className="section-header">How often should I come?</div>
      <div className="card" style={{ padding: '16px' }}>
        <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>Every 4–8 weeks</div>
        <p style={{ margin: 0, fontSize: 15, color: 'var(--label-secondary)', lineHeight: 1.5 }}>
          Skin renews on a cycle. Consistency promotes cell turnover and collagen production,
          and improves texture. Concerns? We'll get there quicker together.
        </p>
      </div>

      <div className="section-header">First 72 hours</div>
      <div className="list">
        <ListRow leading={Icon.check('white')} leadingColor="#6b8e7a" title="No exfoliation for 3 days" chevron={false}/>
        <ListRow leading={Icon.spark('white')} leadingColor="#c08a5a" title="Wear SPF every day" chevron={false}/>
        <ListRow leading={Icon.drop('white')} leadingColor="#5a8aa8" title="Stay hydrated" chevron={false}/>
        <ListRow leading={Icon.close('white')} leadingColor="#a85a5a" title="Avoid touching your face" chevron={false}/>
        <ListRow leading={Icon.close('white')} leadingColor="#a85a5a" title="No sweating, heat, or sauna" chevron={false}/>
      </div>

      <div className="section-header">Makeup</div>
      <div className="callout">
        Avoid makeup for at least <strong>24 hours</strong> so products can absorb fully into the skin.
      </div>

      <div className="spacer-32"/>
      <div style={{ padding: '0 16px' }}>
        <button className="btn primary full" onClick={() => navigate('book')}>Book your next visit</button>
      </div>
    </React.Fragment>
  );
}

/* ============= FAQ PAGE ============= */
const faqs = [
  { q: 'What are the benefits of a facial?', a: 'Your skin is the largest organ on your body — you should invest in it. Facials improve skin health, even tone and texture, increase absorption of skincare products, and much more.' },
  { q: 'What product line will be used?', a: 'My back bar is a variety of brands like skinscript, glymed, dermalogica, circadia and more. Most are pharmaceutical lines or developed by estheticians, so I can cater to different clients and concerns.' },
  { q: 'What is the age requirement?', a: 'The minimum age is 13. Teen facials are available with a guardian\'s consent. Facials are recommended for any age and gender.' },
  { q: 'I have sensitive skin. Can I get a facial?', a: 'Yes — facials are catered to all skin types. We\'ll use calmer, gentler products for sensitive skin.' },
  { q: 'Which facial should I book?', a: 'If this is your first facial, any customized facial is ideal. During the skin analysis I\'ll determine your current condition, sensitivities, and underlying issues to ensure the best treatment for you.' },
];
function FAQPage() {
  return (
    <React.Fragment>
      <div className="large-title-wrap">
        <h1 className="large-title">FAQ</h1>
        <div className="large-title-sub">Frequently asked</div>
      </div>
      <p className="body-text muted">
        Below are answers to commonly asked questions. Tap to expand.
      </p>
      <div className="spacer-20"/>
      <div className="list">
        {faqs.map((f, i) => <Disclosure key={i} summary={f.q}>{f.a}</Disclosure>)}
      </div>

      <div className="spacer-32"/>
      <div className="section-header">Still wondering?</div>
      <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: 16, marginBottom: 14, color: 'var(--label-secondary)' }}>
          Have a specific question you need answered?
        </div>
        <a href="mailto:amyly.esthetics@gmail.com" className="btn primary" style={{ textDecoration:'none' }}>
          {Icon.mail('white')} Ask Me
        </a>
      </div>
    </React.Fragment>
  );
}

/* ============= ABOUT PAGE ============= */
function AboutPage() {
  const [purposeOpen, setPurposeOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="large-title-wrap">
        <h1 className="large-title">About</h1>
        <div className="large-title-sub">Transforming skin · Restoring confidence</div>
      </div>
      <div className="hero-card" style={{ aspectRatio: '4/4', marginTop: 12 }}>
        <img src="assets/amy-portrait.jpg" alt="Amy Ly"/>
        <div className="scrim"/>
        <div className="hero-body">
          <div className="eyebrow">Meet</div>
          <h1 style={{ fontSize: 28 }}>Amy Ly</h1>
          <p>Licensed esthetician · Charlotte, NC</p>
        </div>
      </div>

      <div className="spacer-20"/>
      <p className="body-text">
        A 22-year-old Cambodian-American born and raised in Charlotte, NC. When I'm not in the
        treatment room, you'll often find me at the gym, enjoying strength training and staying active.
      </p>
      <p className="body-text">
        As a licensed esthetician, I began my solo journey in 2023 with a focus on personalized facials
        tailored to each client's unique skin type, concerns, and goals. With over 10 certifications —
        including chemical peels, dermaplaning, and sanitation — I prioritize science-based, corrective
        skincare in a safe, relaxing environment.
      </p>
      <p className="body-text">
        Whether you're starting a routine at home or need hands-on care, I'm here to support you.
        I welcome all skin types and concerns, with guidance and without judgment.
      </p>

      <div className="spacer-20"/>
      <div className="section-header">My purpose</div>
      <div className="card">
        <button
          className="list-row no-leading"
          onClick={() => setPurposeOpen(o => !o)}
          style={{ width:'100%', border:'none', font:'inherit', textAlign:'left' }}
        >
          <div className="body">
            <div className="title">{purposeOpen ? 'Hide' : 'Read'} my story</div>
          </div>
          <div className="trailing">
            <span className="chevron" style={{ transform: purposeOpen ? 'rotate(135deg)' : 'rotate(45deg)', transition:'transform 0.2s' }}/>
          </div>
        </button>
        {purposeOpen && (
          <div className="callout" style={{ margin: '0 16px 16px', borderLeft:'3px solid var(--tint)' }}>
            I've struggled in my own skin for years with stubborn acne, figuring out what works
            because products aren't a "one size fits all." I focus on helping others love and be confident
            in their skin — using active ingredients to treat skin while allowing maximum relaxation.
            I prioritize lifestyle changes, especially internally, to address the cause of skin issues.
            Remember, <em>healthy skin is perfect skin.</em>
          </div>
        )}
      </div>

      <div className="section-header">Certifications</div>
      <div className="list">
        <ListRow leading={Icon.check('white')} leadingColor="var(--tint)" title="Chemical peels" chevron={false}/>
        <ListRow leading={Icon.check('white')} leadingColor="var(--tint)" title="Dermaplaning" chevron={false}/>
        <ListRow leading={Icon.check('white')} leadingColor="var(--tint)" title="Microdermabrasion" chevron={false}/>
        <ListRow leading={Icon.check('white')} leadingColor="var(--tint)" title="Sanitation & Disinfection" chevron={false}/>
        <ListRow leading={Icon.check('white')} leadingColor="var(--tint)" title="Acne treatments" chevron={false}/>
        <ListRow leading={Icon.check('white')} leadingColor="var(--tint)" title="6+ more specialties" chevron={false}/>
      </div>
    </React.Fragment>
  );
}

/* ============= CONTACT PAGE ============= */
function ContactPage() {
  return (
    <React.Fragment>
      <div className="large-title-wrap">
        <h1 className="large-title">Contact</h1>
        <div className="large-title-sub">Send a message · Call · Visit</div>
      </div>
      <p className="body-text muted">
        I'm happy to help and be a part of your skincare journey.
      </p>
      <div className="spacer-20"/>

      <div className="section-header">Reach out</div>
      <div className="list">
        <ListRow
          leading={Icon.mail('white')} leadingColor="#5a8aa8"
          title="Email" subtitle="amyly.esthetics@gmail.com"
          onClick={() => window.location.href = 'mailto:amyly.esthetics@gmail.com'}
        />
        <ListRow
          leading={Icon.phone('white')} leadingColor="#6b8e7a"
          title="Phone" subtitle="980.999.3115 · Call or text"
          onClick={() => window.location.href = 'tel:9809993115'}
        />
        <ListRow
          leading={Icon.ig('white')} leadingColor="#c0598a"
          title="Instagram" subtitle="@estheticlyskincare"
        />
        <ListRow
          leading={Icon.fb('white')} leadingColor="#5a78c0"
          title="Facebook" subtitle="@EstheticLY"
        />
      </div>

      <div className="section-header">Hours</div>
      <div className="list">
        <ListRow leading={Icon.clock('white')} leadingColor="#937a62" title="Tuesday & Wednesday" trailing="10:30am – 7:00pm" chevron={false}/>
        <ListRow leading={Icon.clock('white')} leadingColor="#937a62" title="Friday & Saturday" trailing="10:00am – 5:00pm" chevron={false}/>
      </div>
      <div className="section-footer">Hours may vary. After-hour appointments available upon request.</div>

      <div className="section-header">Location</div>
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{
          height: 160,
          background: 'linear-gradient(135deg, #d4cdbf 0%, #b8a89a 100%)',
          position: 'relative',
          display:'flex', alignItems:'center', justifyContent:'center',
          color: 'var(--tint)',
        }}>
          <svg width="100%" height="100%" viewBox="0 0 400 160" preserveAspectRatio="none" style={{ position:'absolute', inset: 0, opacity: 0.4 }}>
            <path d="M0 80 Q100 40 200 80 T400 80" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M0 100 L120 100 L120 50 L260 50 L260 130 L400 130" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <path d="M0 30 L80 30 L80 110 L200 110 L200 150" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5"/>
          </svg>
          <div style={{ position:'relative', zIndex: 1, color: 'var(--tint)', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))' }}>
            {Icon.pin('var(--tint)')}
          </div>
        </div>
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 17, fontWeight: 600 }}>Sassy Salon</div>
          <div style={{ fontSize: 14, color: 'var(--label-secondary)', marginTop: 2 }}>
            7211 E Independence Blvd<br/>Charlotte, NC 28227
          </div>
          <div style={{ marginTop: 10 }}>
            <span className="policy-pill">Appointment-based · No walk-ins</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ============= GIFT CARD ============= */
function GiftcardPage() {
  return (
    <React.Fragment>
      <div className="large-title-wrap">
        <h1 className="large-title">Gift Cards</h1>
        <div className="large-title-sub">Give the gift of glow</div>
      </div>
      <div style={{ margin: '8px 16px' }}>
        <img src="assets/giftcard.png" alt="" style={{ width: '100%', borderRadius: 16, display: 'block' }}/>
      </div>
      <div className="spacer-20"/>
      <div className="section-header">Amount</div>
      <div className="slot-grid">
        {[50, 75, 100, 150, 200, 'Custom'].map((amt, i) => (
          <button key={i} className={"slot" + (amt === 100 ? ' selected' : '')}>
            {typeof amt === 'number' ? `$${amt}` : amt}
          </button>
        ))}
      </div>
      <div className="spacer-32"/>
      <div style={{ padding: '0 16px' }}>
        <button className="btn primary full">Send gift card</button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, PrepPage, AftercarePage, FAQPage, AboutPage, ContactPage, GiftcardPage });
