import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { RESEND_API_URL } from "@/lib/constants";
import { buildEmailHtml } from "@/lib/email";
import { parseJsonBody, requireEnv, ok, fail } from "@/lib/api";

const ContactBody = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = requireEnv("RESEND_API_KEY");
        if (apiKey instanceof Response) return apiKey;

        const result = await parseJsonBody(request, ContactBody);
        if ("error" in result) return result.error;

        const { name, email, subject, message } = result.data;

        const resendRes = await fetch(RESEND_API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Contact Form <onboarding@resend.dev>",
            to: "annaraghu2308@gmail.com",
            reply_to: email,
            subject: `[annamalai.dev] ${subject}`,
            html: buildEmailHtml(name, email, subject, message),
          }),
        });

        if (!resendRes.ok) {
          const err = await resendRes.text();
          console.error("Resend API error:", resendRes.status, err);
          return fail("Failed to deliver email", 502);
        }

        return ok({ sent: true });
      },
    },
  },
});
