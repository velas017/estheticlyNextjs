/* global React, Icon, ListRow, Sheet, Disclosure */
const { useState, useMemo } = React;

/* ============= BOOK PAGE ============= */
const services = [
  { id: 'sig', name: 'Signature Facial', duration: '60 min', price: 95, desc: 'Customized cleanse, exfoliation, mask, and massage.' },
  { id: 'derma', name: 'Dermaplaning Facial', duration: '75 min', price: 120, desc: 'Manual exfoliation removes peach fuzz and dead skin.' },
  { id: 'micro', name: 'Microdermabrasion', duration: '75 min', price: 130, desc: 'Resurfacing facial for texture and tone.' },
  { id: 'teen', name: 'Teen Facial', duration: '45 min', price: 70, desc: 'Gentle, education-focused facial for ages 13+.' },
  { id: 'peel', name: 'Chemical Peel', duration: '60 min', price: 140, desc: 'Customized peel for tone, texture, and concerns.' },
];

function Calendar({ selected, onSelect }) {
  const today = new Date(2026, 4, 4); // May 4, 2026
  const [month, setMonth] = useState(new Date(2026, 4, 1));
  const monthName = month.toLocaleString('default', { month: 'long', year: 'numeric' });
  const firstDow = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  const availableDays = [5, 6, 7, 12, 13, 14, 15, 19, 20, 21, 22, 26, 27, 29, 30];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="calendar-month">{monthName}
          <svg width="10" height="14" viewBox="0 0 10 14" style={{ marginLeft: 4 }}>
            <path d="M1 4 5 8l4-4M1 10l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="calendar-nav">
          <button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth()-1, 1))}>‹</button>
          <button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth()+1, 1))}>›</button>
        </div>
      </div>
      <div className="calendar-grid">
        {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="cal-dow">{d}</div>)}
        {cells.map((d, i) => {
          if (d === null) return <div key={i}/>;
          const isToday = d === today.getDate() && month.getMonth() === today.getMonth();
          const isPast = month.getMonth() === today.getMonth() && d < today.getDate();
          const hasAvail = availableDays.includes(d) && !isPast;
          const isSelected = selected === d;
          return (
            <button
              key={i}
              className={[
                'cal-day',
                isToday ? 'today' : '',
                isSelected ? 'selected' : '',
                hasAvail ? 'has-availability' : '',
                isPast || !hasAvail ? 'disabled' : '',
              ].join(' ')}
              disabled={isPast || !hasAvail}
              onClick={() => hasAvail && onSelect(d)}
            >{d}</button>
          );
        })}
      </div>
    </div>
  );
}

