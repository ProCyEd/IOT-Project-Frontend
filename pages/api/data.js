let people = [];

export default function handler(req, res) {

    if(req.method == "POST") {
        people.push(req.body)
        res.status(200).json({ message: 'Data Updated' })
    }
    if(req.method == "GET") {
        res.status(200).json({people})
    }
    if(req.method == "DELETE") {
        people = [];
        res.status(200).json({ message: 'Data Cleared' })
    }
    
  }