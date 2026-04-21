import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const get = (key: string) => (data.get(key) as string) ?? "";

    const position = get("position");
    const location = get("location");
    const firstName = get("firstName");
    const lastName = get("lastName");
    const email = get("email");
    const phone = get("phone");
    const startDate = get("startDate");
    const experience = get("experience");
    const experienceDetails = get("experienceDetails");
    const cvFile = data.get("cv") as File | null;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;color:#1c1917;margin:0;padding:0;background:#f5f4f2}
  .wrap{max-width:600px;margin:0 auto;background:#fff}
  .header{background:#1c1917;padding:28px 32px;text-align:center}
  .header h1{color:#C9974A;font-size:20px;margin:0 0 4px}
  .header p{color:#a8a29e;font-size:12px;margin:0}
  .section{padding:20px 32px;border-bottom:1px solid #e7e5e4}
  .section h2{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#C9974A;margin:0 0 12px}
  .row{display:flex;gap:12px;margin-bottom:8px;font-size:13px}
  .lbl{color:#78716c;width:150px;flex-shrink:0}
  .val{color:#1c1917;font-weight:600;flex:1}
  .block{margin-bottom:12px;font-size:13px}
  .block .lbl{display:block;color:#78716c;margin-bottom:4px;font-size:12px}
  .block .val{display:block;background:#fafaf9;border:1px solid #e7e5e4;border-radius:6px;padding:10px 12px;white-space:pre-wrap;font-weight:400;color:#44403c}
  .footer{padding:16px 32px;background:#fafaf9;text-align:center;font-size:11px;color:#a8a29e}
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <h1>Neue Bewerbung</h1>
    <p>SPARK Maklerservice GmbH · Karriere</p>
  </div>
  <div class="section">
    <h2>Stelle</h2>
    <div class="row"><span class="lbl">Position</span><span class="val">${position} – ${location}</span></div>
  </div>
  <div class="section">
    <h2>Persönliche Daten</h2>
    <div class="row"><span class="lbl">Name</span><span class="val">${firstName} ${lastName}</span></div>
    <div class="row"><span class="lbl">E-Mail</span><span class="val"><a href="mailto:${email}" style="color:#C9974A">${email}</a></span></div>
    <div class="row"><span class="lbl">Telefon</span><span class="val"><a href="tel:${phone}" style="color:#C9974A">${phone}</a></span></div>
  </div>
  <div class="section">
    <h2>Frühster Beginn</h2>
    <div class="row"><span class="lbl">Starttermin</span><span class="val">${startDate}</span></div>
  </div>
  <div class="section">
    <h2>Vertriebserfahrung</h2>
    <div class="row"><span class="lbl">Erfahrung</span><span class="val">${experience}</span></div>
    ${experienceDetails ? `<div class="block"><span class="lbl">Details</span><span class="val">${experienceDetails}</span></div>` : ""}
  </div>
  <div class="section">
    <h2>Lebenslauf</h2>
    <div class="row"><span class="lbl">Anhang</span><span class="val">${cvFile ? cvFile.name : "Nicht hochgeladen"}</span></div>
  </div>
  <div class="footer">Eingereicht über spark-maklerservice.com</div>
</div>
</body>
</html>`;

    // Build attachments array if CV was uploaded
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type || "application/octet-stream",
      });
    }

    await transporter.sendMail({
      from: `"SPARK Karriere" <${process.env.SMTP_USER}>`,
      to: process.env.APPLY_TO || "info@sparkmaklerservice.de",
      replyTo: email,
      subject: `Bewerbung: ${position} – ${firstName} ${lastName}`,
      html,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