function BookPage({ onPolicies }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(null);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const slots = ['10:30 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];
  const svcObj = services.find(s => s.id === service);

  if (confirmed) {
    return (
      <React.Fragment>
        <div className="spacer-32"/>
        <div className="card" style={{ padding: 28, textAlign: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'var(--tint-soft)', color: 'var(--tint)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 14px',
          }}>
            <svg width="40" height="40" viewBox="0 0 26 26" fill="none">
              <path d="m5 13 5 5L21 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>You're booked!</div>
          <div style={{ color: 'var(--label-secondary)', fontSize: 15, lineHeight: 1.5 }}>
            See you {day && `May ${day}`} at {time} for your {svcObj?.name}. <br/>
            Confirmation sent to your email.
          </div>
        </div>
        <div className="spacer-20"/>
        <div style={{ padding: '0 16px' }}>
          <button className="btn secondary full" onClick={() => { setConfirmed(false); setStep(1); setService(null); setDay(null); setTime(null); }}>
            Book another
          </button>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="large-title-wrap">
        <h1 className="large-title">Book</h1>
        <div className="large-title-sub">Step {step} of 3 · {step === 1 ? 'Service' : step === 2 ? 'Date & time' : 'Confirm'}</div>
      </div>

      {step === 1 && (
        <React.Fragment>
          <div className="section-header">Choose a service</div>
          <div className="list">
            {services.map(s => (
              <div
                key={s.id}
                className="list-row"
                onClick={() => { setService(s.id); setStep(2); }}
              >
                <div className="leading" style={{
                  background: service === s.id ? 'var(--tint)' : 'var(--fill-tert)',
                  color: service === s.id ? 'white' : 'var(--label-secondary)',
                  width: 44, height: 44, borderRadius: 10, fontWeight: 700, fontSize: 13,
                }}>
                  ${s.price}
                </div>
                <div className="body">
                  <div className="title">{s.name}</div>
                  <div className="subtitle">{s.duration} · {s.desc}</div>
                </div>
                <div className="trailing"><span className="chevron"/></div>
              </div>
            ))}
          </div>
          <div className="section-footer">A $25 non-refundable deposit applies at booking.</div>
          <div className="spacer-32"/>
          <div style={{ padding: '0 16px' }}>
            <button className="btn tinted full" onClick={onPolicies}>
              Review booking policies
            </button>
          </div>
        </React.Fragment>
      )}

      {step === 2 && (
        <React.Fragment>
          <div className="section-header">{svcObj.name} · {svcObj.duration}</div>
          <Calendar selected={day} onSelect={setDay}/>
          {day && (
            <React.Fragment>
              <div className="section-header">Available times · May {day}</div>
              <div className="slot-grid">
                {slots.map((t, i) => (
                  <button
                    key={i}
                    className={"slot" + (time === t ? ' selected' : '')}
                    disabled={i === 2}
                    onClick={() => setTime(t)}
                  >{t}</button>
                ))}
              </div>
            </React.Fragment>
          )}
          <div className="spacer-32"/>
          <div style={{ padding: '0 16px', display: 'flex', gap: 8 }}>
            <button className="btn secondary" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
            <button className="btn primary" style={{ flex: 2 }} disabled={!day || !time}
              onClick={() => setStep(3)}
              style={{ flex: 2, opacity: (!day || !time) ? 0.4 : 1 }}>
              Next
            </button>
          </div>
        </React.Fragment>
      )}

      {step === 3 && (
        <React.Fragment>
          <div className="section-header">Review</div>
          <div className="list">
            <ListRow noLeading title="Service" trailing={svcObj.name} chevron={false}/>
            <ListRow noLeading title="Duration" trailing={svcObj.duration} chevron={false}/>
            <ListRow noLeading title="Date" trailing={`May ${day}, 2026`} chevron={false}/>
            <ListRow noLeading title="Time" trailing={time} chevron={false}/>
            <ListRow noLeading title="Total" trailing={`$${svcObj.price}`} chevron={false}/>
            <ListRow noLeading title="Deposit due now" trailing="$25" chevron={false}/>
          </div>
          <div className="section-header">Payment method</div>
          <div className="list">
            <ListRow
              leading={<svg width="16" height="11" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="white" stroke="rgba(0,0,0,0.1)"/><rect y="4" width="24" height="3" fill="#222"/></svg>}
              leadingColor="transparent"
              title="Visa · 4242"
              subtitle="Default"
            />
          </div>
          <div className="section-footer">
            By tapping Confirm, you agree to the late and payment policies. The $25 deposit is non-refundable but applies to your final balance.
          </div>
          <div className="spacer-32"/>
          <div style={{ padding: '0 16px', display: 'flex', gap: 8 }}>
            <button className="btn secondary" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</button>
            <button className="btn primary" style={{ flex: 2 }} onClick={() => setConfirmed(true)}>
              Confirm & pay deposit
            </button>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

/* ============ Policies sheet content ============ */
function PoliciesContent() {
  return (
    <React.Fragment>
      <div style={{ padding: '0 20px 12px', color: 'var(--label-secondary)', fontSize: 14 }}>
        Please review &amp; accept these before booking.
      </div>
      <div className="list" style={{ margin: '0 16px' }}>
        <Disclosure summary="Late policy" defaultOpen>
          Please notify me in advance if you anticipate being late. A 15-minute grace period
          is provided. After 15 minutes, you may choose to reschedule; however, your deposit
          will be forfeited and a new $25 deposit will be required to secure a future appointment.
          Alternatively, you may opt to proceed with the remaining time allocated for your service.
        </Disclosure>
        <Disclosure summary="Payment information">
          A valid card on file and a $25 non-refundable deposit are required at the time of booking.
          The deposit will be applied toward your remaining balance, which is due at the conclusion
          of your service.
          <br/><br/>
          Remaining balances are payable by Cash, Zelle, Venmo, Apple Pay, or Square ($3 service charge).
        </Disclosure>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { BookPage, PoliciesContent });
