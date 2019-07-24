const express   = require('express')
const path      = require('path')

const app   = express()
const port  = process.env.PORT || 3000

// db config
require('./db/mongoose.js')

// static dir
app.use('/static', express.static(path.join(__dirname, '../public')))

// views
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'ejs')

// routes
app.use(require('./routes'))

app.listen(port, () => console.log(`Server running on port ${port}...`))