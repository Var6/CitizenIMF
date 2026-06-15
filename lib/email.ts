import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData: Record<string, string>) => {
  // NEXT_PUBLIC_* vars are inlined at build time. If any are missing here, the
  // production build did not have them set — fix the env in your host and redeploy.
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    const missing = [
      !SERVICE_ID && "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
      !TEMPLATE_ID && "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
      !PUBLIC_KEY && "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
    ]
      .filter(Boolean)
      .join(", ");
    throw new Error(`EmailJS config missing at build time: ${missing}`);
  }

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, {
      publicKey: PUBLIC_KEY,
    });
    return response;
  } catch (error) {
    // EmailJS rejects with { status, text } — log both so the real cause is visible.
    const err = error as { status?: number; text?: string };
    console.error(`EmailJS error ${err?.status ?? "?"}: ${err?.text ?? String(error)}`);
    throw error;
  }
};
