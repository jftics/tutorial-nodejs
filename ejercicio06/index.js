import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

import { userRouter } from './routes/user-routes.js'
import { adminRouter } from './routes/admin-routes.js'


const server = express()
server.set('PORT', process.env.PORT || 3000)

//Motor de plantillas EJS
server.set('view engine', 'ejs')
server.set('views', './views')

server.use(morgan('tiny'))
server.use(express.json())
server.use(cookieParser())

server.use('/user', userRouter)
server.use('/admin', adminRouter)

server.get('/', (req, res) => {
    res.render('index')
})
server.use((req, res) => {
    res.statusCode = 404
    res.send('404 not Found')
})
server.listen(server.get('PORT'), () => {
    console.log(`Server on port ${server.get('PORT')}`);
})