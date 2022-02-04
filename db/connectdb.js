import mongoose from 'mongoose';

const connectDB = async (DATABSE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "phone",
        };
        await mongoose.connect(DATABSE_URL, DB_OPTIONS);
        console.log('Connected Successfully..');
    } catch(error) {
        console.log(error)
    }
};

export default connectDB;