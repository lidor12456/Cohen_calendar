import { MongoClient } from "mongodb";

export default function connectToMongoDb() {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
}
