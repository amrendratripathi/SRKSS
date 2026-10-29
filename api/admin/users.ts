import { getMongoClient } from "../_db.js";

export default async function handler(_req: Request): Promise<Response> {
  try {
    const client = await getMongoClient();
    const db = client.db("srkss");
    
    // Get trust members from join_trust_submissions collection
    const trustMembers = db.collection("join_trust_submissions");
    const members = await trustMembers
      .find({}, { projection: { name: 1, email: 1, mobile: 1, location: 1, gender: 1, createdAt: 1 } })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    // Also get regular users for completeness
    const users = db.collection("users");
    const userList = await users
      .find({}, { projection: { email: 1, name: 1, gender: 1, role: 1, createdAt: 1, updatedAt: 1 } })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    return new Response(JSON.stringify({ 
      trustMembers: members,
      users: userList 
    }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.error("admin/users handler error", err);
    // Return empty data if database is not available
    return new Response(JSON.stringify({ 
      trustMembers: [],
      users: [],
      error: "Database connection failed. Please check your MongoDB configuration."
    }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
}


