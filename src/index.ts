import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { viewRoutes } from './routes/viewRoutes.js'
import { env } from './config/configuration.js'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { socketActions } from './socket/main.js'

const app = express()
const server = createServer(app)

export const io = new Server(server)
socketActions()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(compression())
app.use(cors())

app.use('/', viewRoutes)

const PORT = env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Running... :${PORT}`)
})
