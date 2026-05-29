import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
  subject: string;
  html: string;
}

export async function sendEmail({ subject, html }: EmailPayload) {
  const { error } = await resend.emails.send({
    from: "Ventino Website <noreply@ventino.in>",
    to: process.env.NOTIFY_EMAIL!,
    subject,
    html,
  });
  if (error) throw new Error(`Resend error: ${error.message}`);
}
