import '/socket.io/socket.io.js'

const socket = io()

const input = document.querySelector('input')
const form = document.querySelector('form')
const display = document.querySelector('main')

const id = Math.floor(Math.random() * (999 - 100)) + 100

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value) {
    socket.emit('send', { value: input.value, id })
    input.value = ''
  }
})

socket.on('send', (msg) => {
  const msgEl = document.createElement('p')
  msgEl.innerHTML = `${msg.value} <span>${msg.id}</span>`

  if (msg.id === id) {
    msgEl.className = 'you'
  }

  display.prepend(msgEl)
})
