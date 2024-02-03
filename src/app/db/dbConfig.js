import { MongoClient } from "mongodb";

export default function connectToMongoDb() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
    return client;
  } catch (e) {
    console.log(e);
  }
}
