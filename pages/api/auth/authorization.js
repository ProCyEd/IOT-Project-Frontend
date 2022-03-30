import jwt from 'jsonwebtoken';

export default function authenticateToken(req, res) {
    const authHeader = req.headers['cookie']
    const token = authHeader && authHeader.split('=')[1]
    if(token == null) return res.json({status: "No Token", verified: false})

    jwt.verify(token, "secret_key", (err, data) => {
        if(err) return res.json({status: "Invalid Token", verified: false})
        req.data = data
        res.json({status: "User Authenticated", verified: true})
    })
}