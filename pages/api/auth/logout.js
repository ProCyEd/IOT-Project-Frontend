import cookie from 'cookie'

export default function logout(req, res) {

    res.setHeader("Set-Cookie", cookie.serialize("token", "", {
        httpOnly: true,
        //secure: needs to be set to http only but in dev we dont have that
        expires: new Date(0),
        sameSite: "strict",
        path: "/"
      }))
      
    res.statusCode = 200
    res.json({Success: true})
}