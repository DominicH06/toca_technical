import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Session {
  id: string;
  trainerName: string;
  startTime: string;
  endTime: string;
  numberOfBalls: number;
  bestStreak: number;
  numberOfGoals: number;
  score: number;
  avgSpeedOfPlay: number;
  numberOfExercises: number;
}

export default function SessionDetail() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState('');

  // defines and calls function load, which loads page with info based on sessionId
  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch(`/api/session/${sessionId}`);
        if (!r.ok) throw new Error('Not found');
        const data = await r.json();
        setSession(data);
      } catch {
        setError('Session not found');
      }
    };
    load();
  }, [sessionId]);

  if (error) return <p style={{ color: '#DC2626' }}>{error}</p>;
  if (!session) return <p style={{ color: 'var(--color-muted)' }}>Loading...</p>;

  return (
    <div style={{ maxWidth: '700px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ background: 'none', border: 'none', color: 'var(--color-muted)', cursor: 'pointer', marginBottom: '1.5rem', fontSize: '0.85rem' }}
      >
        ← Back
      </button>

      <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Session Details</h2>
      <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
        {new Date(session.startTime).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} · {session.trainerName}
      </p>

      <div style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { label: 'Score', value: session.score },
            { label: 'Number of Balls', value: session.numberOfBalls },
            { label: 'Number of Goals', value: session.numberOfGoals },
            { label: 'Best Streak', value: session.bestStreak },
            { label: 'Avg Speed of Play', value: session.avgSpeedOfPlay },
            { label: 'Exercises', value: session.numberOfExercises },
            { label: 'Duration', value: `${Math.round((new Date(session.endTime).getTime() - new Date(session.startTime).getTime()) / 60000)} min` },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '1rem',
              borderTop: '2px solid var(--color-primary)'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                {label}
              </div>
              <div style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: '600' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}