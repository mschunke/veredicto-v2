import { type Db, MongoClient } from "mongodb";
import { COLLECTIONS } from "@/types/mongodb";

let mongoClient: null | MongoClient = null;
let mongoDb: null | Db = null;

export async function getMongoClient() {
  // Check if client exists and is connected
  if (mongoClient) {
    try {
      // Test the connection with a simple ping
      await mongoClient.db().admin().ping();
      return mongoClient;
    } catch {
      // Connection is broken, close it and create a new one
      try {
        await mongoClient.close();
      } catch {
        // Ignore errors when closing broken connection
      }
      mongoClient = null;
      mongoDb = null;
    }
  }

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined");
  }

  mongoClient = new MongoClient(mongoUri);
  await mongoClient.connect();
  return mongoClient;
}

export async function getMongoDb() {
  // Check if db exists and client is still connected
  if (mongoDb && mongoClient) {
    try {
      await mongoClient.db().admin().ping();
      return mongoDb;
    } catch {
      mongoDb = null;
    }
  }

  const client = await getMongoClient();
  mongoDb = client.db();
  return mongoDb;
}

// Synchronous version for better-auth initialization
// This creates a connection that better-auth will manage
export function createMongoDb() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined");
  }

  const client = new MongoClient(mongoUri);

  // Start the connection process (non-blocking)
  client.connect().catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

  return client.db();
}

export async function getUserCollection() {
  const db = await getMongoDb();
  return db.collection(COLLECTIONS.USERS);
}

// Graceful shutdown function
export async function closeMongoDB() {
  if (mongoClient) {
    try {
      await mongoClient.close();
      mongoClient = null;
      mongoDb = null;
    } catch (error) {
      console.error("Error closing MongoDB connection:", error);
    }
  }
}
