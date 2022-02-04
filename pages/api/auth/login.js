import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default async function login(req, res) {

  var person = null

  if (req.method === 'POST') {

    //const people = await getUserEmails();

    const peopleRes = await fetch('http://localhost:3000/api/auth/data', {method: 'GET'});
    const people = await peopleRes.json()

    for(let i = 0; i < people.length; i++) {
      if(people[i].email == req.body.email) {
        person = people[i];
        break;
      }
    }

    if(person == null) res.json({ message: 'Ups, something went wrong!' });

    if (req.body.password == person.password) {
      const claims = { myPersonEmail: person.email };
      const accessToken = jwt.sign(claims, process.env.ACCESS_TOKEN)
      //const jwt = sign(claims, secret, { expiresIn: '1h' });
      res.setHeader("Set-Cookie", cookie.serialize("token", accessToken, {
        httpOnly: true,
        //secure: needs to be set to https only but in dev we dont have that
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/"
      }))
      res.json({ message: 'success'});
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