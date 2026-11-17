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
    const mobile = String(body.mobile || body.email || "").trim();
    const password = String(body.password || "").trim();

    if (!mobile || !password) {
      return new Response(JSON.stringify({ error: "Mobile number and password required" }), {
        status: 400,
      });
    }

    // Try to connect to MongoDB for regular users
    try {
      const client = await getMongoClient();
      const db = client.db("srkss");
      const users = db.collection("users");

      const user = await users.findOne<{
        passwordHash: string;
        role?: string;
        mobile?: string;
        email?: string;
        name?: string;
        address?: string;
      }>({ $or: [{ mobile }, { email: mobile }] });
      if (!user) {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
      }

      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });
      }

      // For simplicity, return a minimal session object. You can swap to JWT later.
      return new Response(
        JSON.stringify({
          ok: true,
          user: {
            name: user.name,
            mobile: user.mobile || user.email || mobile,
            address: user.address,
            role: user.role || "user"
          }
        }),
        {
          status: 200,
          headers: { "content-type": "application/json" },
        }
      );
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return new Response(JSON.stringify({ error: "Database connection failed. Please check your MongoDB configuration." }), { status: 500 });
    }
  } catch (err) {
    console.error("login handler error", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

