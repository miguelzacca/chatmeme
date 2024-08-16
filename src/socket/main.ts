import { io } from '../index.js'

export const socketActions = () => {
  io.on('connection', (socket) => {
    socket.on('send', (msg) => {
      io.emit('send', msg)
    })
  })
}
