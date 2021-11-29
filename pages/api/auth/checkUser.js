const users = [
    {
        email: 'corsonca23@mail.vmi.edu',
        password: 'admin'
    },
    {
        email: 'shelleywr23@mail.vmi.edu',
        password: 'admin'
    },
    {
        email: 'millercc23@mail.vmi.edu',
        password: 'admin'
    },
]

export default function checkUser(req, res) {

    let flag = false
    
    for (let i = 0; i < users.length; i++) {
        if(users[i].email == req.body.email && users[i].password == req.body.password) {
            flag = true
        }
    }

    if(flag) {
        res.status(200).json({ result: true})
    } else {
        res.status(200).json({ result: false})
    }
  }