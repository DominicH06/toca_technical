import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// helper function that parses through json file and converts to js object
function loadData<T>(filename: string): T {
  const filePath = join(__dirname, 'data', filename);
  const raw = readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

// When the webapp calls for a player get the email from the request and return player if found
// or an error with a message if not
app.get('/api/player', (req, res) => {
  const email = req.query.email;
  const profiles = loadData<any[]>('profiles.json');
  const player = profiles.find(p => p.email.toLowerCase() === String(email).toLowerCase());
  if (!player){
    return res.status(404).json({ error: 'Player not found' });
  }
  return res.json(player);
});

// When webapp calls for session based on the playerId, returns the sessions assosciated with this id
// Maybe i want to add a feature to schedule or at least a button if empty
app.get('/api/sessions/:playerId', (req, res) => {
  const playerId  = req.params.playerId;
  const sessions = loadData<any[]>('trainingSessions.json');
  return res.json(sessions.filter(s => s.playerId === playerId));
});

// When webapp looks at specific session, returns the session and details based on sessionId
// If no session with the sessionId returns error, otherwise returns the js object of the session
app.get('/api/session/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const sessions = loadData<any[]>('trainingSessions.json');
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return res.status(404).json({ error: 'Session not found' });
  return res.json(session);
});

// When the webapp looks for a specific appointment returns js object of the appointments based on playerId
app.get('/api/appointments/:playerId', (req, res) => {
  const { playerId } = req.params;
  const appointments = loadData<any[]>('appointments.json');
  return res.json(appointments.filter(a => a.playerId === playerId));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});