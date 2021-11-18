import { hash } from 'bcrypt';

export default async function signup(req, res) {

  if (req.method === 'POST') {
    hash(req.body.password, 10, async function(err, hash) {
      // Store hash in your password DB.

      const person = {
        name: req.body.name,
        email: req.body.email,
        password: hash
      }

      await fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    })
    .then(response => response.json())
    .then(data => res.json(data));
    });
    
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}