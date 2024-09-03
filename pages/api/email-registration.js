import path from 'path';
import fs from 'fs';

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function handler(req, res) {
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({ message: 'No events found' });
  }

  const { method } = req;
  if (method === 'POST') {
    const { email, eventId } = req.body;

    if (!email || !email.includes('@') || !eventId) {
      res.status(422).json({ message: 'Invalid data' });
      return;
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({ message: `Email ${email} already registered for the event` });
        } else {
          ev.emails_registered.push(email);
        }
      }
      return ev;
    });
    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents }, null, 2)
    );

    res.status(200).json({
      message: `Registration successful for the email ${email}`,
      email,
      eventId,
    });
  }
}
