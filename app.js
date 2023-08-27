const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Hello')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
  try {
    await connectDB()
    app.listen(port, console.log(`Server is Listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
