import mongoose from "mongoose";

let cached = globalThis.__mongooseConn;

export async function connectToMongo() {
  if (cached && cached.readyState === 1) return cached;
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  if (!cached) {
    cached = globalThis.__mongooseConn = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        // Keeps connection stable across serverless/route invocations.
        bufferCommands: false,
      }
    );
  }

  return cached;
}

