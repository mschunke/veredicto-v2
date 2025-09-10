import { COLLECTIONS } from "@/types/mongodb";
import { MongoClient } from "mongodb";

let mongoClient: null | MongoClient = null;

async function getMongoClient() {
  if (mongoClient) return mongoClient;

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined");
  }

  mongoClient = new MongoClient(mongoUri);
  await mongoClient.connect();
  return mongoClient;
}

export async function getUserCollection() {
  const client = await getMongoClient();

  return client.db().collection(COLLECTIONS.USERS);
}
