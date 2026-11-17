import { prisma } from "./_db.js";

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  try {
    const submissions = await prisma.submission.findMany({
      where: { photoUrl: { not: null } },
      select: { id: true, name: true, location: true, photoUrl: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
    const members = submissions.map(({ location, createdAt, ...member }) => ({
      ...member,
      address: location || "",
      memberSince: createdAt,
    }));
    return new Response(JSON.stringify({ members }), {
      status: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  } catch (err) {
    console.error("members handler error", err);
    return new Response(JSON.stringify({ error: "Could not fetch members" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
