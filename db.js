const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://0.0.0.0:27017/AnimeDB'


const app = express()


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection


con.on('open', () => {
    console.log('connected...')
})


app.use(express.json())


const alienRouter = require('./routes/auth')
app.use('/aliens',alienRouter)


app.listen(9000, () => {
    console.log('Server started')
})




// const mongoose = require("mongoose");

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };
