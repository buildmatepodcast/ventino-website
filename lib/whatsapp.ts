// WhatsApp Cloud API helper — swap provider by replacing the implementation.

export async function sendWhatsApp(message: string): Promise<void> {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const notifyNumber = process.env.NOTIFY_WHATSAPP_NUMBER;

  if (!token || !phoneNumberId || !notifyNumber) {
    console.warn("WhatsApp env vars not set — skipping WA notification");
    return;
  }

  const res = await fetch(
    `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: notifyNumber,
        type: "text",
        text: { body: message },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`WhatsApp API error: ${JSON.stringify(err)}`);
  }
}
