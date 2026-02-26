import React from 'react';

interface Player {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  dob: string;
  centerName: string;
  createdAt: string;
}

interface Props {
  player: Player | null;
}

export default function Profile({ player }: Props) {
  if (!player) return <p>Not logged in.</p>;

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Profile</h2>
      <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>Your player information</p>

      <div style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { label: 'First Name', value: player.firstName },
            { label: 'Last Name', value: player.lastName },
            { label: 'Email', value: player.email },
            { label: 'Phone', value: player.phone },
            { label: 'Gender', value: player.gender },
            { label: 'Date of Birth', value: new Date(player.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
            { label: 'Center', value: player.centerName },
            { label: 'Member Since', value: new Date(player.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{label}</div>
              <div style={{ color: 'var(--color-text)', fontWeight: '500' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}