import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret } from '../../api/secret';

export default async function login(req, res) {

  var person = null

  if (req.method === 'POST') {

    const peopleRes = await fetch('http://localhost:3000/api/data', {method: 'GET'});
    const people = await peopleRes.json()

    for(let i = 0; i < people.length; i++) {
      console.log(people[i].email)
      console.log(req.body.email)
      if(people[i].email == req.body.email) {
        person = people[i];
        break;
      }
    }

    if(person == null) res.json({ message: 'Ups, something went wrong!' });

    if (req.body.password == person.password) {
      const claims = { myPersonEmail: person.email };
      const accessToken = jwt.sign(claims, '8af60e0d-b394-48b2-9bfe-9a1034fa1096')
      //const jwt = sign(claims, secret, { expiresIn: '1h' });
      res.json({ authToken: accessToken });
    } else {
      res.json({ message: 'Ups, something went wrong! Inside though' });
    }

    /* compare(req.body.password, person.password, function(err, result) {
      console.log(req.body.password)
      console.log(person.password)
      if (!err && result) {
        const claims = { myPersonEmail: person.email };
        const jwt = sign(claims, secret, { expiresIn: '1h' });
        res.json({ authToken: jwt });
      } else {
        res.json({ message: 'Ups, something went wrong! Inside though' });
      }
    }); */
      
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}