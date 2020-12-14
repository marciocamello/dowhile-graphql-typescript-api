import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/dowhile", {
    useNewUrlParser: true,
    useUnifiedTopology: true  
})