const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res, next) => {
  res.send({ message: 'setup done' })
})

app.use('/api', require('./routes/api.route'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`app running on port ${PORT}`))
