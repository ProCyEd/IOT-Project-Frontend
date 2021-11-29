import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.json({Status: "No Token"})

    jwt.verify(token, '8af60e0d-b394-48b2-9bfe-9a1034fa1096', (err, data) => {
        if(err) return res.json({Status: "Invalid Token"})
        req.data = data
        res.json({Status: "User Authenticated"})
        next();
    })
}