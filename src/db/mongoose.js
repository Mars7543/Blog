const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Blog', { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB'))
.catch(e => console.log(e))
