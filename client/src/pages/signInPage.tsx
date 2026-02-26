import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

// allows player state to be updated
interface Props {
  onSignIn: (player: Player) => void;
}

// handles changes in state of emails and errors
export default function SignIn({ onSignIn }: Props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/player?email=${encodeURIComponent(email)}`);
      if (!res.ok) {
        setError('No player found with that email.');
        return;
      }
      const player = await res.json();
      onSignIn(player);
      navigate('/home');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-bg)'
    }}>
      <div style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '700px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
      }}>
        <img
          src="https://cdn.prod.website-files.com/60c7be61132e3a9edf0a3315/64df867654b968a39c399a71_Toca-Logo-Navy.svg"
          alt="TOCA Logo"
          style={{ height: '36px', marginBottom: '1rem' }}
        />
        <h2 style={{ color: 'var(--color-text)', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem' }}>
          Welcome back
        </h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Sign in to access your player portal
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{
            display: 'block',
            color: 'var(--color-muted)',
            fontSize: '0.8rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="player@example.com"
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              color: 'var(--color-text)',
              fontSize: '1rem',
              marginBottom: '1rem',
              boxSizing: 'border-box' as const
            }}
          />
          {error && (
            <p style={{ color: '#DC2626', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: loading ? 'var(--color-muted)' : 'var(--color-primary)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Loading...' : 'Enter Portal'}
          </button>
        </form>
      </div>
    </div>
  );
}