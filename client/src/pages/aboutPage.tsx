export default function About() {
  const locations: Record<string, string[]> = {
    'British Columbia': ['Langley', 'North Vancouver'],
    'California': ['Costa Mesa'],
    'Colorado': ['Denver'],
    'Georgia': ['Buckhead', 'Johns Creek', 'Loganville', 'Marietta', 'Perimeter', 'West Cobb'],
    'Illinois': ['Evanston', 'Naperville'],
    'Michigan': ['Farmington', 'Novi East', 'Wixom'],
    'Minnesota': ['Burnsville'],
    'Missouri': ['St. Louis'],
    'North Carolina': ['Indian Trail'],
    'Ohio': ['Cincinnati', 'Columbus', 'Eastlake', 'Northfield', 'Richmond', 'Rocky River', 'Toledo', 'Westlake'],
    'Tennessee': ['Nashville'],
    'Texas': ['Allen', 'Carrollton', 'Keller', 'The Colony'],
    'Washington': ['Lynnwood', 'Redmond'],
    'Wisconsin': ['Madison'],
  };

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>About TOCA</h2>
      <p style={{ color: 'var(--color-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>The next generation of soccer training</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Who We Are */}
        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>Who We Are</h3>
          <p style={{ color: 'var(--color-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            TOCA Football provides a one-of-a-kind, tech-enhanced soccer experience for players of all ages and skill levels.
            Serving local communities throughout the United States and Canada, our training centers welcome players and families
            to find their best with classes, training sessions, and league play that meet players' respective skill sets.
          </p>
        </div>

        {/* How We Started - Eddie photo as banner */}
        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
            <img
              src="https://cdn.prod.website-files.com/60c7be61132e3a9edf0a3315/644c0f30ff728a021b3f0162_Eddie%20Lewis.jpg"
              alt="Eddie Lewis, Founder of TOCA Football"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              padding: '2rem 1.5rem 1rem'
            }}>
              <div style={{ color: '#FFFFFF', fontWeight: '600', fontSize: '1rem' }}>Eddie Lewis</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Founder & President, TOCA Football</div>
            </div>
          </div>
          <div style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>How We Started</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              When our founder Eddie Lewis was a soccer player at UCLA, he was obsessed with getting the most out of his abilities.
              After learning that the UCLA Basketball Team practiced shooting on smaller hoops, he realized he could achieve similar benefits by practicing his soccer touch with a smaller ball. 
              He began taking reps with a tennis ball against garages to perfect his technique. Countless hours and thousands of reps later, he embarked on a career spanning from the MLS to the Premier League and two World Cups. 
              At the end of his playing days, Eddie realized that he had established a unique set of fundamentals that he could pass on to others. 
              That led to the creation of the one-of-a-kind training experience and a soccer brand he wished he had growing up.
            </p>
          </div>
        </div>

        {/* What We Offer - side by side with photo */}
        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '0.5rem' }}>What We Offer</h3>
              {[
                { title: 'Private and Personalized Training', desc: 'Individual or group sessions for ages 7+, with progressive levels for players looking to challenge themselves.' },
                { title: 'Classes', desc: 'Engaging and educational soccer classes for ages 1 to 13.' },
                { title: 'Leagues & Pickup', desc: 'Adult and youth leagues, plus pickup soccer for players who want to compete.' },
                { title: 'Camps & Clinics', desc: 'Intensive training camps and clinics to accelerate development.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '7px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{title}</div>
                    <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width: '40%', flexShrink: 0, padding: '2rem', paddingLeft: 0 }}>
              <img
                src="https://cdn.prod.website-files.com/60c7be61132e3a9edf0a3315/66cca3df7716b09febe4f892_toca-soccer-player-goal-kick.jpg"
                alt="TOCA soccer player training"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>

        {/* Locations */}
        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>Our Locations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '2rem' }}>
            {Object.entries(locations).map(([state, cities]) => (
              <div key={state}>
                <div style={{
                  fontSize: '0.7rem', color: 'var(--color-primary)', textTransform: 'uppercase',
                  letterSpacing: '0.1em', fontWeight: '700', marginBottom: '0.6rem',
                  paddingBottom: '0.4rem', borderBottom: '1px solid var(--color-border)'
                }}>
                  {state}
                </div>
                {cities.map(city => (
                  <div key={city} style={{ color: 'var(--color-muted)', fontSize: '0.85rem', lineHeight: '2' }}>
                    {city}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}