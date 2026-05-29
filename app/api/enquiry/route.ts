import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { sendEmail } from "@/lib/email";
import { sendWhatsApp } from "@/lib/whatsapp";

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();

    const name    = fd.get("name") as string;
    const phone   = fd.get("phone") as string;
    const email   = fd.get("email") as string;
    const address = fd.get("address") as string;
    const systems = fd.getAll("systems") as string[];
    const glass   = fd.get("glass") as string;
    const stage   = fd.get("stage") as string;
    const message = fd.get("message") as string;
    const files   = fd.getAll("files") as File[];

    if (!name || !phone || !email || !address) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // Upload files to Vercel Blob
    const fileLinks: string[] = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const blob = await put(`enquiries/${Date.now()}-${file.name}`, file, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      fileLinks.push(blob.url);
    }

    const filesHtml = fileLinks.length
      ? `<ul>${fileLinks.map((u) => `<li><a href="${u}">${u}</a></li>`).join("")}</ul>`
      : "<p>None</p>";

    const htmlBody = `
      <h2 style="color:#1F3D2E;">New Enquiry — Ventino Website</h2>
      <table cellpadding="6" style="border-collapse:collapse;width:100%">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Site address</b></td><td>${address}</td></tr>
        <tr><td><b>Systems</b></td><td>${systems.join(", ") || "—"}</td></tr>
        <tr><td><b>Glass</b></td><td>${glass || "—"}</td></tr>
        <tr><td><b>Stage</b></td><td>${stage || "—"}</td></tr>
        <tr><td><b>Message</b></td><td>${message || "—"}</td></tr>
        <tr><td><b>Files</b></td><td>${filesHtml}</td></tr>
      </table>
    `;

    const waMessage = `🏠 NEW ENQUIRY — Ventino\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nSystems: ${systems.join(", ") || "—"}\nStage: ${stage}\nFiles: ${fileLinks.length} uploaded`;

    await Promise.all([
      sendEmail({ subject: `New Enquiry — ${name}`, html: htmlBody }),
      sendWhatsApp(waMessage),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
