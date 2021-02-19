const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose
            .connect(process.env.MONGO_URI,
                {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                });
        
        console.log(
            `MongoDB connected:
            ${connect.connection.host}`.red.bold);
        
    }catch (e) {
        console.log(`Error: ${e.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;