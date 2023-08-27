const mongoose = require('mongoose')
const connecttionString =
  'mongodb+srv://sebin:sebin123@to-do.iz0mdua.mongodb.net/To-Do?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(connecttionString, {
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
