import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const dataPath = path.join(process.cwd(), 'data', 'emails.json');

    let emails = [];
    if (fs.existsSync(dataPath)) {
      const fileData = fs.readFileSync(dataPath);
      emails = JSON.parse(fileData);
    }

    emails.push(email);

    fs.writeFileSync(dataPath, JSON.stringify(emails, null, 2));

    res.status(200).json({ message: 'Email saved successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
