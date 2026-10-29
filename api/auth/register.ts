import { getMongoClient } from "../_db.js";
import bcrypt from "bcryptjs";

export default async function handler(req: Request): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
      });
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "Expected application/json" }), {
        status: 415,
      });
    }

    const body = await req.json();
    const { email, password, name, gender } = body;

    if (!email || !password || !name) {
      return new Response(JSON.stringify({ error: "Email, password, and name are required" }), {
        status: 400,
      });
    }

    const client = await getMongoClient();
    const db = client.db("srkss");
    const users = db.collection("users");

    // Check if user already exists
    const existingUser = await users.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 409,
      });
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create user document
    const userDoc = {
      email: email.toLowerCase(),
      passwordHash,
      name: name.trim(),
      gender: gender || "not specified",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await users.insertOne(userDoc);

    return new Response(
      JSON.stringify({ 
        message: "User registered successfully",
        userId: result.insertedId 
      }),
      {
        status: 201,
        headers: { "content-type": "application/json" },
      }
    );
  } catch (err) {
    console.error("register handler error", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
