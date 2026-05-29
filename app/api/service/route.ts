import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { sendWhatsApp } from "@/lib/whatsapp";

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();

    const name        = fd.get("name") as string;
    const phone       = fd.get("phone") as string;
    const email       = fd.get("email") as string;
    const address     = fd.get("address") as string;
    const product     = fd.get("product") as string;
    const installDate = fd.get("installDate") as string;
    const problem     = fd.get("problem") as string;
    const fileUrlsRaw = fd.get("fileUrls") as string | null;
    const fileLinks: string[] = fileUrlsRaw ? JSON.parse(fileUrlsRaw) : [];

    if (!name || !phone || !email || !address || !problem) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    const filesHtml = fileLinks.length
      ? `<ul>${fileLinks.map((u) => `<li><a href="${u}">${u}</a></li>`).join("")}</ul>`
      : "<p>None</p>";

    const htmlBody = `
      <h2 style="color:#1F3D2E;">SERVICE REQUEST — Ventino Website</h2>
      <table cellpadding="6" style="border-collapse:collapse;width:100%">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Installation address</b></td><td>${address}</td></tr>
        <tr><td><b>Product type</b></td><td>${product || "—"}</td></tr>
        <tr><td><b>Install date</b></td><td>${installDate || "—"}</td></tr>
        <tr><td><b>Problem</b></td><td>${problem}</td></tr>
        <tr><td><b>Files</b></td><td>${filesHtml}</td></tr>
      </table>
    `;

    const waMessage = `🔧 SERVICE REQUEST — Ventino\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nProduct: ${product || "—"}\nProblem: ${problem.substring(0, 200)}${problem.length > 200 ? "…" : ""}\nFiles: ${fileLinks.length} uploaded`;

    await Promise.all([
      sendEmail({ subject: `SERVICE REQUEST — ${name}`, html: htmlBody }),
      sendWhatsApp(waMessage),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Service route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
