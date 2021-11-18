import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { secret } from '../../api/secret';

export default async function login(req, res) {

  let person = null

  if (req.method === 'POST') {

    const peopleRes = await fetch('http://localhost:3000/api/data', {method: 'GET'});

    console.log(peopleRes)
    const people = await peopleRes.json()
    console.log(people)
    for(let i = 0; i < people.lenth; i++) {
      if(people[i].email == req.body.email) {
        person = people[i];
        break;
      }
    }

    if(person == null) res.json({ message: 'Ups, something went wrong!' });

    compare(req.body.password, person.password, function(err, result) {
      if (!err && result) {
        const claims = { myPersonEmail: person.email };
        const jwt = sign(claims, secret, { expiresIn: '1h' });
        res.json({ authToken: jwt });
      } else {
        res.json({ message: 'Ups, something went wrong!' });
      }
    });
      
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}