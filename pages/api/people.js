import { verify } from 'jsonwebtoken';
import sqlite from 'sqlite';
import { secret } from '../../api/secret';

export const authenticated = (fn) => async (req, res) => {
  verify(!req.headers.authorization, secret, async function(err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(401).json({ message: 'Sorry you are not authenticated' });
  });
};

export default authenticated(async function getPeople(req, res) {
  const db = await sqlite.open('./mydb.sqlite');
  const people = await db.all('select id, email, name from person');

  res.json(people);
});