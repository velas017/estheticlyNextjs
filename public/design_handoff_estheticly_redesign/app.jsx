/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakToggle, TweakRadio, TweakSelect,
   StatusBar, NavBar, Icon, Sheet, HomePage, PrepPage, AftercarePage, FAQPage, AboutPage, ContactPage, GiftcardPage,
   BookPage, PoliciesContent */
const { useState, useEffect, useRef } = React;

function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "tint": "#937a62",
    "darkMode": false,
    "tabBarStyle": "translucent",
    "fontFamily": "sf",
    "showLargeTitle": true
  }/*EDITMODE-END*/;

  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Active tab and stack-based nav
  const [activeTab, setActiveTab] = useState('home');
  const [stack, setStack] = useState({ home: ['home'], prep: ['prep'], aftercare: ['aftercare'], faq: ['faq'], book: ['book'] });
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pageRef = useRef(null);

  const currentScreen = stack[activeTab][stack[activeTab].length - 1];

  // Reset scroll on screen change
  useEffect(() => {
    if (pageRef.current) pageRef.current.scrollTop = 0;
    setScrolled(false);
  }, [activeTab, currentScreen]);

  function navigate(screen) {
    // Determine which tab the screen belongs to
    const tabMap = {
      home:'home', about:'home', contact:'home', giftcard:'home',
      prep:'prep', aftercare:'aftercare', faq:'faq', book:'book',
    };
    const targetTab = tabMap[screen] || 'home';
    setActiveTab(targetTab);
    setStack(s => {
      // If navigating to root of a tab, just go to that tab
      if (screen === targetTab) return s;
      // Push onto the target tab's stack
      const cur = s[targetTab];
      if (cur[cur.length - 1] === screen) return s;
      return { ...s, [targetTab]: [...cur, screen] };
    });
  }

  function goBack() {
    setStack(s => {
      const cur = s[activeTab];
      if (cur.length <= 1) return s;
      return { ...s, [activeTab]: cur.slice(0, -1) };
    });
  }

  function switchTab(tab) {
    setActiveTab(tab);
  }

  // Apply theme + tint as CSS vars
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.darkMode ? 'dark' : 'light');
    document.documentElement.style.setProperty('--tint', tweaks.tint);
    // tint-soft / tint-fade derived
    const hex = tweaks.tint.replace('#','');
    const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
    document.documentElement.style.setProperty('--tint-soft', `rgba(${r},${g},${b},0.12)`);
    document.documentElement.style.setProperty('--tint-fade', `rgba(${r},${g},${b},0.06)`);

    if (tweaks.fontFamily === 'geist') {
      document.documentElement.style.setProperty('--font', '"Geist", -apple-system, system-ui, sans-serif');
    } else if (tweaks.fontFamily === 'serif') {
      document.documentElement.style.setProperty('--font', '"New York", "Times New Roman", Georgia, serif');
    } else {
      document.documentElement.style.setProperty('--font', '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif');
    }
  }, [tweaks]);

  function onScroll(e) {
    setScrolled(e.target.scrollTop > 12);
  }

  const screenTitles = {
    home: 'EstheticLY',
    about: 'About',
    contact: 'Contact',
    giftcard: 'Gift Cards',
    prep: 'Prep',
    aftercare: 'Aftercare',
    faq: 'FAQ',
    book: 'Book',
  };

  function renderScreen(screen) {
    switch (screen) {
      case 'home': return <HomePage navigate={navigate} onBookSheet={() => setPoliciesOpen(true)}/>;
      case 'about': return <AboutPage/>;
      case 'contact': return <ContactPage/>;
      case 'giftcard': return <GiftcardPage/>;
      case 'prep': return <PrepPage/>;
      case 'aftercare': return <AftercarePage navigate={navigate}/>;
      case 'faq': return <FAQPage/>;
      case 'book': return <BookPage onPolicies={() => setPoliciesOpen(true)}/>;
      default: return null;
    }
  }

  const tabStackLen = stack[activeTab].length;
  const showBack = tabStackLen > 1;
  const parentScreen = showBack ? stack[activeTab][tabStackLen - 2] : null;

  return (
    <React.Fragment>
      <div id="app-shell" data-screen-label={`01 ${screenTitles[currentScreen]}`}>
        <StatusBar/>
        <NavBar
          title={screenTitles[currentScreen]}
          scrolled={scrolled || (currentScreen !== 'home' && tweaks.showLargeTitle === false)}
          onBack={showBack ? goBack : null}
          leftLabel={parentScreen ? screenTitles[parentScreen] : ''}
          right={currentScreen === 'home' ? (
            <button className="nav-button icon" aria-label="Share">{Icon.share()}</button>
          ) : null}
        />

        <div className="page" ref={pageRef} onScroll={onScroll} key={`${activeTab}-${currentScreen}`}>
          {/* Large title for home only (special hero treatment elsewhere) */}
          {renderScreen(currentScreen)}
          <div style={{ height: 24 }}/>
        </div>

        {/* Tab Bar */}
        <div className={"tab-bar" + (tweaks.tabBarStyle === 'solid' ? ' solid' : '')}>
          {[
            { id: 'home', label: 'Home', icon: Icon.home },
            { id: 'prep', label: 'Prep', icon: Icon.prep },
            { id: 'aftercare', label: 'Aftercare', icon: Icon.aftercare },
            { id: 'faq', label: 'FAQ', icon: Icon.faq },
            { id: 'book', label: 'Book', icon: Icon.book },
          ].map(t => (
            <button
              key={t.id}
              className={"tab-item" + (activeTab === t.id ? ' active' : '')}
              onClick={() => switchTab(t.id)}
            >
              {t.icon(activeTab === t.id ? 'var(--tint)' : 'currentColor')}
              <span className="tab-label">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Policies sheet */}
        <Sheet open={policiesOpen} onClose={() => setPoliciesOpen(false)} title="Booking Policies">
          <PoliciesContent/>
        </Sheet>
      </div>

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakColor label="Tint color" value={tweaks.tint} onChange={v => setTweak('tint', v)}/>
          <TweakToggle label="Dark mode" value={tweaks.darkMode} onChange={v => setTweak('darkMode', v)}/>
        </TweakSection>
        <TweakSection title="Type">
          <TweakRadio
            label="Font family"
            value={tweaks.fontFamily}
            onChange={v => setTweak('fontFamily', v)}
            options={[
              { value: 'sf', label: 'SF Pro' },
              { value: 'geist', label: 'Geist' },
              { value: 'serif', label: 'Serif' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Chrome">
          <TweakRadio
            label="Tab bar"
            value={tweaks.tabBarStyle}
            onChange={v => setTweak('tabBarStyle', v)}
            options={[
              { value: 'translucent', label: 'Translucent' },
              { value: 'solid', label: 'Solid' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
