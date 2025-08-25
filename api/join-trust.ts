import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI as string;
if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

let client: MongoClient | null = null;

async function getClient() {
  if (client) return client;
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  return client;
}

export default async function handler(req: Request): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
    }

    const contentType = req.headers.get("content-type") || "";

    let payload: any;

    if (contentType.includes("application/json")) {
      payload = await req.json();
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      payload = Object.fromEntries(form.entries());
    } else {
      return new Response(JSON.stringify({ error: "Unsupported content type" }), { status: 415 });
    }

    const mongo = await getClient();
    const db = mongo.db("srkss");
    const collection = db.collection("join_trust_submissions");

    const doc = {
      name: payload.name ?? "",
      mobile: payload.mobile ?? "",
      location: payload.location ?? "",
      email: payload.email ?? "",
      mail: payload.mail ?? "",
      gender: payload.gender ?? "",
      createdAt: new Date(),
    };

    const result = await collection.insertOne(doc);

    return new Response(JSON.stringify({ ok: true, id: result.insertedId }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err: any) {
    console.error("join-trust handler error", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

