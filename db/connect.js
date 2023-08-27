const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    //not requied for v6
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
}

//   .then(() => console.log('Connected to the DB'))
//   .catch((err) => console.log(err))

module.exports = connectDB
