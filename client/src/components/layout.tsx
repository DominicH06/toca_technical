import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

interface Player {
  email: string;
  firstName: string;
  lastName: string;
}

interface Props {
  player: Player | null;
}

export default function Layout({ player }: Props) {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '64px',
        backgroundColor: 'var(--color-card)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <img
          src="https://cdn.prod.website-files.com/60c7be61132e3a9edf0a3315/64df867654b968a39c399a71_Toca-Logo-Navy.svg"
          alt="TOCA Logo"
          onClick={() => navigate('/home')}
          style={{ height: '32px', cursor: 'pointer', borderRadius: '4px', padding: '4px', transition: 'background 0.15s' }}
          onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.background = 'var(--color-primary-light)'}
          onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.background = 'transparent'}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            onClick={() => navigate('/profile')}
            style={{
              color: 'var(--color-muted)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: '0.4rem 0.6rem',
              borderRadius: '4px',
              transition: 'background 0.15s, color 0.15s'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLSpanElement).style.background = 'var(--color-primary-light)';
              (e.currentTarget as HTMLSpanElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLSpanElement).style.background = 'transparent';
              (e.currentTarget as HTMLSpanElement).style.color = 'var(--color-muted)';
            }}
          >
            {player?.email}
          </span>

          <button
            onClick={() => navigate('/')}
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              padding: '0.4rem 1rem',
              borderRadius: '4px',
              transition: 'background 0.15s, color 0.15s'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-primary-light)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text)';
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        <nav style={{
          width: '200px',
          flexShrink: 0,
          backgroundColor: 'var(--color-card)',
          borderRight: '1px solid var(--color-border)',
          padding: '2rem 0'
        }}>
          {[
            { to: '/home', label: 'Home' },
            { to: '/profile', label: 'Profile' },
            { to: '/about', label: 'About TOCA' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                display: 'block',
                padding: '0.75rem 1.5rem',
                color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
                borderLeft: isActive ? '3px solid var(--color-primary)' : '3px solid transparent',
                textDecoration: 'none',
                fontWeight: isActive ? '600' : '400',
                background: isActive ? 'var(--color-primary-light)' : 'transparent',
                transition: 'background 0.15s, color 0.15s'
              })}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                if (!el.classList.contains('active')) {
                  el.style.background = 'var(--color-primary-light)';
                  el.style.color = 'var(--color-primary)';
                }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                if (!el.classList.contains('active')) {
                  el.style.background = 'transparent';
                  el.style.color = 'var(--color-muted)';
                }
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}