import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Contact / RFQ form endpoint.
 *
 * PREVIEW MODE: this just logs the submission server-side and returns OK.
 *
 * To wire this up to Google Sheets / Excel later, add an Apps Script Web App
 * URL (or a Make.com / Zapier webhook) as an env var SHEET_WEBHOOK_URL,
 * uncomment the forward block below, and redeploy. Nothing on the form-side
 * needs to change.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const submission = {
      ...body,
      submittedAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "",
    };

    // Log to Vercel logs in preview mode.
    // eslint-disable-next-line no-console
    console.log("[shantanu/quote] new submission", submission);

    // === Wire-up to Google Sheets / Excel (uncomment when ready) ===
  if (process.env.SHEET_WEBHOOK_URL) {
  const r = await fetch(process.env.SHEET_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });
  const text = await r.text();
  console.log("[shantanu/quote] sheet status:", r.status, "body:", text.slice(0, 300));
}
    

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "invalid-payload" },
      { status: 400 }
    );
  }
}
