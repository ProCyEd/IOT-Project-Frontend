import { useEffect } from 'react'
import io from 'socket.io-client'
const BSON = require('bson');

export default () => {
  useEffect(async () => {

    let socket = new WebSocket("ws://144.75.134.25:8765");
    socket.onopen = () => {
      console.log("Connected")
      const user = {
        email: "Cole",
        password: "1234"
      }
      socket.send(JSON.stringify(user));
    }

    socket.onmessage = (event) => {
      console.log(event.data)
    }

    /* const socket = new WebSocket('ws://localhost:3001');

    socket.addEventListener('open', (e) => {
        console.log("connected to ws")
    }) */
    /* fetch("ws://144.75.134.25:8765").finally(() => {
      const socket = io()

      socket.on('connect', () => {
        console.log('connect')
        socket.emit('cole')
      })

      socket.on('hello', data => {
        console.log('hello', data)
      })

      socket.on('a user connected', () => {
        console.log('a user connected')
      })

      socket.on('disconnect', () => {
        console.log('disconnect')
      })
    }) */
  }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted

  return <h1>Socket.io</h1>
}