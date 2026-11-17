import { prisma } from "./_db.js";

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

    // Save entry into PostgreSQL via Prisma
    const submission = await prisma.submission.create({
      data: {
        name: payload.name ?? "",
        mobile: payload.mobile ?? "",
        location: payload.location ?? "",
        email: payload.email ?? payload.mail ?? "",
        gender: payload.gender ?? "",
        photoUrl: payload.photoUrl ?? null,
        paymentScreenshotUrl: payload.paymentScreenshotUrl ?? null,
      },
    });

    return new Response(JSON.stringify({ ok: true, id: submission.id, member: submission }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err: any) {
    console.error("join-trust handler error", err);
    return new Response(JSON.stringify({ error: err.message || "Internal Server Error" }), { status: 500 });
  }
}
