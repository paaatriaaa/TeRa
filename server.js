const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))