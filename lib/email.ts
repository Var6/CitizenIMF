import emailjs from "@emailjs/browser";

export const sendEmail = async (formData: Record<string, string>) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
