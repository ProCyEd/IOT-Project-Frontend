export default async function publish(req, res) {
  
    if (req.method === 'POST') {

        try {

            const message = req.body.message;
            res.send({ response: `Job ${message} Success`, status: true})
            
        } catch (error) {
            console.error(error)
            res.send({response: `Job Failed!`, status: true})
        }
        
    } else {
      res.status(405).json({ message: 'We only support POST' });
    }
  }