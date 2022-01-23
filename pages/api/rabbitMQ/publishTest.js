import amqp from 'amqplib'

export default async function publish(req, res) {
  
    if (req.method === 'POST') {

        try {

            const message = req.body.message;
            const connection = await amqp.connect("amqps://msdqunsz:8HfRRHR4k_1MnSrcSnL2dFadlDbYhsGJ@fish.rmq.cloudamqp.com/msdqunsz")
            const channel = await connection.createChannel();
            const result = await channel.assertQueue("frontendSend");
            channel.sendToQueue("frontendSend", Buffer.from(JSON.stringify(message)))
            res.send({ response: `Job ${message} Success`, status: true})
            
        } catch (error) {
            console.error(error)
            res.send({response: `Job Failed!`, status: true})
        }
        
    } else {
      res.status(405).json({ message: 'We only support POST' });
    }
  }