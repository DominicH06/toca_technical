import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/signInPage';
import Layout from './components/layout';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Profile from './pages/profilePage';
import SessionDetail from './pages/sessionDetailsPage';

// defines structure of an object called Player
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

// player is either logged in or not, state is changed upon login
// Browser Router listens for changes in url and sends users to respective pages based on this
export default function App() {
  const [player, setPlayer] = useState<Player | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn onSignIn={setPlayer} />} />
        <Route element={<Layout player={player} />}>
          <Route path="/home" element={<Home player={player} />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile player={player} />} />
          <Route path="/session/:sessionId" element={<SessionDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}