// const mongoose = require("mongoose");
// const URL =
//   "mongodb+srv://lidor_ashush:knc7jpMsAK4B@cluster0.nekqmgn.mongodb.net/";
// async function connect() {
//   try {
//     await mongoose.connect(URL);
//     console.log("connect to db");
//   } catch (error) {
//     throw new Error("Connection failed!");
//   }
// }

// module.exports = connect;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://lidor_ashush:knc7jpMsAK4B@cluster0.nekqmgn.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("cohen_calendar").command({ ping: 1 });
    console.log(client);
    // await client.db("cohen_calendar").collection("persons").find({});
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports = { run, client };
// run().catch(console.dir);
