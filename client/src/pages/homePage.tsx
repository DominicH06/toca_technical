import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Player {
  id: string;
  firstName: string;
  lastName: string;
}

interface Session {
  id: string;
  trainerName: string;
  startTime: string;
  endTime: string;
  numberOfBalls: number;
  bestStreak: number;
  numberOfGoals: number;
  score: number;
}

interface Appointment {
  id: string;
  trainerName: string;
  startTime: string;
  endTime: string;
}

interface Props {
  player: Player | null;
}

export default function Home({ player }: Props) {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const load = async () => {
      if (!player) {
        navigate('/');
        return;
      }
      const sessionsRes = await fetch(`/api/sessions/${player.id}`);
      const sessionsData = await sessionsRes.json();
      setSessions(sessionsData);

      const appointmentsRes = await fetch(`/api/appointments/${player.id}`);
      const appointmentsData = await appointmentsRes.json();
      setAppointments(appointmentsData);
    };
    load();
  }, [player]);

  if (!player) return null;

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
        Welcome, {player.firstName}!
      </h2>
      <p style={{ color: 'var(--color-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
        Here's an overview of your training activity.
      </p>

      {/* Upcoming Appointments */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: 'var(--color-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          Upcoming Sessions
        </h3>
        {appointments.length === 0 ? (
          <p style={{ color: 'var(--color-muted)' }}>No upcoming sessions.</p>
        ) : appointments.map(appt => (
          <div key={appt.id} style={{
            background: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderLeft: '3px solid var(--color-primary)',
            borderRadius: '8px',
            padding: '1rem 1.5rem',
            marginBottom: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
          }}>
            <div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{appt.trainerName}</div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>
                {new Date(appt.startTime).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>
                {new Date(appt.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} — {new Date(appt.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Past Sessions */}
      <section>
        <h3 style={{ color: 'var(--color-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          Past Training Sessions
        </h3>
        {sessions.length === 0 ? (
          <p style={{ color: 'var(--color-muted)' }}>No past sessions found.</p>
        ) : sessions.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime()).map(session => (
          <div
            key={session.id}
            onClick={() => navigate(`/session/${session.id}`)}
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '1rem 1.5rem',
              marginBottom: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              transition: 'background 0.15s'
            }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#F1F5F9'}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'var(--color-card)'}
          >
            <div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{session.trainerName}</div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>
                {new Date(session.startTime).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>Score: {session.score}</div>
              <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>{session.numberOfBalls} balls</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}