import React from 'react';

export default function About() {
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>About TOCA</h2>
      <p style={{ color: 'var(--color-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>The next generation of soccer training</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>Who We Are</h3>
          <p style={{ color: 'var(--color-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            TOCA Football provides a one-of-a-kind, tech-enhanced soccer experience for players of all ages and skill levels.
            Serving local communities throughout the United States and Canada, our training centers welcome players and families
            to find their best with classes, training sessions, and league play that meet players' respective skill sets.
          </p>
        </div>

        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>How It Started</h3>
          <p style={{ color: 'var(--color-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            When our founder Eddie Lewis was a soccer player at UCLA, he was obsessed with getting the most out of his abilities.
            He began taking reps with a tennis ball against garages to perfect his technique — a small-is-harder methodology
            that made him better faster. That career spanned from the MLS to the Premier League and two World Cups.
            At the end of his playing days, Eddie created the training experience he wished he had growing up.
          </p>
        </div>

        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>What We Offer</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Private Training', desc: 'Individual or group sessions for ages 7+, with progressive levels for players looking to challenge themselves.' },
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
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            { stat: '50K+', label: 'Happy Players' },
            { stat: '40+', label: 'Centers Nationwide' },
            { stat: '2', label: 'World Cup Appearances' },
          ].map(({ stat, label }) => (
            <div key={label} style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderTop: '2px solid var(--color-primary)',
              borderRadius: '12px', padding: '1.5rem', textAlign: 'center',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}>
              <div style={{ color: 'var(--color-primary)', fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.25rem' }}>{stat}</div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-primary)', borderRadius: '12px', padding: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <p style={{ color: 'var(--color-text)', fontSize: '1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
            "The best thing about TOCA training is that you get so many extra touches on the ball and extra practice with things you can use in a game."
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>— Campbell M., 12 year old TOCA Athlete</p>
        </div>

      </div>
    </div>
  );
}