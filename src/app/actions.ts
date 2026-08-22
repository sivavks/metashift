"use server";

import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabase";

export interface ReflectionSubmission {
  name: string;
  email: string;
  area: string;
  reflection?: string;
}

export interface SubmissionResult {
  ok: boolean;
  error?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_ADDRESS = "hello@joinmetashift.com";

export async function submitReflection(
  data: ReflectionSubmission
): Promise<SubmissionResult> {
  const name = data.name?.trim();
  const email = data.email?.trim();
  const area = data.area?.trim();
  const reflection = data.reflection?.trim() || null;

  if (!name || !email || !area) {
    return { ok: false, error: "Name, email, and one area are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "That email doesn't look right." };
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error: dbError } = await supabase
      .from("submissions")
      .insert({ name, email, area, reflection });

    if (dbError) {
      console.error("Supabase insert failed:", dbError.message);
      return { ok: false, error: "Something went wrong. Please try again." };
    }
  } catch (err) {
    console.error("Supabase not configured or unreachable:", err);
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  // Email notification is best-effort — the submission is already saved,
  // so a failed notification shouldn't block the visitor's confirmation.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_ADDRESS || "MetaShift <onboarding@resend.dev>",
        to: NOTIFY_ADDRESS,
        subject: `New MetaShift reflection — ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Area: ${area}`,
          `Reflection: ${reflection || "(none)"}`,
        ].join("\n"),
      });
    } catch (err) {
      console.error("Email notification failed:", err);
    }
  }

  return { ok: true };
}
